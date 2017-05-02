/// <reference types="request" />
import { CoreOptions } from "request";
import { MerchantLoginRequest } from "./request/merchantLoginRequest";
import { TicketRequest } from "./request/ticketRequest";
import { RawBexResponse } from "./response/bexResponse";
import { MerchantNonceResponse } from "./response/nonce/merchantNonceResponse";
import { PosData } from "./response/paymentResultResponse";
import { Token } from "./token";
export declare class MerchantApi {
    static opts: CoreOptions;
    static login(baseUrl: string, body: MerchantLoginRequest): Promise<RawBexResponse<Token> | Error>;
    static ticket(baseUrl: string, token: Token, body: TicketRequest): Promise<RawBexResponse<Token> | Error>;
    static result(baseUrl: string, token: Token, ticketId: string): Promise<RawBexResponse<PosData> | Error>;
    static commit(baseUrl: string, token: Token, body: MerchantNonceResponse): Promise<RawBexResponse<PosData> | Error>;
}
