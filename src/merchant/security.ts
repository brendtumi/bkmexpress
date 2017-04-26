/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

import {Buffer} from "buffer";
import * as crypto from "crypto";
import * as semver from "semver";
import {VposConfig} from "./request/vposConfig";
const nodeVersion = semver.clean(process.version);
import {EncryptionException} from "../exceptions";

export class EncryptionUtil {

    public static sign(privateKey: string, data: string): string {
        try {
            const sign = crypto.createSign("RSA-SHA256");
            sign.update(data);
            return sign.sign(privateKey, "base64");
        }
        catch (error) {
            throw new EncryptionException(error);
        }
    }

    public static encryptWithBex(vposConfig: VposConfig | string): string {
        if (vposConfig instanceof VposConfig) {
            return EncryptionUtil.encrypt(EncryptionUtil.publicKey, JSON.stringify(vposConfig));
        }
        else {
            return EncryptionUtil.encrypt(EncryptionUtil.publicKey, vposConfig);
        }
    }

    public static encrypt(publicKey: string, plaintext: string): string {
        try {
            const cipher = crypto.createCipher("RSA", publicKey);
            cipher.update(plaintext, "utf8");
            return cipher.final("base64");
        }
        catch (error) {
            throw new EncryptionException(error);
        }
    }

    public static decrypt(privateKey: string, plaintext: string): string {
        try {
            const decipher = crypto.createDecipher("RSA", privateKey);
            decipher.update(plaintext, "base64");
            return decipher.final("utf8");
        }
        catch (error) {
            throw new EncryptionException(error);
        }
    }

    public static verifyBexSign(data: string, signature: string): boolean {
        try {
            const verify = crypto.createVerify("RSA-SHA256");
            verify.update(data);
            verify.verify(EncryptionUtil.publicKey, signature, "base64");
        }
        catch (error) {
            throw new EncryptionException(error);
        }
        return false;
    }

    public static encode64(data: string): string {
        if (semver.gt(nodeVersion, "6.0.0")) {
            return Buffer.from(data).toString("base64");
        }
        else {
            return new Buffer(data).toString("base64");
        }
    }

    public static decode64(data: string): string {
        if (semver.gt(nodeVersion, "6.0.0")) {
            return Buffer.from(data, "base64").toString();
        }
        else {
            return new Buffer(data, "base64").toString();
        }
    }

    private static publicKey =
        "-----BEGIN PUBLIC KEY-----\n" +
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuZj/TQ9ZRY5KnsA3HMPq\n" +
        "bNwI32J+Bisyv7KX7IRJh5rN5LW3g7t6pulArLIEU3sn28ZQEQ+GCb9yvk6zIUoq\n" +
        "KBqH0H+gvxOtsklOUkFRgh+/FghNDoe0OzkXTLjQKhh6MRMBR9l3cws9nA2cu+M5\n" +
        "kw67F8j0+4SogHJ+VS1wA2kfWx58PNDIg9DtAVwmD1JbjAziPONv0wHSa8oNgia9\n" +
        "Tx6ia6FS4nfjRNqpVqI0m2jIcG8yXt1OaBSazkuRlRepMtDVwMGF4xOWXuRVv+G5\n" +
        "oiTsbOez9tQAcx+KH0W1Pn9Q9/zzOJyF9AS8J1UDE7c7rKwXGDnuTBU1BwdAGyB8\n" +
        "7QIDAQAB\n" +
        "-----END PUBLIC KEY-----";
}