"use strict";

var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var Bex = require("../lib/bkmexpress");
var fs = require("fs");

describe("BKM Express SDK version 2", function () {
    var merchantSecretKey = fs.readFileSync("./test/" + process.env.merchantSecretKey).toString();
    var environment = Bex.Environment[process.env.enviroment];
    var merchantId = process.env.merchantId;
    var testString = "This is test string";
    var privateKey = fs.readFileSync("./test/privatePKCS8.pem").toString();
    var publicKey = fs.readFileSync("./test/public.pem").toString();
    var config;
    var token;

    describe("pre-requisites", function () {
        it("merchantSecretKey", function () {
            merchantSecretKey.should.be.a("string");
        });
        it("environment", function () {
            environment.should.be.equal(Bex.Environment.DEV);
        });
        it("merchantId", function () {
            merchantId.should.be.a("string").with.lengthOf(36);
        });
        it("BKM sdk version", function () {
            Bex.version.should.be.a("string");
        });
    });

    describe("Utilities", function () {
        const sample = [
            {k: 1, v: "1,00"},
            {k: 32, v: "32,00"},
            {k: 23.3, v: "23,30"},
            {k: 23.78, v: "23,78"},
            {k: 54.768, v: "54,77"},
            {k: 1000.7, v: "1000,70"},
            {k: 1000.78, v: "1000,78"},
            {k: 10004.788, v: "10004,79"}
        ];
        it("Float to TRY", function () {
            for (let test of sample) {
                Bex.MoneyUtils.toTRY(test.k).should.be.an.equal(test.v);
            }
        });
        it("TRY to Float", function () {
            for (let test of sample) {
                Bex.MoneyUtils.toNumber(test.v).should.be.an.equal(Math.round(test.k * 100) / 100);
            }
        });
    });

    describe("Encryption Utilities", function () {
        it("Base64 encode decode", function () {
            var encoded = Bex.EncryptionUtil.encode64(testString);
            var decoded = Bex.EncryptionUtil.decode64(encoded);
            decoded.should.be.equal(testString);
        });
        it("Sign and verify with keys", function () {
            var signature = Bex.EncryptionUtil.sign(privateKey, testString);
            signature.should.be.a("string");
            var verify = Bex.EncryptionUtil.verify(publicKey, testString, signature);
            verify.should.be.a("boolean").with.equal(true);
        });
        it("Encrypt and decrypt with keys", function () {
            var encrypted = Bex.EncryptionUtil.encrypt(publicKey, testString);
            encrypted.should.be.a("string");
            var dencrypted = Bex.EncryptionUtil.decrypt(privateKey, encrypted, true);
            dencrypted.should.be.a("string").with.equal(testString);
        });
    });

    config = Bex.BexPayment.startBexPayment(Bex.Environment.DEV, merchantId, privateKey);
    // config = new Bex.BexPayment(Bex.Environment.DEV, merchantId, merchantSecretKey);

    describe("Bex Config", function () {
        it("BexPayment configuration unknown environment", function () {
            try {
                new Bex.BexPayment(null, merchantId, merchantSecretKey);
            }
            catch (err) {
                err.should.be.instanceof(Error);
            }
        });
        it("BexPayment instanceof Configuration", function () {
            config.should.be.instanceof(Bex.Configuration);
            config.Environment.should.be.equal(environment);
        });
        it("BexPayment Properties", function () {
            config.should.have.property("Environment");
            config.should.have.property("BexApiConfiguration");
            config.should.have.property("MerchantId");
            config.should.have.property("MerchantPrivateKey");
        });
        it("BexPayment.BexApiConfiguration", function () {
            config.BexApiConfiguration.should.have.property("BaseUrl");
            config.BexApiConfiguration.should.have.property("BaseJs");
            config.BexApiConfiguration.BaseUrl.should.be.a("string");
            config.BexApiConfiguration.BaseJs.should.be.a("string");
        });
    });

    //describe("Get Connection Token", () => {
    //    console.log("Get Connection Token");
    //    let merchantService = new Bex.MerchantService(config);
    //    return merchantService.login()
    //        .then((response: Bex.Token) => {
    //            console.log("Token", response);
    //            token = response;
    //            return response.should.be.instanceof(Bex.Token);
    //        })
    //});
});
