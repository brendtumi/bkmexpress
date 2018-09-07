/// <reference types="node" />
import { RsaPublicKey } from "crypto";
import { VposConfig } from "./request/vposConfig";
export declare class EncryptionUtil {
    static sign(privateKey: string, data: string): string;
    static verify(publicKey: string, data: string, signature: string): boolean;
    static encrypt(publicKey: string | RsaPublicKey, plaintext: string): string;
    static decrypt(privateKey: string, plaintext: string, isBase64?: boolean): string;
    static verifyBexSign(data: string, signature: string): boolean;
    static encryptWithBex(vposConfig: VposConfig | string): string;
    static encode64(data: string): string;
    static decode64(data: string): string;
    private static readonly PublicKey;
    private static publicKey;
    private static bufferFromString;
}
