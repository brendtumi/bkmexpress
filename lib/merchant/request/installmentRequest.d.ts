import { BinAndBank } from "../binAndBank";
export declare class InstallmentRequest {
    private bin;
    private totalAmount;
    private ticketId;
    private signature;
    constructor(bin: string[], totalAmount: string, ticketId: string, signature: string);
    binAndBanks(): BinAndBank[];
    Bin: string[];
    TotalAmount: string;
    TicketId: string;
    Signature: string;
}
