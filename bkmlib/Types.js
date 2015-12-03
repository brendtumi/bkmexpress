/**
 * Created by tumay on 13.04.2015.
 */
var _ = require("lodash"),
	moment = require("moment"),
	Utilities = require("./Utilities");

// NOTE: this is actually not required but its good to have one

//region Requests & Responses
/**
 * VirtualPos
 */
var VirtualPos = function () {
	if (!(this instanceof VirtualPos)) {
		return new (Function.prototype.bind.apply(VirtualPos, arguments));
	}
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
	if (typeof this.extra === "object")
		this.extra = JSON.stringify(this.extra);
};
VirtualPos.prototype.posUrl = '';
VirtualPos.prototype.posUid = '';
VirtualPos.prototype.posPwd = '';
VirtualPos.prototype.is3ds = '';
VirtualPos.prototype.mpiUrl = '';
VirtualPos.prototype.mpiUid = '';
VirtualPos.prototype.mpiPwd = '';
VirtualPos.prototype.md = '';
VirtualPos.prototype.xid = '';
VirtualPos.prototype.is3dsFDec = '';
VirtualPos.prototype.cIp = '';
VirtualPos.prototype.extra = '';

/**
 * merchantWSBaseRequest
 */
function MerchantWSResponseCode() {
	if (!(this instanceof MerchantWSResponseCode)) {
		return new (Function.prototype.bind.apply(MerchantWSResponseCode, arguments));
	}
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
}
MerchantWSResponseCode.prototype.SUCCESS = {"code": 0, "message": "Success"};
MerchantWSResponseCode.prototype.UNKNOWN_ERROR = {"code": 1, "message": "Unknown Error"};
MerchantWSResponseCode.prototype.REQUEST_NOT_SYNCHRONIZED = {"code": 2, "message": "Request Not Synchronized"};
MerchantWSResponseCode.prototype.MAC_VERIFICATION_FAILED = {"code": 3, "message": "MAC Verification Failed"};
MerchantWSResponseCode.prototype.INPUT_VALIDATION_ERROR = {"code": 4, "message": "INPUT_VALIDATION_ERROR"};
MerchantWSResponseCode.prototype.D3S_MPI_MISSING = {"code": 5, "message": "D3S_MPI_MISSING"};
MerchantWSResponseCode.prototype.POS_NOT_MATCHING_POS_URL = {"code": 6, "message": "POS Not Matching, POS URL"};
MerchantWSResponseCode.prototype.MPI_NOT_MATCHING = {"code": 7, "message": "MPI Not Matching"};

/**
 * merchantWSBaseRequest
 */
var merchantWSBaseRequest = function () {
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
};

/**
 * merchantWSBaseResponse
 */
var merchantWSBaseResponse = function () {
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
};
/**
 * result
 * @type result
 */
merchantWSBaseResponse.prototype.result = {
	resultCode: '',
	resultMsg: '',
	resultDet: ''
};

/**
 * requestMerchInfoWSResponse
 * @extends merchantWSBaseResponse
 */
function requestMerchInfoWSResponse() {
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
}
requestMerchInfoWSResponse.prototype = new merchantWSBaseResponse();
//requestMerchInfoWSResponse.prototype.constructor = requestMerchInfoWSResponse;
_.extend(requestMerchInfoWSResponse, merchantWSBaseResponse);
requestMerchInfoWSResponse.prototype.t = '';
requestMerchInfoWSResponse.prototype.posUrl = '';
requestMerchInfoWSResponse.prototype.posUid = '';
requestMerchInfoWSResponse.prototype.posPwd = '';
requestMerchInfoWSResponse.prototype.s3Dauth = '';
requestMerchInfoWSResponse.prototype.mpiUrl = '';
requestMerchInfoWSResponse.prototype.mpiUid = '';
requestMerchInfoWSResponse.prototype.mpiPwd = '';
requestMerchInfoWSResponse.prototype.md = '';
requestMerchInfoWSResponse.prototype.xid = '';
requestMerchInfoWSResponse.prototype.s3DFDec = '';
requestMerchInfoWSResponse.prototype.cIp = '';
requestMerchInfoWSResponse.prototype.extra = '';
requestMerchInfoWSResponse.prototype.ts = '';
requestMerchInfoWSResponse.prototype.s = '';

/**
 * requestMerchInfoResponse
 */
function requestMerchInfoResponse() {
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
}
requestMerchInfoResponse.prototype.requestMerchInfoWSResponse = '';

/**
 * initializePayment
 */
