process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
    process.exit(1);
});

// require
var path = require("path");
require("colors");
var BKM = require("../bkmexpress");

BKM.Utilities.inspect("version", BKM.version);

// Options
var akbank = {
    "bank": [{
        "id": "0046",
        "name": "AKBANK",
        "expBank": "AKBANK",
        "bins": {
            "bin": [{
                "value": "557113",
                "insts": {
                    "inst": [
                        {
                            "nofInst": "2",
                            "amountInst": "7,75",
                            "cAmount": "",
                            "tAmount": "15,50",
                            "cPaid1stInst": "false",
                            "expInst": "2 taksit"
                        },
                        {
                            "nofInst": "3",
                            "amountInst": "5,30",
                            "cAmount": "",
                            "tAmount": "15,90",
                            "cPaid1stInst": "false",
                            "expInst": "3 taksit"
                        }
                    ]
                }
            }]
        }
    }]
};

var paymentBankOptions = [akbank];
var paymentSiteUrl = "http://localhost:3000/bkm_express";
var paymentMerchantId = "7b928290-b6d2-469e-ac10-29eb36b8c1f6";
var paymentSuccesUrl = paymentSiteUrl + "" + "/success";
var paymentCancelUrl = paymentSiteUrl + "" + "/fail";
var paymentSaleAmount = "15,00";
var paymentCargoAmount = "";
var paymentMobilSuccessURL = "mobil success url";
var paymentMobilCancelURL = "mobil cancel url";
var paymentRequestSource = "1";
var paymentDeviceType = "3";
var paymentOsSource = "4.4.2";
var paymentUserAgent = "2.0";


var initPaymentAction = new BKM.InitPayment(
    paymentMerchantId,
    paymentSuccesUrl,
    paymentCancelUrl,
    paymentSaleAmount,
    paymentCargoAmount,
    paymentMobilSuccessURL,
    paymentMobilCancelURL,
    paymentRequestSource,
    paymentDeviceType,
    paymentOsSource,
    paymentUserAgent);

var myKeyFile = BKM.Utilities.ReadFile(path.normalize(__dirname + "/../bkm_static/bkm_client_sign_certificate_test.pem"));

initPaymentAction.initPayment(paymentBankOptions, myKeyFile,
    function () {
        BKM.Utilities.inspect("initPayment response".cyan, arguments);
    }
);
