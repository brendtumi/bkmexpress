import { BexResponse } from "./bexResponse";
import { PosResult } from "./posResult";
export declare class PaymentResultResponse extends BexResponse<PosData> {
    isPaymentPurchased(): boolean;
    readonly Status: string;
    readonly InstallmentCount: string;
    readonly TotalAmount: string;
    readonly CardFirst6: string;
    readonly CardLast4: string;
    readonly CardHash: string;
    readonly BkmTokenId: string;
    readonly PosResult: PosResult;
}
export declare class PosData {
    private status;
    private paymentPurchased;
    private installmentCount;
    private totalAmount;
    private cardFirst6;
    private cardLast4;
    private cardHash;
    private bkmTokenId;
    private posResult;
    readonly Status: string;
    isPaymentPurchased(): boolean;
    readonly InstallmentCount: string;
    readonly TotalAmount: string;
    readonly CardFirst6: string;
    readonly CardLast4: string;
    readonly CardHash: string;
    readonly BkmTokenId: string;
    readonly PosResult: PosResult;
}
