/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

import {VposConfig} from "./request/vposConfig";

export class EncryptionUtil {

    public static sign(privateKey: string, data: string): string | null {
        return null;
    }

    public static encryptWithBex(vposConfig: VposConfig | string): string {
        if (vposConfig instanceof VposConfig) {
            return "";
        }
        else {
            return EncryptionUtil.encrypt(EncryptionUtil.publicKey, vposConfig);
        }
    }

    public static encrypt(publicKey: string, plaintext: string): string {
        return "";
    }

    public static decrypt(privateKey: string, plaintext: string): string {
        return "";
    }

    public static verifyBexSign(data: string, signature: string): boolean {
        return false;
    }

    private static publicKey =
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuZj/TQ9ZRY5KnsA3HMPq" +
        "bNwI32J+Bisyv7KX7IRJh5rN5LW3g7t6pulArLIEU3sn28ZQEQ+GCb9yvk6zIUoq" +
        "KBqH0H+gvxOtsklOUkFRgh+/FghNDoe0OzkXTLjQKhh6MRMBR9l3cws9nA2cu+M5" +
        "kw67F8j0+4SogHJ+VS1wA2kfWx58PNDIg9DtAVwmD1JbjAziPONv0wHSa8oNgia9" +
        "Tx6ia6FS4nfjRNqpVqI0m2jIcG8yXt1OaBSazkuRlRepMtDVwMGF4xOWXuRVv+G5" +
        "oiTsbOez9tQAcx+KH0W1Pn9Q9/zzOJyF9AS8J1UDE7c7rKwXGDnuTBU1BwdAGyB8" +
        "7QIDAQAB";

    private static getPrivateKeyFromString(privateKey: string): string {
        return "";
    }

    private static getPublicKeyFromString(publicKey: string): string {
        return "";
    }

    private static encode64(data: string): string {
        return "";
    }

    private static decode64(data: string): string {
        return "";
    }

}