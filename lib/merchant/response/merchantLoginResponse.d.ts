import { Token } from "../token";
import { BexResponse } from "./bexResponse";
export declare class MerchantLoginResponse extends BexResponse<Token> {
    readonly Token: Token;
}