var initializePayment = function () {
	if (!(this instanceof initializePayment)) {
		return new (Function.prototype.bind.apply(initializePayment, arguments));
	}
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
};
/**
 * initializePaymentWSRequest
 */
initializePayment.prototype.initializePaymentWSRequest = '';

/**
 * initializePaymentResponse
 */
var initializePaymentResponse = function () {
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
};
/**
 * initializePaymentWSResponse
 */
initializePaymentResponse.prototype.initializePaymentWSResponse = '';

/**
 * initializePaymentWSRequest
 * @extends merchantWSBaseRequest
 */
var initializePaymentWSRequest = function () {
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
};
initializePaymentWSRequest.prototype = new merchantWSBaseRequest();
//initializePaymentWSRequest.prototype.constructor = initializePaymentWSRequest;
_.extend(initializePaymentWSRequest, merchantWSBaseRequest);
initializePaymentWSRequest.prototype.mId = '';
initializePaymentWSRequest.prototype.sUrl = '';
initializePaymentWSRequest.prototype.cUrl = '';
initializePaymentWSRequest.prototype.msUrl = '';
initializePaymentWSRequest.prototype.mcUrl = '';
initializePaymentWSRequest.prototype.rSource = '';
initializePaymentWSRequest.prototype.dType = '';
initializePaymentWSRequest.prototype.osSource = '';
initializePaymentWSRequest.prototype.uAgent = '';
initializePaymentWSRequest.prototype.sAmount = '';
initializePaymentWSRequest.prototype.cAmount = '';
initializePaymentWSRequest.prototype.instOpts = '';
//initializePaymentWSRequest.prototype.bank = '';
initializePaymentWSRequest.prototype.ts = '';
initializePaymentWSRequest.prototype.s = '';

/**
 * initializePaymentWSResponse
 * @extends merchantWSBaseResponse
 */
var initializePaymentWSResponse = function () {
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
};
initializePaymentWSResponse.prototype = new merchantWSBaseResponse();
//initializePaymentWSResponse.prototype.constructor = initializePaymentWSResponse;
_.extend(initializePaymentWSResponse, merchantWSBaseResponse);
initializePaymentWSResponse.prototype.t = '';
initializePaymentWSResponse.prototype.url = '';
initializePaymentWSResponse.prototype.ts = '';
initializePaymentWSResponse.prototype.s = '';

var IncomingResultModel = function () {
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
};
IncomingResultModel.prototype.t = '';
IncomingResultModel.prototype.r = '';
IncomingResultModel.prototype.posRef = '';
IncomingResultModel.prototype.ts = '';
IncomingResultModel.prototype.s = '';
IncomingResultModel.prototype.xid = '';
IncomingResultModel.prototype.md = '';
IncomingResultModel.prototype.pData = '';
IncomingResultModel.prototype.eKey1 = '';
IncomingResultModel.prototype.eKey2 = '';
IncomingResultModel.prototype.verify = function (bkmPublicKey) {
	// FIXME: looks like there is a problem on here
	var dataToVerify = this.t + this.posRef + this.xid + this.md + this.ts;
	return Utilities.Verify(
		bkmPublicKey,
		this.s,
		dataToVerify
	);
};

var RedirectModel = function () {
	if (arguments.length === 1)
		_.extend(this, arguments[0]);
};
RedirectModel.prototype.t = '';
RedirectModel.prototype.ts = '';
RedirectModel.prototype.s = '';
RedirectModel.prototype.actionUrl = '';
RedirectModel.prototype.sign = function (key) {
	this.ts = new moment().format("YYYYMMDD-HH:mm:ss");
	this.s = Utilities.Sign(this.t + this.ts, key);
};
//endregion

module.exports.VirtualPos = VirtualPos;
module.exports.MerchantWSResponseCode = MerchantWSResponseCode;
module.exports.merchantWSBaseRequest = merchantWSBaseRequest;
module.exports.merchantWSBaseResponse = merchantWSBaseResponse;
module.exports.requestMerchInfoResponse = requestMerchInfoResponse;
module.exports.requestMerchInfoWSResponse = requestMerchInfoWSResponse;
module.exports.initializePayment = initializePayment;
module.exports.initializePaymentResponse = initializePaymentResponse;
module.exports.initializePaymentWSRequest = initializePaymentWSRequest;
module.exports.initializePaymentWSResponse = initializePaymentWSResponse;
module.exports.IncomingResultModel = IncomingResultModel;
module.exports.RedirectModel = RedirectModel;