# BKM Express [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][deps-image]][deps-url]
> [BKM Express](https://www.bkmexpress.com.tr) payment system sdk (Turkey) for Node.js 

> *v1.x.x dokümantasyon için [Buraya tıklayınız][v1-url]*
> /
> *For v1.x.x documentation, go [HERE][v1-url]*

heeeyyy

## Install
```bash
npm install bkmexpress
```

## [Sample](https://github.com/brendtumi/bkmexpress-sample)

### Express Router
```javascript
const express = require("express");
const router = express.Router();
const debug = require("debug")("test:app");
const fs = require("fs");

const Bex = require("bkmexpress");

const privateKey = "PRIVATE-KEY";
const merchantId = "YOUR-MERCHANT-ID"; 

// Kendinize özel end-point url'leri
const urlBase = "YOUR-SERVER-ADDRESS";
const urlForInstallments = urlBase + "/bkm/installments";
const urlForNonce = urlBase + "/bkm/nonce";
// --

// Connection Token'ın Alınabilmesi için Gerekli Konfigürasyonun Yapılması
const config = Bex.BexPayment.startBexPayment(Bex.Environment.SANDBOX, merchantId, privateKey);

router.get("/", function (req, res, next) {
    const merchantService = new Bex.MerchantService(config);

    // Connection Token'ın Alınması
    merchantService.login()
        .then(function (loginResponse) {
            // Ticket Token'ı Üretilmesi
            const ticketResponse = merchantService.oneTimeTicket(loginResponse.Token, 1, urlForInstallments, urlForNonce);
            ticketResponse
                .then(function (response2) {

                    // Ticket Token'ın Ön Yüze İletilmesi
                    res.render("index", {
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
                    debug("merchantService/oneTimeTicket", "ticketResponse", err);
                    next(err);
                });
        })
        .catch(function (err) {
            debug("merchantService/login", "MerchantLoginResponse", err);
            next(err);
        });
});
router.post("/bkm/installments", function (req, res) {
    // Endpoint'in Oluşturulması
    if (req.body.bin && req.body.totalAmount && req.body.ticketId && req.body.signature) {

        const request = new Bex.InstallmentRequest(req.body.bin, req.body.totalAmount, req.body.ticketId, req.body.signature);
        const response = new Bex.InstallmentsResponse();

        if (Bex.EncryptionUtil.verifyBexSign(request.TicketId, request.Signature)) {

            let amount = Bex.MoneyUtils.toNumber(request.TotalAmount);
            let allInstallmentsForEveryBin = {};

            for (let binAndBank of request.binAndBanks()) {
                let bankCode = binAndBank.BankCode;
                let installmentsForThisBin = [];

                // baska bankalar icin vpos hazirlama
                switch (bankCode) {
                    case Bex.Banks.ZIRAATBANK:
                        // Eger istenilen banka icin pos'unuz mevcutsa
                        vposConfig.BankIndicator = Bex.Banks.ZIRAATBANK;
                        vposConfig.VposUserId = "bkmtest";
                        vposConfig.VposPassword = "TEST1691";
                        vposConfig.addExtra("ClientId", "190001691");
                        vposConfig.addExtra("storekey", "TRPS1691");
                        vposConfig.addExtra("orderId", "9073194");
                        vposConfig.ServiceUrl = "http://srvirt01:7200/ziraat";
                        break;

                    case Bex.Banks.AKBANK:
                    default:
                        // Yoksa varsayılan bankanız
                        vposConfig.BankIndicator = Bex.Banks.AKBANK;
                        vposConfig.VposUserId = "akapi";
                        vposConfig.VposPassword = "TEST1234";
                        vposConfig.addExtra("ClientId", "100111222");
                        vposConfig.addExtra("storekey", "TEST1234");
                        vposConfig.ServiceUrl = "http://srvirt01:7200/akbank";
                        break;
                }

                let installment = new Bex.Installment("1", Bex.MoneyUtils.toTRY(amount), Bex.MoneyUtils.toTRY(amount), Bex.EncryptionUtil.encryptWithBex(vposConfig));
                installmentsForThisBin.push(installment);
                // - end
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
        const response = new Bex.InstallmentsResponse();
        response.Status = "fail";
        response.Error = "RequestBody fields cannot be null or signature verification failed";
        res.json(response);
    }

});

function checkPayment(nonceRequest) {
    const merchantNonceResponse = new Bex.MerchantNonceResponse();
    const merchantService = new Bex.MerchantService(config);
    merchantService.login()
        .then(function (loginResponse) {
            if (Bex.EncryptionUtil.verifyBexSign(nonceRequest.TicketId, nonceRequest.Signature)) {
                // İşlemin hala geçerliliğinin korunup, korumadığı kontrol edilir.
                // ....
                // basarili nonce cevabı

                merchantNonceResponse.Result = true;
                merchantNonceResponse.Nonce = nonceRequest.Token;
                merchantNonceResponse.Id = nonceRequest.Path;
                merchantNonceResponse.Message = "YOUR-MESSAGE-WILL-BE-STORED-IN-BKM";

                merchantService.sendNonceResponse(loginResponse.Token, merchantNonceResponse)
                    .then(function (response) {
                        debug("merchantService/sendNonceResponse", "NonceResultResponse", response);
                    })
                    .catch(function (err) {
                        debug("merchantService/sendNonceResponse", "NonceResultResponse", err);
                    });
            }
            else {
                merchantNonceResponse.Result = false;
                merchantNonceResponse.Nonce = nonceRequest.Token;
                merchantNonceResponse.Id = nonceRequest.Path;
                merchantNonceResponse.Message = "Signature verification failed";
                merchantService.sendNonceResponse(loginResponse.Token, merchantNonceResponse)
                    .then(function (response) {
                        debug("merchantService/sendNonceResponse", "NonceResultResponse", response);
                    })
                    .catch(function (err) {
                        debug("merchantService/sendNonceResponse", "NonceResultResponse", err);
                    });
            }
        })
        .catch(function (err) {
            debug("merchantService/login", "MerchantLoginResponse", err);
        });
}

router.post("/bkm/nonce", function (req, res) {
    const response = new Bex.NonceReceivedResponse();
    if (req.body.id && req.body.path && req.body.issuer && req.body.approver && req.body.token && req.body.signature && req.body.reply) {
        // asenkron işlemden önce Nonce isteğinin başarılı olarak alındığı iletilmelidir.
        response.Result = "ok";
        response.Data = "ok";
        res.json(response);

        const request = new Bex.NonceRequest(req.body.id, req.body.path, req.body.issuer, req.body.approver, req.body.token, req.body.signature, req.body.reply);
        // asenkron bir işlem ile işlem kontrolleri yapılmalıdır.
        checkPayment(request);
    }
    else {
        response.Result = "fail";
        response.Data = "fail";
        res.json(response);
    }
});
router.get("/result/:ticketPath", function (req, res) {
    // Ödeme İşlemi Sorgulama Endpoint'i Örneği
    const merchantService = new Bex.MerchantService(config);
    merchantService.login()
        .then(function (loginResponse) {
            merchantService.result(loginResponse.Token, req.params.ticketPath)
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
                    document.location.href = "/result/" + ticketPathForInit;
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
* Author: [Tümay Çeber](https://github.com/brendtumi) [![](https://img.shields.io/gratipay/user/brendtumi.svg?style=flat-square)](https://gratipay.com/brendtumi/)

[v1-url]: https://github.com/brendtumi/bkmexpress/tree/1.x/README.md
[bkm-url]: https://www.bkmexpress.com.tr

[downloads-image]: http://img.shields.io/npm/dm/bkmexpress.svg?style=flat-square

[npm-url]: https://npmjs.org/package/bkmexpress
[npm-image]: https://img.shields.io/npm/v/bkmexpress.svg?style=flat-square

[deps-url]: https://david-dm.org/brendtumi/bkmexpress
[deps-image]: https://david-dm.org/brendtumi/bkmexpress.svg?style=flat-square

[travis-url]: https://travis-ci.org/brendtumi/bkmexpress
[travis-image]: http://img.shields.io/travis/brendtumi/bkmexpress.svg?style=flat-square
