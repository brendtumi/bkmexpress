/* tslint:disable */
import * as chai from "chai";
const should = chai.should();
import * as Bex from "../lib/bkmexpress";

describe("BKM Express SDK version 2", () => {
    const merchantSecretKey = process.env.merchantSecretKey;
    const enviroment = process.env.enviroment;
    const merchantId = process.env.merchantId;

    describe("pre-requisites", () => {
        it("merchantSecretKey", () => {
            merchantSecretKey.should.be.a("string");
        });
        it("enviroment", () => {
            enviroment.should.be.a("string").to.equal(Bex.Environment.DEV);
        });
        it("merchantId", () => {
            merchantId.should.be.a("string").with.lengthOf(36);
        });
        it("BKM sdk version", () => {
            Bex.version.should.be.a("string");
        });
    });

    let config: Bex.Configuration;

    describe("Bex Config", () => {
        it("BexPayment instanceof Configuration", () => {
            config = Bex.BexPayment.startBexPayment(enviroment, merchantId, merchantSecretKey);
            // config = new BexPayment(enviroment, merchantId, merchantSecretKey);
            config.should.be.instanceof(Bex.Configuration);
            config.Environment.should.be.a("string").to.equal(enviroment);
        });

        it("BexPayment Properties", () => {
            config.should.have.property("Environment");
            config.should.have.property("BexApiConfiguration");
            config.should.have.property("MerchantId");
            config.should.have.property("MerchantPrivateKey");
        });

        it("BexPayment.BexApiConfiguration", () => {
            config.BexApiConfiguration.should.have.property("BaseUrl");
            config.BexApiConfiguration.should.have.property("BaseJs");
            config.BexApiConfiguration.BaseUrl.should.be.a("string");
            config.BexApiConfiguration.BaseJs.should.be.a("string");
        });
    });
});