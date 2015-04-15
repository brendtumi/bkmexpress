/**
 * Created by tumay on 13.04.2015.
 */
var path = require("path"),
    Utilities = require("./Utilities"),
    Types = require("./Types"),
    BkmExpressPaymentService = require("./BkmExpressPaymentService"),
    _ = require("lodash"),
    moment = require("moment");

var InitPaymentInterface = module.exports = function (merchantId, successUrl, cancelUrl, saleAmount, cargoAmount, mobilSuccessURL, mobilCancelURL, requestSource, deviceType, osSource, userAgent) {
    if (!(this instanceof InitPaymentInterface)) {
        return new (Function.prototype.bind.apply(InitPaymentInterface, arguments));
        //return new InitPaymentInterface(merchantId, successUrl, cancelUrl, saleAmount, cargoAmount, mobilSuccessURL, mobilCancelURL, requestSource, deviceType, osSource, userAgent);
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

InitPaymentInterface.prototype.merchantId = null;
InitPaymentInterface.prototype.successUrl = null;
InitPaymentInterface.prototype.cancelUrl = null;
InitPaymentInterface.prototype.saleAmount = null;
InitPaymentInterface.prototype.cargoAmount = null;
InitPaymentInterface.prototype.mobilSuccessURL = null;
InitPaymentInterface.prototype.mobilCancelURL = null;
InitPaymentInterface.prototype.requestSource = null;
InitPaymentInterface.prototype.deviceType = null;
InitPaymentInterface.prototype.osSource = null;
InitPaymentInterface.prototype.userAgent = null;

InitPaymentInterface.prototype.verifyResponse = function (PaymentWSResponse) {

};
InitPaymentInterface.prototype.prepareHash = function (params) {
    var datatoBeHashed = _.implode("", _.values(_.omit(params.initializePaymentWSRequest, ['instOpts', 's', 'ts', 'bank'])));
    _.each(params.initializePaymentWSRequest.instOpts, function (bankInst) {
        _.each(bankInst.bank, function (bank) {
            datatoBeHashed += _.implode("", _.values(_.pick(bank, ['id', 'name', 'expBank'])));
            _.each(bank.bins.bin,function(bin){
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
InitPaymentInterface.prototype.initPayment = function (banks, key, wsdlLocation, callback) {
    if (typeof wsdlLocation === "function") {
        callback = wsdlLocation;
        wsdlLocation = null;
    }
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
    params.initializePaymentWSRequest.s = Utilities.Sign(this.prepareHash(params), key);

    //Utilities.inspect("timestamp", params.initializePaymentWSRequest.ts);
    //Utilities.inspect("Signature", params.initializePaymentWSRequest.s);
    //Utilities.inspect("params", params);

    // Fix Soap
    params["ns1:initializePaymentWSRequest"] = params.initializePaymentWSRequest;
    delete params.initializePaymentWSRequest;
    //////

    var ws = new BkmExpressPaymentService(wsdlLocation);
    ws.initializePayment(params, callback);
};