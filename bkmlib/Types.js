/**
 * Created by tumay on 13.04.2015.
 */
var _ = require("lodash"),
    Utilities = require("./Utilities");

// NOTE: this is actually not required but its good to have one

//region Requests & Responses
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
merchantWSBaseResponse.prototype.result = '';

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
/**
 * mId
 * @type String
 */
initializePaymentWSRequest.prototype.mId = '';
/**
 * sUrl
 * @type String
 */
initializePaymentWSRequest.prototype.sUrl = '';
/**
 * cUrl
 * @type String
 */
initializePaymentWSRequest.prototype.cUrl = '';
/**
 * msUrl
 * @type String
 */
initializePaymentWSRequest.prototype.msUrl = '';
/**
 * mcUrl
 * @type String
 */
initializePaymentWSRequest.prototype.mcUrl = '';
/**
 * rSource
 * @type String
 */
initializePaymentWSRequest.prototype.rSource = '';
/**
 * dType
 * @type String
 */
initializePaymentWSRequest.prototype.dType = '';
/**
 * osSource
 * @type String
 */
initializePaymentWSRequest.prototype.osSource = '';
/**
 * uAgent
 * @type String
 */
initializePaymentWSRequest.prototype.uAgent = '';
/**
 * sAmount
 * @type String
 */
initializePaymentWSRequest.prototype.sAmount = '';
/**
 * cAmount
 * @type String
 */
initializePaymentWSRequest.prototype.cAmount = '';
/**
 * instOpts
 * @type anyType
 */
initializePaymentWSRequest.prototype.instOpts = '';
/**
 * bank
 * @type bank[]
 */
//initializePaymentWSRequest.prototype.bank = '';
/**
 * ts
 * @type String
 */
initializePaymentWSRequest.prototype.ts = '';
/**
 * s
 * @type String
 */
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
/**
 * t
 * @var String
 */
initializePaymentWSResponse.prototype.t = '';
/**
 * url
 * @var String
 */
initializePaymentWSResponse.prototype.url = '';
/**
 * ts
 * @var String
 */
initializePaymentWSResponse.prototype.ts = '';
/**
 * s
 * @var String
 */
initializePaymentWSResponse.prototype.s = '';

var IncomingResultModel = function () {
    if (arguments.length === 1)
        _.extend(this, arguments[0]);
};
IncomingResultModel.prototype.t = "";
IncomingResultModel.prototype.r = "";
IncomingResultModel.prototype.posRef = "";
IncomingResultModel.prototype.ts = "";
IncomingResultModel.prototype.s = "";
IncomingResultModel.prototype.xid = "";
IncomingResultModel.prototype.md = "";
IncomingResultModel.prototype.pData = "";
IncomingResultModel.prototype.eKey1 = "";
IncomingResultModel.prototype.eKey2 = "";
IncomingResultModel.prototype.verify = function (bkmKey) {
    return Utilities.Verify(bkmKey, this.s, this.t + this.posRef + this.xid + this.md + this.ts);
};
//endregion

module.exports.merchantWSBaseRequest = merchantWSBaseRequest;
module.exports.merchantWSBaseResponse = merchantWSBaseResponse;
module.exports.initializePayment = initializePayment;
module.exports.initializePaymentResponse = initializePaymentResponse;
module.exports.initializePaymentWSRequest = initializePaymentWSRequest;
module.exports.initializePaymentWSResponse = initializePaymentWSResponse;
module.exports.IncomingResultModel = IncomingResultModel;