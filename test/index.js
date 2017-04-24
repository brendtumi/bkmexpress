"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var should = chai.should();
var bkmexpress_1 = require("../lib/bkmexpress");
describe("BKM Express SDK version 2", function () {
    var merchantSecretKey = process.env.merchantSecretKey;
    var enviroment = process.env.enviroment;
    var merchantId = process.env.merchantId;
    describe("Setup informations", function () {
        it("merchantSecretKey", function () {
            merchantSecretKey.should.be.a("string");
        });
        it("enviroment", function () {
            enviroment.should.be.a("string").to.equal("DEV");
        });
        it("merchantId", function () {
            merchantId.should.be.a("string").with.lengthOf(36);
        });
        it("BKM version", function () {
            bkmexpress_1.version.should.be.a("string");
        });
    });
});
