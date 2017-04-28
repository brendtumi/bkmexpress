/* tslint:disable */
import * as chai from "chai";
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;
import * as Bex from "../lib/bkmexpress";
import * as fs from "fs";

describe("BKM Express SDK version 2", () => {
    const merchantSecretKey = fs.readFileSync("./test/" + process.env.merchantSecretKey).toString();
    const environment = Bex.Environment[process.env.enviroment];
    const merchantId = process.env.merchantId;

    const testString = "This is test string";
    const privateKey = fs.readFileSync("./test/privatePKCS8.pem").toString();
    const publicKey = fs.readFileSync("./test/public.pem").toString();

    let config: Bex.Configuration;
    let token: Bex.Token;

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

    describe("Encryption Utilities", () => {
        it("Base64 encode decode", () => {
            const encoded = Bex.EncryptionUtil.encode64(testString);
            const decoded = Bex.EncryptionUtil.decode64(encoded);
            decoded.should.be.equal(testString);
        });
        it("Sign and verify with keys", () => {
            const signature = Bex.EncryptionUtil.sign(privateKey, testString);
            signature.should.be.a("string");
            const verify = Bex.EncryptionUtil.verify(publicKey, testString, signature);
            verify.should.be.a("boolean").with.equal(true);
        });
        it("Encrypt and decrypt with keys", () => {
            const encrypted = Bex.EncryptionUtil.encrypt(publicKey, testString);
            encrypted.should.be.a("string");
            const dencrypted = Bex.EncryptionUtil.decrypt(privateKey, encrypted, true);
            dencrypted.should.be.a("string").with.equal(testString);
        });
    });

    config = Bex.BexPayment.startBexPayment(Bex.Environment.DEV, merchantId, privateKey);
    // config = new Bex.BexPayment(Bex.Environment.DEV, merchantId, merchantSecretKey);

    describe("Bex Config", () => {
        it("BexPayment configuration unknown environment", () => {
            try {
                new Bex.BexPayment(null, merchantId, merchantSecretKey)
            }
            catch (err) {
                err.should.be.instanceof(Error);
            }
        });
        it("BexPayment instanceof Configuration", () => {
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
    /*
     describe("Get Connection Token", () => {
     console.log("Get Connection Token");
     let merchantService = new Bex.MerchantService(config);
     return merchantService.login()
     .then((response: Bex.Token) => {
     console.log("Token", response);
     token = response;
     return response.should.be.instanceof(Bex.Token);
     })
     });
     */
});