/**
 * Created by tumay on 13.04.2015.
 */
var Utilities = require("./Utilities"),
    Types = require("./Types"),
    _ = require("lodash"),
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
        //Utilities.inspect("params",params)
        //Utilities.inspect("describe",client.describe(), {colors: true, depth: 10})
        client.initializePayment(params, callback, {strictSSL: false});
        process.nextTick(function () {
            //Utilities.inspect("lastMessage",client.lastMessage);
            //Utilities.inspect("lastRequest", client.lastRequest);
        });
    });
};