/// <reference types="request" />
import { CoreOptions } from "request";
import { MerchantLoginRequest } from "./request/merchantLoginRequest";
import { TicketRequest } from "./request/ticketRequest";
import { MerchantLoginResponse } from "./response/merchantLoginResponse";
import { MerchantNonceResponse } from "./response/nonce/merchantNonceResponse";
import { NonceResultResponse } from "./response/nonce/nonceResultResponse";
import { PaymentResultResponse } from "./response/paymentResultResponse";
import { TicketResponse } from "./response/ticketResponse";
import { Token } from "./token";
export declare class MerchantApi {
    static opts: CoreOptions;
    static login(baseUrl: string, body: MerchantLoginRequest): Promise<MerchantLoginResponse | Error>;
    static ticket(baseUrl: string, token: Token, body: TicketRequest): Promise<TicketResponse | Error>;
    static result(baseUrl: string, token: Token, ticketId: string): Promise<PaymentResultResponse | Error>;
    static commit(baseUrl: string, token: Token, body: MerchantNonceResponse): Promise<NonceResultResponse | Error>;
}
