import { VposConfig } from "./request/vposConfig";
export declare class EncryptionUtil {
    static sign(privateKey: string, data: string): string | null;
    static encryptWithBex(vposConfig: VposConfig | string): string;
    static encrypt(publicKey: string, plaintext: string): string;
    static decrypt(privateKey: string, plaintext: string): string;
    static verifyBexSign(data: string, signature: string): boolean;
    private static publicKey;
    private static getPrivateKeyFromString(privateKey);
    private static getPublicKeyFromString(publicKey);
    private static encode64(data);
    private static decode64(data);
}
