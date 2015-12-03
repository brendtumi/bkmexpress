/**
 * Created by tumay on 13.04.2015.
 */
var path = require("path"),
	Utilities = require("./Utilities"),
	Types = require("./Types"),
	BkmExpressPaymentService = require("./BkmExpressPaymentService"),
	_ = require("lodash"),
	moment = require("moment");

var InitPayment = module.exports = function (merchantId, successUrl, cancelUrl, saleAmount, cargoAmount, mobilSuccessURL, mobilCancelURL, requestSource, deviceType, osSource, userAgent) {
	if (!(this instanceof InitPayment)) {
		return new (Function.prototype.bind.apply(InitPayment, arguments));
	}

	this.merchantId = merchantId || "";
	this.successUrl = successUrl || "";
	this.cancelUrl = cancelUrl || "";
	this.saleAmount = saleAmount || "";
	this.cargoAmount = cargoAmount || "";
	this.mobilSuccessURL = mobilSuccessURL || "";
	this.mobilCancelURL = mobilCancelURL || "";
	this.requestSource = requestSource || "";
	this.deviceType = deviceType || "";
	this.osSource = osSource || "";
	this.userAgent = userAgent || "";
};

InitPayment.prototype.merchantId = null;
InitPayment.prototype.successUrl = null;
InitPayment.prototype.cancelUrl = null;
InitPayment.prototype.saleAmount = null;
InitPayment.prototype.cargoAmount = null;
InitPayment.prototype.mobilSuccessURL = null;
InitPayment.prototype.mobilCancelURL = null;
InitPayment.prototype.requestSource = null;
InitPayment.prototype.deviceType = null;
InitPayment.prototype.osSource = null;
InitPayment.prototype.userAgent = null;

InitPayment.prototype.verifyResponse = function (bkmPublicKey, PaymentWSResponse) {
	var dataToVerify = PaymentWSResponse.t + PaymentWSResponse.url + PaymentWSResponse.ts;
	return Utilities.Verify(bkmPublicKey, PaymentWSResponse.s, dataToVerify);
};
InitPayment.prototype.prepareHash = function (params) {
	var datatoBeHashed = _.implode("", _.values(_.omit(params.initializePaymentWSRequest, ['instOpts', 's', 'ts', 'bank'])));
	_.each(params.initializePaymentWSRequest.instOpts, function (bankInst) {
		_.each(bankInst.bank, function (bank) {
			datatoBeHashed += _.implode("", _.values(_.pick(bank, ['id', 'name', 'expBank'])));
			_.each(bank.bins.bin, function (bin) {
				datatoBeHashed += bin.value;
				_.each(bin.insts.inst, function (inst) {
					datatoBeHashed += _.implode("", _.values(_.pick(inst, ['nofInst', 'amountInst', 'cAmount', 'tAmount', 'cPaid1stInst', 'cAmount', 'expInst'])));
				});
			});
		});
	});
	datatoBeHashed += params.initializePaymentWSRequest.ts;
	return datatoBeHashed;
};
InitPayment.prototype.initPayment = function (banks, merchantPrivateKey, callback, wsdlLocation, bkmPublicKey) {
	var self = this;
	// TODO: I did changed "tns" to "ns1" on wsdl's. This should be fixed when soap updated
	wsdlLocation = wsdlLocation || path.normalize(__dirname + '/../bkm_static/BkmExpressPaymentService.wsdl');

	var params = new Types.initializePayment();
	params.initializePaymentWSRequest = new Types.initializePaymentWSRequest({
		mId: this.merchantId,
		sUrl: this.successUrl,
		cUrl: this.cancelUrl,
		sAmount: this.saleAmount,
		cAmount: this.cargoAmount,
		msUrl: this.mobilSuccessURL,
		mcUrl: this.mobilCancelURL,
		rSource: this.requestSource,
		dType: this.deviceType,
		osSource: this.osSource,
		uAgent: this.userAgent
	});
	params.initializePaymentWSRequest.instOpts = banks;
	params.initializePaymentWSRequest.ts = new moment().format("YYYYMMDD-HH:mm:ss");
	params.initializePaymentWSRequest.s = Utilities.Sign(this.prepareHash(params), merchantPrivateKey);

	// [Fix Soap]
	// FIXME: i will fix this problem on future releases
	params["ns1:initializePaymentWSRequest"] = params.initializePaymentWSRequest;
	delete params.initializePaymentWSRequest;
	// [Fix Soap]

	var ws = new BkmExpressPaymentService(wsdlLocation);
	Utilities.inspect("initializePayment params", params);
	ws.initializePayment(params, function (err, result) {
		Utilities.inspect("initializePayment result", result);
		var response = {state: false};
		if (_.has(result, "initializePaymentWSResponse")) {
			if (result.initializePaymentWSResponse.result.resultCode === 0) {
				var PaymentWSResponse = new Types.initializePaymentResponse(_.omit(result.initializePaymentWSResponse, "result"));
				if (Utilities.CalcTimeDiff(PaymentWSResponse.ts)) {
					if (self.verifyResponse(bkmPublicKey, PaymentWSResponse)) {
						response.state = true;
						response.redirect = new Types.RedirectModel({
							t: PaymentWSResponse.t,
							actionUrl: PaymentWSResponse.url
						});
						response.redirect.sign(merchantPrivateKey);
					}
					else
						response.error = "Not valid response";
				}
				else
					response.error = "Timestamp not in range";
			}
			else {
				response.error = result.initializePaymentWSResponse.result.resultMsg;
				response.errorCode = result.initializePaymentWSResponse.result.resultCode;
			}
		}
		else {
			response.error = "SOAP Error";
			response.soap = {
				error: err,
				result: result
			};
		}
		Utilities.inspect("initializePayment response", response);
		callback(response);
	});
};