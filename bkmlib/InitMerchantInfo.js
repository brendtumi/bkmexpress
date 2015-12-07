/**
 * Created by tumay on 24.04.2015.
 */
var path = require("path"),
	Utilities = require("./Utilities"),
	Types = require("./Types"),
	_ = require("lodash"),
	moment = require("moment"),
	soap = require("soap-express");

function verifyRequest(bkmPublicKey, requestObj) {
	var dataToVerify = requestObj.requestMerchInfoWSRequest.t +
		requestObj.requestMerchInfoWSRequest.bid +
		requestObj.requestMerchInfoWSRequest.bName +
		requestObj.requestMerchInfoWSRequest.cBin +
		requestObj.requestMerchInfoWSRequest.nofInst +
		requestObj.requestMerchInfoWSRequest.ts;
	return Utilities.Verify(bkmPublicKey, requestObj.requestMerchInfoWSRequest.s, dataToVerify);
}

function signResponse(merchantPrivateKey, responseObj) {
	var o = responseObj.requestMerchInfoWSResponse;
	var dataToBeHashed =
		o.t +
		o.posUrl +
		o.posUid +
		o.posPwd +
		o.s3Dauth +
		o.mpiUrl +
		o.mpiUid +
		o.mpiPwd +
		o.md +
		o.xid +
		o.s3DFDec +
		o.cIp +
		o.extra +
		o.ts;
	Utilities.inspect("data", dataToBeHashed);
	return Utilities.Sign(dataToBeHashed, merchantPrivateKey);
}

function InitMerchantInfo(virtualPos, OrderIdGenerator, wsdlLocationPath, wsdlLocation, wsdlAddressLocation, bkmPublicKey, merchantPrivateKey, callback) {
	// NOTE: i manually merge .wsdl and .xsd into RequestMerchInfoService_clear.wsdl
	wsdlLocation = wsdlLocation || path.normalize(__dirname + '/../bkm_static/RequestMerchInfoService_clear.wsdl');
	var xml = Utilities.ReadFile(wsdlLocation).replace("#address:location#", wsdlAddressLocation);

	var service = {
		RequestMerchInfoService: {
			RequestMerchInfoServiceImplPort: {
				requestMerchInfo: function (args) {
					var params = args;
					var rsCode = new Types.MerchantWSResponseCode();
					var response = new Types.requestMerchInfoResponse();
					response.requestMerchInfoWSResponse = new Types.requestMerchInfoWSResponse();
					Utilities.inspect("requestMerchInfo", args);
					if (Utilities.CalcTimeDiff(params.requestMerchInfoWSRequest.ts)) {
						// FIXME: Maybe a bug, check again
						if (verifyRequest(bkmPublicKey, params)) {
							var Pos = virtualPos.vpos[virtualPos.default];
							if (_.has(virtualPos.vpos, params.requestMerchInfoWSRequest.bid)) {
								Pos = virtualPos.vpos[params.requestMerchInfoWSRequest.bid];
							}
							Pos.extra.orderId = OrderIdGenerator();
							Utilities.inspect("this", Pos);

							response.requestMerchInfoWSResponse.t = params.requestMerchInfoWSRequest.t;
							response.requestMerchInfoWSResponse.posUrl = Pos.posUrl;
							response.requestMerchInfoWSResponse.posUid = Pos.posUid;
							response.requestMerchInfoWSResponse.posPwd = Pos.posPwd;
							var is3ds = (Pos.is3ds == true);
							response.requestMerchInfoWSResponse.mpiUrl = is3ds ? Pos.mpiUrl : "";
							response.requestMerchInfoWSResponse.mpiUid = is3ds ? Pos.mpiUid : "";
							response.requestMerchInfoWSResponse.mpiPwd = is3ds ? Pos.mpiPwd : "";
							response.requestMerchInfoWSResponse.s3Dauth = is3ds;
							response.requestMerchInfoWSResponse.md = is3ds ? Pos.md : "";
							response.requestMerchInfoWSResponse.xid = is3ds ? Pos.xid : "";

							response.requestMerchInfoWSResponse.s3DFDec = Pos.is3dsFDec;
							response.requestMerchInfoWSResponse.cIp = Pos.cIp;
							response.requestMerchInfoWSResponse.extra = JSON.stringify(Pos.extra);

							response.requestMerchInfoWSResponse.result.resultCode = rsCode.SUCCESS.code;
							response.requestMerchInfoWSResponse.result.resultMsg = rsCode.SUCCESS.message;

							response.requestMerchInfoWSResponse.ts = new moment().format("YYYYMMDD-HH:mm:ss");
							response.requestMerchInfoWSResponse.s = signResponse(merchantPrivateKey, response);

							return response;
						}
						else {
							response.requestMerchInfoWSResponse.result.resultCode = rsCode.MAC_VERIFICATION_FAILED.code;
							response.requestMerchInfoWSResponse.result.resultMsg = rsCode.MAC_VERIFICATION_FAILED.message;
							return response;
						}
					}
					else {
						response.requestMerchInfoWSResponse.result.resultCode = rsCode.REQUEST_NOT_SYNCHRONIZED.code;
						response.requestMerchInfoWSResponse.result.resultMsg = rsCode.REQUEST_NOT_SYNCHRONIZED.message;
						return response;
					}
				}
			}
		}
	};

	var pathOrOptions = {
		path: wsdlLocationPath,
		services: service,
		xml: xml,
		ignoredNamespaces: {
			namespaces: ['typedNamespace'],
			override: true
		}
	};
	var server = soap.expressListen(pathOrOptions);
	server.log = function (type, data) {
		Utilities.inspect("Soap " + type, data);
	};

	var ret = setInterval(function () {
		if (typeof soap.expressMiddleware !== "undefined") {
			Utilities.inspect("BKM soap service:", "up");
			callback(soap.expressMiddleware);
			clearInterval(ret);
		}
		else
			Utilities.inspect("BKM soap service:", "down");
	}, 150);
}
module.exports = InitMerchantInfo;
// get pos function
// wsdl optional