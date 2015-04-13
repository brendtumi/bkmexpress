/**
 * Created by tumay on 13.04.2015.
 */
var _ = require("lodash");

//region Variables
/**
 * installment
 */
var installment = function () {
}
/**
 * nofInst
 * @type Number
 */
installment.prototype.nofInst = null;
/**
 * amountInst
 * @type String
 */
installment.prototype.amountInst = null;
/**
 * cAmount
 * @type String
 */
installment.prototype.cAmount = null;
/**
 * tAmount
 * @type String
 */
installment.prototype.tAmount = null;
/**
 * cPaid1stInst
 * @type Boolean
 */
installment.prototype.cPaid1stInst = null;
/**
 * expInst
 * @type String
 */
installment.prototype.expInst = null;

/**
 * insts
 */
var insts = function () {
}
/**
 * inst
 * @type installment[]
 */
insts.prototype.inst = null;

/**
 * bin
 */
var bin = function () {
}
/**
 *
 * @type String
 */
bin.prototype.value = null;
/**
 *
 * @type anyType
 */
bin.prototype.insts = null;
/**
 *
 * @type installment[]
 */
bin.prototype.inst = null;

/**
 * bins
 */
var bins = function () {
}
/**
 * bin
 * @type bin[]
 */
bins.prototype.bin = null;

/**
 * bank
 */
var bank = function () {
}
/**
 * id
 * @type String
 */
bank.prototype.id = null;
/**
 * name
 * @type String
 */
bank.prototype.name = null;
/**
 * expBank
 * @type String
 */
bank.prototype.expBank = null;
/**
 * bins
 * @type anyType
 */
bank.prototype.bins = null;
/**
 * bin
 * @type bin[]
 */
bank.prototype.bin = null;

/**
 * instOpts
 */
var instOpts = function () {
}
/**
 * bank
 * @type bank[]
 */
instOpts.prototype.bank = null;

/**
 * result
 */
var result = function () {
}
/**
 * resultCode
 * @type Number
 */
result.prototype.resultCode = null;
/**
 * resultMsg
 * @type String
 */
result.prototype.resultMsg = null;
/**
 * resultDet
 * @type String
 */
result.prototype.resultDet = null;

//endregion

//region Requests & Responses
/**
 * merchantWSBaseRequest
 */
var merchantWSBaseRequest = function () {
}

/**
 * merchantWSBaseResponse
 */
var merchantWSBaseResponse = function () {
}
/**
 * result
 * @type result
 */
merchantWSBaseResponse.prototype.result = null;

/**
 * initializePayment
 */
var initializePayment = function () {
}
/**
 * initializePaymentWSRequest
 */
initializePayment.prototype.initializePaymentWSRequest = null;

/**
 * initializePaymentResponse
 */
var initializePaymentResponse = function () {
}
/**
 * initializePaymentWSResponse
 */
initializePaymentResponse.prototype.initializePaymentWSResponse = null;

/**
 * initializePaymentWSRequest
 * @extends merchantWSBaseRequest
 */
var initializePaymentWSRequest = function () {
}
initializePaymentWSRequest.prototype = new merchantWSBaseRequest();
initializePaymentWSRequest.prototype.constructor = initializePaymentWSRequest;
_.extend(initializePaymentWSRequest, merchantWSBaseRequest);
/**
 * mId
 * @type String
 */
initializePaymentWSRequest.prototype.mId = null;
/**
 * sUrl
 * @type String
 */
initializePaymentWSRequest.prototype.sUrl = null;
/**
 * cUrl
 * @type String
 */
initializePaymentWSRequest.prototype.cUrl = null;
/**
 * msUrl
 * @type String
 */
initializePaymentWSRequest.prototype.msUrl = null;
/**
 * mcUrl
 * @type String
 */
initializePaymentWSRequest.prototype.mcUrl = null;
/**
 * rSource
 * @type String
 */
initializePaymentWSRequest.prototype.rSource = null;
/**
 * dType
 * @type String
 */
initializePaymentWSRequest.prototype.dType = null;
/**
 * osSource
 * @type String
 */
initializePaymentWSRequest.prototype.osSource = null;
/**
 * uAgent
 * @type String
 */
initializePaymentWSRequest.prototype.uAgent = null;
/**
 * sAmount
 * @type String
 */
initializePaymentWSRequest.prototype.sAmount = null;
/**
 * cAmount
 * @type String
 */
initializePaymentWSRequest.prototype.cAmount = null;
/**
 * instOpts
 * @type anyType
 */
initializePaymentWSRequest.prototype.instOpts = null;
/**
 * bank
 * @type bank[]
 */
initializePaymentWSRequest.prototype.bank = null;
/**
 * ts
 * @type String
 */
initializePaymentWSRequest.prototype.ts = null;
/**
 * s
 * @type String
 */
initializePaymentWSRequest.prototype.s = null;


/**
 * initializePaymentWSResponse
 * @extends merchantWSBaseResponse
 */
var initializePaymentWSResponse = function () {
}
initializePaymentWSResponse.prototype = new merchantWSBaseResponse();
initializePaymentWSResponse.prototype.constructor = initializePaymentWSResponse;
_.extend(initializePaymentWSResponse, merchantWSBaseResponse);
/**
 * t
 * @var String
 */
initializePaymentWSResponse.prototype.t = null;
/**
 * url
 * @var String
 */
initializePaymentWSResponse.prototype.url = null;
/**
 * ts
 * @var String
 */
initializePaymentWSResponse.prototype.ts = null;
/**
 * s
 * @var String
 */
initializePaymentWSResponse.prototype.s = null;
//endregion


module.exports.installment = installment;
module.exports.insts = insts;
module.exports.bin = bin;
module.exports.bins = bins;
module.exports.bank = bank;
module.exports.instOpts = instOpts;
module.exports.result = result;
module.exports.merchantWSBaseRequest = merchantWSBaseRequest;
module.exports.merchantWSBaseResponse = merchantWSBaseResponse;
module.exports.initializePayment = initializePayment;
module.exports.initializePaymentResponse = initializePaymentResponse;
module.exports.initializePaymentWSRequest = initializePaymentWSRequest;
module.exports.initializePaymentWSResponse = initializePaymentWSResponse;