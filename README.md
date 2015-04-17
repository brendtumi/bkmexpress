# BKM Express [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url]
> BKM Express payment system api (Turkey) for node.js

### Not ready yet!! Coming soon, like 1-2 days.
Node.js api for [BKM Express](https://www.bkmexpress.com.tr)

## Install

Install with [npm](http://github.com/isaacs/npm):

```
 npm install bkmexpress
```

## Usage
```javascript
var BKM = require("bkmexpress");
```
### initPaymentAction (Start payment)
Create your bank and installment options
```javascript
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
```

Setup initPaymentAction
```javascript
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
```

Get your private key (You should share your public key with BKM first) 
```javascript
var myKeyFile = BKM.Utilities.ReadFile("bkm_client_sign_certificate_test.pem");
```
initPaymentAction.initPayment(paymentBankOptions , myKeyFile, callback)
```javascript
initPaymentAction.initPayment(paymentBankOptions, myKeyFile,
    function () {
        BKM.Utilities.inspect("initPayment response", arguments);
    }
);
```

this will return something like
```javascript
{ state: true,
     data: 
      { t: '4024f4c8-9ba0-4fb5-a000-d1209f18af9f',
        url: 'https://preprod.bkmexpress.com.tr/BKMExpress/pub/purchase/init.bkm',
        ts: '20150417-17:21:39',
        s: 'n1hEuXh+jUZ0TXG1/hDBy8IQzu2G85xZZROVwYqfDcIB7jCEcjy45HcPsFKzVkT/gkmSflO9PeorbrDUgHcQGKBAOq1d2+I+4D6r1X33OqT/z9wMJVHST2edqRiv2ujJVSIMPRZwZtXmG+9WKPZnmsJGgol32Gzp1feCkLMArk3BryaMSKhOMn+NVx1bSzdFx82nZ3WVmLuGtDsUl6SeIPVu1JIr+8DbjA5/I60zz5dk8kpJV2PaBOMEKPm6l2gFidEYb3jc5y5cpxIaD3ei8ywnmSaO2ydq0hL6yrdx0d4tTQ46xZ5YJAtdWdBQNRK+zacMwYdGVx/7sF6sK6Ey8Q==' } }
```
then you just need to redirect your client browser


## Contributors

* Author: [Tümay Çeber](https://github.com/brendtumi)

[bkm-url]: https://www.bkmexpress.com.tr
[downloads-image]: http://img.shields.io/npm/dm/bkmexpress.svg
[npm-url]: https://npmjs.org/package/bkmexpress
[npm-image]: https://img.shields.io/npm/v/bkmexpress.svg

[travis-url]: https://travis-ci.org/brendtumi/bkmexpress
[travis-image]: http://img.shields.io/travis/brendtumi/bkmexpress.svg
