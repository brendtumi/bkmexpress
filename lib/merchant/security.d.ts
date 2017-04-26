import { VposConfig } from "./request/vposConfig";
export declare class EncryptionUtil {
    static sign(privateKey: string, data: string): string | null;
    static encryptWithBex(vposConfig: VposConfig): string | null;
    private static publicKey;
}
