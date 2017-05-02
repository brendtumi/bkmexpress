import { Token } from "../token";
import { BexResponse, RawBexResponse } from "./bexResponse";
export declare class TicketResponse extends BexResponse<Token> {
    constructor(obj?: RawBexResponse<Token>);
    readonly Token: Token;
}
