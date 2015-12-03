/**
 * Created by tumay on 17.04.2015.
 */
var http = require('http');
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var router = express.Router();

var BKM = require("../bkmexpress");

var app = express();
console.log("Start");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);


// NOTE: Initiate payment
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

	// NOTE: Use your own client key
	var myKeyFile = BKM.Utilities.ReadFile(path.normalize(__dirname + "/../bkm_static/bkm_client_sign_certificate_test.pem"));

	initPaymentAction.initPayment(paymentBankOptions, myKeyFile,
		function (response) {
			var data = response.redirect;
			BKM.Utilities.inspect("initPayment response".cyan, response);

			var html = '<html><body onload="OnLoadEvent();">' +
				'<form name="hiddenForm" id="hiddenForm" action="' + data.actionUrl + '" method="POST">' +
				'<input type="text" name="t" value="' + data.t + '">' +
				'<input type="text" name="ts" value="' + data.ts + '">' +
				'<input type="text" name="s" value="' + data.s + '">' +
				'<input type="submit">' +
				'</form>' +
				'<script type="text/javascript" language="Javascript" >' +
				'function OnLoadEvent() { document.hiddenForm.submit(); }' +
				'</script></body></html>';

			res.send(html);
		},
		null,
		null // NOTE: Use your own bkm key in here
	);
});

// NOTE: This confirmation url should be set on BKM express, but return values are same as success
router.all('/bkm_express/confirmation', function (req, res, next) {
	var IncomingResult = new BKM.Types.IncomingResultModel(req.body);
	var valid = {
		time: BKM.Utilities.CalcTimeDiff(req.body.ts),
		sign: IncomingResult.verify(null) // NOTE: Use your own bkm key in here
	};
	res.send({
		valid: valid,
		query: req.query,
		body: req.body
	});
});

router.all('/bkm_express/success', function (req, res, next) {
	var IncomingResult = new BKM.Types.IncomingResultModel(req.body);
	var valid = {
		time: BKM.Utilities.CalcTimeDiff(req.body.ts),
		sign: IncomingResult.verify(null) // NOTE: Use your own bkm key in here
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
		sign: IncomingResult.verify(null) // NOTE: Use your own bkm key in here
	};
	res.send({
		valid: valid,
		query: req.query,
		body: req.body
	});
});

// NOTE: This is settings for merchant info SOAP server. You can keep this on your config file, except #orderId# every things is static
var virtualPos = {
	default: '0046',
	vpos: {
		"0046": {
			posUrl: "https://testsanalpos.est.com.tr/servlet/cc5ApiServer_akbank",
			posUid: "bkmapi",
			posPwd: "TEST1234",
			mpiUrl: "https://testsanalpos.est.com.tr/servlet/est3Dgate_akbank",
			mpiUid: "bkmapi",
			mpiPwd: "TEST1234",
			md: "m1",
			xid: "x1",
			cIp: "88.255.225.25",
			extra: {
				ClientId: "100111222",
				storekey: "TEST1234",
				orderId: "#orderId#"
			},
			is3ds: true,
			is3dsFDec: true
		}
	}
};
// NOTE: Should be over express because it will return router for SOAP server
// NOTE: We are creating this function, so we can dynamically create an order id in some route, like in "Initiate payment"
function OrderIDgeneretor() {
	return "OR" + Math.random().toString();
}
BKM.InitMerchantInfo(
	virtualPos,
	OrderIDgeneretor,
	// NOTE: Use your own path
	"/bkm_express/wsdl/",
	// NOTE: You can change .wdsl file if you needed, just give absolute path
	null,
	// NOTE: Use your own address
	"http://localhost:3000/bkm_express/wsdl/",
	// NOTE: Use your own client and bkm key
	BKM.Utilities.ReadFile(path.normalize(__dirname + '/../bkm_static/bkm.pem')),
	BKM.Utilities.ReadFile(path.normalize(__dirname + '/../bkm_static/bkm_client_sign_certificate_test.pem')),
	function (middleware) {
		// NOTE: Use your own path
		router.all("/bkm_express/wsdl/*", middleware);
	}
);

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