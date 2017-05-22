export interface INonceData {
    TicketId: string;
    OrderId: string;
    TotalAmount: string;
    TotalAmountWithInstallmentCharge: string;
    NumberOfInstallments: number;
    Hash: string;
}
export declare class NonceRequest {
    private id;
    private path;
    private issuer;
    private approver;
    private token;
    private signature;
    private reply;
    constructor(id: string, path: string, issuer: string, approver: string, token: string, signature: string, reply: INonceData);
    readonly Id: string;
    readonly Path: string;
    readonly Issuer: string;
    readonly Approver: string;
    readonly Token: string;
    readonly Reply: INonceData;
    readonly TicketId: string;
    readonly OrderId: string;
    readonly Signature: string;
    readonly TotalAmount: string;
    readonly TotalAmountWithInstallmentCharge: string;
    readonly NumberOfInstallments: number;
}
