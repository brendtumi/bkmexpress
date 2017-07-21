import { RawBexResponse } from "../bexResponse";
import { PaymentResultResponse, PosData } from "../paymentResultResponse";
export declare class NonceResultResponse extends PaymentResultResponse {
    private error;
    constructor(obj?: RawBexResponse<PosData>);
    Error: string;
}
