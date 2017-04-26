import { VposConfig } from "./request/vposConfig";
export declare class EncryptionUtil {
    static sign(privateKey: string, data: string): string;
    static encryptWithBex(vposConfig: VposConfig | string): string;
    static encrypt(publicKey: string, plaintext: string): string;
    static decrypt(privateKey: string, plaintext: string): string;
    static verifyBexSign(data: string, signature: string): boolean;
    static encode64(data: string): string;
    static decode64(data: string): string;
    private static publicKey;
}
