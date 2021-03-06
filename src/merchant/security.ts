/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

import {Buffer} from "buffer";
import {RSA_PKCS1_PADDING} from "constants";
import {createSign, createVerify, privateDecrypt, publicEncrypt, RsaPublicKey} from "crypto";
import * as semver from "semver";
import {VposConfig} from "./request/vposConfig";
const nodeVersion = semver.clean(process.version);
import {EncryptionException} from "../exceptions";

export class EncryptionUtil {

    public static sign(privateKey: string, data: string): string {
        try {
            const sign = createSign("RSA-SHA256");
            sign.update(data);
            return sign.sign(privateKey, "base64");
        }
        catch (error) {
            throw new EncryptionException(error);
        }
    }

    public static verify(publicKey: string, data: string, signature: string): boolean {
        try {
            const verify = createVerify("RSA-SHA256");
            verify.update(data);
            return verify.verify(publicKey, signature, "base64");
        }
        catch (error) {
            throw new EncryptionException(error);
        }
    }

    public static encrypt(publicKey: string | RsaPublicKey, plaintext: string): string {
        try {
            const plainBuffer: Buffer = EncryptionUtil.bufferFromString(plaintext);
            let crypt: Buffer;

            if (semver.gte(nodeVersion, "0.11.14")) {
                crypt = publicEncrypt(publicKey, plainBuffer);
            }
            else {
                const NodeRSA: any = require("node-rsa");
                const key: any = new NodeRSA(publicKey);
                crypt = key.encrypt(plainBuffer);
            }
            return crypt.toString("base64");
        }
        catch (error) {
            throw new EncryptionException(error);
        }
    }

    public static decrypt(privateKey: string, plaintext: string, isBase64: boolean = false): string {
        try {
            const plainBuffer: Buffer = EncryptionUtil.bufferFromString(plaintext, isBase64 ? "base64" : "utf8");
            let crypt: Buffer;

            if (semver.gte(nodeVersion, "0.11.14")) {
                crypt = privateDecrypt(privateKey, plainBuffer);
            }
            else {
                const NodeRSA: any = require("node-rsa");
                const key: any = new NodeRSA(privateKey);
                crypt = key.decrypt(plainBuffer);
            }
            return crypt.toString();
        }
        catch (error) {
            throw new EncryptionException(error);
        }
    }

    public static verifyBexSign(data: string, signature: string): boolean {
        return EncryptionUtil.verify(EncryptionUtil.publicKey, data, signature);
    }

    public static encryptWithBex(vposConfig: VposConfig | string): string {
        if (vposConfig instanceof VposConfig) {
            const data = JSON.stringify(vposConfig);
            let encrypted: string = "";
            for (let i = 0; i <= data.length / 245; i++) {
                encrypted += EncryptionUtil.encrypt(EncryptionUtil.PublicKey, data.substr(i * 245, (i + 1) * 245)) + "|:*:|";
            }
            return encrypted;
        }
        else {
            return EncryptionUtil.encrypt(EncryptionUtil.PublicKey, vposConfig);
        }
    }

    public static encode64(data: string): string {
        return EncryptionUtil.bufferFromString(data).toString("base64");
    }

    public static decode64(data: string): string {
        return EncryptionUtil.bufferFromString(data, "base64").toString();
    }

    private static get PublicKey(): RsaPublicKey {
        return {key: EncryptionUtil.publicKey, padding: RSA_PKCS1_PADDING};
    }

    private static publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuZj/TQ9ZRY5KnsA3HMPq
bNwI32J+Bisyv7KX7IRJh5rN5LW3g7t6pulArLIEU3sn28ZQEQ+GCb9yvk6zIUoq
KBqH0H+gvxOtsklOUkFRgh+/FghNDoe0OzkXTLjQKhh6MRMBR9l3cws9nA2cu+M5
kw67F8j0+4SogHJ+VS1wA2kfWx58PNDIg9DtAVwmD1JbjAziPONv0wHSa8oNgia9
Tx6ia6FS4nfjRNqpVqI0m2jIcG8yXt1OaBSazkuRlRepMtDVwMGF4xOWXuRVv+G5
oiTsbOez9tQAcx+KH0W1Pn9Q9/zzOJyF9AS8J1UDE7c7rKwXGDnuTBU1BwdAGyB8
7QIDAQAB
-----END PUBLIC KEY-----`;

    private static bufferFromString(data: string, encoding: string = "utf8"): Buffer {
        if (semver.gte(nodeVersion, "6.0.0")) {
            return Buffer.from(data, encoding);
        }
        else {
            return new Buffer(data, encoding);
        }
    }
}
