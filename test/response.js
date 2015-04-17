/**
 * Created by tumay on 17.04.2015.
 */
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var router = express.Router();

var path = require("path");
var BKM = require("../bkmexpress");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/bkm_express', function (req, res, next) {
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

    var initPaymentAction = new BKM.InitPaymentInterface(
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
        function (response) {
            var data = response.data;
            BKM.Utilities.inspect("initPayment response".cyan, response);

            var html = '<html><body onload="OnLoadEvent();">' +
                '<form name="hiddenForm" id="hiddenForm" action="' + data.url + '" method="POST">' +
                '<input type="text" name="t" value="' + data.t + '">' +
                '<input type="text" name="ts" value="' + data.ts + '">' +
                '<input type="text" name="s" value="' + data.s + '">' +
                '<input type="submit">' +
                '</form>' +
                '<script type="text/javascript" language="Javascript" >' +
                'function OnLoadEvent() { document.hiddenForm.submit(); }' +
                '</script></body></html>';

            res.send(html);
        }
    );
});
router.all('/bkm_express/success', function (req, res, next) {
    var IncomingResult = new BKM.Types.IncomingResultModel(req.body);
    var valid = {
        time: BKM.Utilities.CalcTimeDiff(req.body.ts),
        sign: IncomingResult.verify(null)
    };
    res.send({
        valid: valid,
        query: req.query,
        body: req.body
    });
});
router.all('/bkm_express/fail', function (req, res, next) {
    var IncomingResult = new BKM.Types.IncomingResultModel(req.body);
    var valid = {
        time: BKM.Utilities.CalcTimeDiff(req.body.ts),
        sign: IncomingResult.verify(null)
    };
    res.send({
        valid: valid,
        query: req.query,
        body: req.body
    });
});

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});

var port = 3000;
app.set('port', port);
var server = http.createServer(app);
server.listen(port);