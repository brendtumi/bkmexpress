# BKM Express [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status](https://david-dm.org/brendtumi/bkmexpress.svg)](https://david-dm.org/brendtumi/bkmexpress)
> [BKM Express](https://www.bkmexpress.com.tr) payment system sdk (Turkey) for Node.js 

##### *v1.x.x dokümantasyon için [Buraya tıklayınız][v1-url]*
##### *For v1.x.x documentation, go [HERE][v1-url]*

## Install
```bash
npm install bkmexpress@latest
```

## Usage
```javascript
var Bex = require("bkmexpress");
var config = Bex.BexPayment.startBexPayment(Bex.Environment.PRODUCTION, "YOUR-merchantId", "YOUR-privateKey");
var merchantService = new Bex.MerchantService(config);
merchantService.login()
    .then(function (response) {
        var ticketResponse = merchantService.oneTimeTicket(response.Token, amount, urlForInstallments, urlForNonce);
        ticketResponse
            .then(function (ticket) {
                res.render('payment', {
                    baseUrl: config.BexApiConfiguration.BaseJs,
                    ticketId: ticket.Token.ShortId,
                    ticketPath: ticket.Token.Path,
                    ticketToken: ticket.Token.Token
                });
            })
            .catch(function (err) {
                console.error("merchantService/oneTimeTicket", "ticketResponse", err);
            });
    })
    .catch(function (err) {
        console.error("merchantService/login", "MerchantLoginResponse", err);
    });
```

## Run Tests
```bash
npm test
```

## Contributors
We welcome contributions of all kinds from anyone. 
* Author: [Tümay Çeber](https://github.com/brendtumi)

[v1-url]: https://github.com/brendtumi/bkmexpress/tree/1.x/README.md
[bkm-url]: https://www.bkmexpress.com.tr
[downloads-image]: http://img.shields.io/npm/dm/bkmexpress.svg?style=flat-square
[npm-url]: https://npmjs.org/package/bkmexpress
[npm-image]: https://img.shields.io/npm/v/bkmexpress.svg?style=flat-square

[travis-url]: https://travis-ci.org/brendtumi/bkmexpress
[travis-image]: http://img.shields.io/travis/brendtumi/bkmexpress.svg?style=flat-square
