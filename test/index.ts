/* tslint:disable */
import * as chai from "chai";
const should = chai.should();
import * as Bex from "../lib/bkmexpress";

describe("BKM Express SDK version 2", () => {
    const merchantSecretKey = process.env.merchantSecretKey;
    const environment = Bex.Environment[process.env.enviroment];
    const merchantId = process.env.merchantId;

    describe("pre-requisites", () => {
        it("merchantSecretKey", () => {
            merchantSecretKey.should.be.a("string");
        });
        it("environment", () => {
            environment.should.be.equal(Bex.Environment.DEV);
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
            config = Bex.BexPayment.startBexPayment(Bex.Environment.DEV, merchantId, merchantSecretKey);
            // config = new Bex.BexPayment(Bex.Environment.DEV, merchantId, merchantSecretKey);
            config.should.be.instanceof(Bex.Configuration);
            config.Environment.should.be.equal(environment);
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

    describe("Encryption Utilities", () => {
        it("Base64 encode decode", () => {
            const testString = "Encryption Utilities + Base64 encode decode";
            let encoded = Bex.EncryptionUtil.encode64(testString);
            let decoded = Bex.EncryptionUtil.decode64(encoded);
            decoded.should.be.equal(testString);
        });
    });
});