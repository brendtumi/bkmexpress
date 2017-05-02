import { PaymentResultResponse, PosData } from "../paymentResultResponse";
import { RawBexResponse } from "../bexResponse";
export declare class NonceResultResponse extends PaymentResultResponse {
    private error;
    constructor(obj?: RawBexResponse<PosData>);
    Error: string;
}
