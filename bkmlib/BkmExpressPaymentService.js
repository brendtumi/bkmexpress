/**
 * Created by tumay on 13.04.2015.
 */
var Utilities = require("./Utilities"),
    soap = require("soap");

var BkmExpressPaymentService = module.exports = function (wsdl) {
    if (!(this instanceof BkmExpressPaymentService)) {
        return new (Function.prototype.bind.apply(BkmExpressPaymentService, arguments));
    }
    this.wsdl = wsdl || null;
};
BkmExpressPaymentService.prototype.wsdl = null;
BkmExpressPaymentService.prototype.initializePayment = function (params, callback) {
    var wsdlOptions = {
        ignoredNamespaces: {
            namespaces: ['typedNamespace'],
            override: true
        }
    };
    soap.createClient(this.wsdl, wsdlOptions, function (err, client) {
        client.initializePayment(params, callback, {strictSSL: false});

        /*
        // NOTE: uncomment if you want to see SOAP xml
        process.nextTick(function () {
            //Utilities.inspect("lastMessage",client.lastMessage);
            Utilities.inspect("lastRequest", client.lastRequest);
        });
        */
    });
};