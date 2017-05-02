export interface IPosResult {
    orderId?: string;
    authCode?: string;
    posResponse?: string;
    posResultCode?: string;
    posResultMessage?: string;
    referenceNumber?: string;
    posTransactionId?: string;
    posBank?: string;
}
export declare class PosResult {
    private orderId;
    private authCode;
    private posResponse;
    private posResultCode;
    private posResultMessage;
    private referenceNumber;
    private posTransactionId;
    private posBank;
    constructor(posResult: IPosResult);
    OrderId: string;
    AuthCode: string;
    PosResponse: string;
    PosResultCode: string;
    PosResultMessage: string;
    ReferenceNumber: string;
    PosTransactionId: string;
    PosBank: string;
}
