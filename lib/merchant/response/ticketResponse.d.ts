import { Token } from "../token";
import { BexResponse } from "./bexResponse";
export declare class TicketResponse extends BexResponse<Token> {
    readonly Token: Token;
}
