import * as chai from "chai";
const should = chai.should();
import {version} from "../lib/bkmexpress";

describe("BKM Express SDK version 2", () => {
    const merchantSecretKey = process.env.merchantSecretKey;
    const enviroment = process.env.enviroment;
    const merchantId = process.env.merchantId;

    describe("Setup informations", () => {
        it("merchantSecretKey", () => {
            merchantSecretKey.should.be.a("string");
        });
        it("enviroment", () => {
            enviroment.should.be.a("string").to.equal("DEV");
        });
        it("merchantId", () => {
            merchantId.should.be.a("string").with.lengthOf(36);
        });
        it("BKM version", () => {
            version.should.be.a("string");
        });
    });
});