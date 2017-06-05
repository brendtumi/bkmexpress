export interface INonceData {
    ticketId: string;
    orderId: string;
    totalAmount: string;
    totalAmountWithInstallmentCharge: string;
    numberOfInstallments: number;
    hash: string;
}
export declare class NonceData {
    private ticketId;
    private orderId;
    private totalAmount;
    private totalAmountWithInstallmentCharge;
    private numberOfInstallments;
    private hash;
    constructor(reply?: INonceData);
    readonly TicketId: string;
    readonly OrderId: string;
    readonly TotalAmount: string;
    readonly TotalAmountWithInstallmentCharge: string;
    readonly NumberOfInstallments: number;
    readonly Hash: string;
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
    readonly Reply: NonceData;
    readonly TicketId: string;
    readonly OrderId: string;
    readonly Signature: string;
    readonly TotalAmount: string;
    readonly TotalAmountWithInstallmentCharge: string;
    readonly NumberOfInstallments: number;
}
