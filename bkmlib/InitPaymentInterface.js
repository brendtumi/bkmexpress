/**
 * Created by tumay on 13.04.2015.
 */
var Utilities = require("./Utilities"),
    Types = require("./Types"),
    _ = require("lodash");

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

};
InitPaymentInterface.prototype.initPayment = function (wsdlLocation, banks) {

};