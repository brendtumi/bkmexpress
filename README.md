# BKM Express [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status](https://david-dm.org/brendtumi/bkmexpress.svg)](https://david-dm.org/brendtumi/bkmexpress)
> [BKM Express](https://www.bkmexpress.com.tr) payment system sdk (Turkey) for Node.js 

##### *v1.x.x dokümantasyon için [Buraya tıklayınız][v1-url]*
##### *For v1.x.x documentation, go [HERE][v1-url]*

## Install
```bash
npm install bkmexpress@latest
```

## Sample

### Express Router
```javascript
var express = require('express');
var router = express.Router();
var fs = require("fs");

var Bex = require("bkmexpress");

var privateKey = "PRIVATE-KEY";
var merchantId = "YOUR-MERCHANT-ID"; 

// Kendinize özel end-point url'leri
var urlBase = "YOUR-SERVER-ADDRESS";
var urlForInstallments = urlBase + "/bkm/installments";
var urlForNonce = urlBase + "/bkm/nonce";
// --

// Connection Token'ın Alınabilmesi için Gerekli Konfigürasyonun Yapılması
var config = Bex.BexPayment.startBexPayment(Bex.Environment.SANDBOX, merchantId, privateKey);

router.get('/', function (req, res, next) {
    var merchantService = new Bex.MerchantService(config);

    // Connection Token'ın Alınması
    merchantService.login()
        .then(function (response) {
            // Ticket Token'ı Üretilmesi
            var ticketResponse = merchantService.oneTimeTicket(response.Token, 1, urlForInstallments, urlForNonce);
            ticketResponse
                .then(function (response2) {

                    // Ticket Token'ın Ön Yüze İletilmesi
                    res.render('index', {
                        // Client SDK url'ini kendiniz manuel girebilirsiniz
                        // ama bu sekilde de yaparsaniz, her ortam degisiklikligi
                        // yaptiginizda(Sandbox, Production) url'i degistirmenize gerek kalmadan ortam icin dogru url'i verir.
                        baseUrl: config.BexApiConfiguration.BaseJs,
                        ticketId: response2.Token.ShortId,
                        ticketPath: response2.Token.Path,
                        ticketToken: response2.Token.Token
                    });
                })
                .catch(function (err) {
                    console.error("merchantService/oneTimeTicket", "ticketResponse", err);
                    next(err);
                });
        })
        .catch(function (err) {
            console.error("merchantService/login", "MerchantLoginResponse", err);
            next(err);
        });
});

router.post('/bkm/installments', function (req, res) {
    // Endpoint'in Oluşturulması
    if (req.body.bin && req.body.totalAmount && req.body.ticketId && req.body.signature) {

        var request = new Bex.InstallmentRequest(req.body.bin, req.body.totalAmount, req.body.ticketId, req.body.signature);
        var response = new Bex.InstallmentsResponse();

        if (Bex.EncryptionUtil.verifyBexSign(request.TicketId, request.Signature)) {

            var amount = Bex.MoneyUtils.toNumber(request.TotalAmount);
            var allInstallmentsForEveryBin = {};

            for (var binAndBank of request.binAndBanks()) {
                var bankCode = binAndBank.BankCode;
                var installmentsForThisBin = [];

                // İşlem her banka ve taksit için tekrar edilmeli
                var vposConfig = new Bex.VposConfig();
                vposConfig.BankIndicator = bankCode;
                vposConfig.VposUserId = "akapi";
                vposConfig.VposPassword = "TEST1234";
                vposConfig.addExtra("ClientId", "100111222");
                vposConfig.addExtra("storekey", "TEST1234");
                vposConfig.ServiceUrl = "http://srvirt01:7200/akbank";

                var installment = new Bex.Installment("1", Bex.MoneyUtils.toTRY(amount), Bex.MoneyUtils.toTRY(amount), Bex.EncryptionUtil.encryptWithBex(vposConfig));
                installmentsForThisBin.push(installment);
                // ---
                
                allInstallmentsForEveryBin[binAndBank.Bin] = installmentsForThisBin;
            }

            response.Installments = allInstallmentsForEveryBin;
            response.Status = "ok";
            response.Error = "";
            res.json(response);
        }
        else {
            response.Status = "fail";
            response.Error = "signature verification failed";
            res.json(response);
        }
    }
    else {
        var response = new Bex.InstallmentsResponse();
        response.Status = "fail";
        response.Error = "RequestBody fields cannot be null or signature verification failed";
        res.json(response);
    }

});

function checkPayment(request) {
    var merchantNonceResponse = new Bex.MerchantNonceResponse();
    var merchantService = new Bex.MerchantService(config);
    merchantService.login()
        .then(function (response) {
            if (Bex.EncryptionUtil.verifyBexSign(request.TicketId, request.Signature)) {
                // İşlemin hala geçerliliğinin korunup, korumadığı kontrol edilir.
                // ....
                // basarili nonce cevabı

                merchantNonceResponse.Result = true;
                merchantNonceResponse.Nonce = request.Token;
                merchantNonceResponse.Id = request.Path;
                merchantNonceResponse.Message = "YOUR-MESSAGE-WILL-BE-STORED-IN-BKM";
                merchantService.sendNonceResponse(response.Token, merchantNonceResponse)
                    .then(function (response) {
                        console.info("merchantService/sendNonceResponse", "NonceResultResponse", response);
                    })
                    .catch(function (err) {
                        console.error("merchantService/sendNonceResponse", "NonceResultResponse", err);
                    });
            }
            else {
                merchantNonceResponse.Result = false;
                merchantNonceResponse.Nonce = request.Token;
                merchantNonceResponse.Id = request.Path;
                merchantNonceResponse.Message = "Signature verification failed";
                merchantService.sendNonceResponse(response.Token, merchantNonceResponse)
                    .then(function (response) {
                        console.info("merchantService/sendNonceResponse", "NonceResultResponse", response);
                    })
                    .catch(function (err) {
                        console.error("merchantService/sendNonceResponse", "NonceResultResponse", err);
                    });
            }

        })
        .catch(function (err) {
            console.error("merchantService/login", "MerchantLoginResponse", err);
        });

}

router.post('/bkm/nonce', function (req, res) {
    var response = new Bex.NonceReceivedResponse();
    if (req.body.id && req.body.path && req.body.issuer && req.body.approver && req.body.token && req.body.signature && req.body.reply) {
        // asenkron işlemden önce Nonce isteğinin başarılı olarak alındığı iletilmelidir.
        response.Result = "ok";
        response.Data = "ok";
        res.json(response);

        var request = new Bex.NonceRequest(req.body.id, req.body.path, req.body.issuer, req.body.approver, req.body.token, req.body.signature, req.body.reply);
        // asenkron bir işlem ile işlem kontrolleri yapılmalıdır.
        checkPayment(request);
    }
    else {
        response.Result = "fail";
        response.Data = "fail";
        res.json(response);
    }
});

router.get('/result/:ticket', function (req, res) {
    // Ödeme İşlemi Sorgulama Endpoint'i Örneği
    var merchantService = new Bex.MerchantService(config);
    merchantService.login()
        .then(function (response) {
            merchantService.result(response.Token, req.params.ticket)
                .then(function (result) {
                    res.send(result);
                })
                .catch(function (err) {
                    res.send(err);
                });
        })
        .catch(function (err) {
            res.send(err);
        });
});

module.exports = router;
```

### Template
```jade
doctype html
html
    head
        script(src="#{baseUrl}", type="text/javascript")
    body
        #payment-dropin
        script(type="text/javascript").
            // Client SDK'daki BKM Express ile Öde Butonunun Kullanımı
            var ticketIdForInit = "#{ticketId}";
            var ticketPathForInit = "#{ticketPath}";
            var ticketTokenForInit = "#{ticketToken}";

            Bex.init({"id": ticketIdForInit, "path": ticketPathForInit, "token": ticketTokenForInit}, "modal", {
                container: "payment-dropin",
                buttonSize: [135, 70],
                onCancel: function () {
                    console.log("ödeme işlemi iptal edildiğinde yapılacak işlemler için kullanılacak callback. Ticket'ı yenilemek gibi işlemleri bu callback içinde yapabilirsiniz.");
                    location.reload();
                },
                onComplete: function (status) {
                    console.log("ödeme tamamlandığında yapılacak işlemler için kullanılacak callback", status);
                }
            });
```

## Debug
```bash
DEBUG=bkmexpress.test:*,bkmexpress:* npm start
```

## Run Tests
```bash
npm test
```

## Contributors
We welcome contributions of all kinds from anyone. 
* Author: [Tümay Çeber](https://github.com/brendtumi) [![](https://img.shields.io/gratipay/user/brendtumi.svg)](https://gratipay.com/brendtumi/)

[v1-url]: https://github.com/brendtumi/bkmexpress/tree/1.x/README.md
[bkm-url]: https://www.bkmexpress.com.tr
[downloads-image]: http://img.shields.io/npm/dm/bkmexpress.svg?style=flat-square
[npm-url]: https://npmjs.org/package/bkmexpress
[npm-image]: https://img.shields.io/npm/v/bkmexpress.svg?style=flat-square

[travis-url]: https://travis-ci.org/brendtumi/bkmexpress
[travis-image]: http://img.shields.io/travis/brendtumi/bkmexpress.svg?style=flat-square
