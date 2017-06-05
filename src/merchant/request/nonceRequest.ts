/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 22.05.2017
 */

// tslint:disable:max-classes-per-file
export interface INonceData {
    ticketId: string;
    orderId: string;
    totalAmount: string;
    totalAmountWithInstallmentCharge: string;
    numberOfInstallments: number;
    hash: string;
}

export class NonceData {
    private ticketId: string;
    private orderId: string;
    private totalAmount: string;
    private totalAmountWithInstallmentCharge: string;
    private numberOfInstallments: number;
    private hash: string;

    public constructor(reply?: INonceData) {
        if (reply && reply.ticketId) {
            this.ticketId = reply.ticketId;
        }
        if (reply && reply.orderId) {
            this.orderId = reply.orderId;
        }
        if (reply && reply.totalAmount) {
            this.totalAmount = reply.totalAmount;
        }
        if (reply && reply.totalAmountWithInstallmentCharge) {
            this.totalAmountWithInstallmentCharge = reply.totalAmountWithInstallmentCharge;
        }
        if (reply && reply.numberOfInstallments) {
            this.numberOfInstallments = reply.numberOfInstallments;
        }
        if (reply && reply.hash) {
            this.hash = reply.hash;
        }
    }

    get TicketId(): string {
        return this.ticketId;
    }

    get OrderId(): string {
        return this.orderId;
    }

    get TotalAmount(): string {
        return this.totalAmount;
    }

    get TotalAmountWithInstallmentCharge(): string {
        return this.totalAmountWithInstallmentCharge;
    }

    get NumberOfInstallments(): number {
        return this.numberOfInstallments;
    }

    get Hash(): string {
        return this.hash;
    }
}

export class NonceRequest {
    private id: string;
    private path: string;
    private issuer: string;
    private approver: string;
    private token: string;
    private signature: string;
    private reply: NonceData;

    public constructor(id: string, path: string, issuer: string, approver: string, token: string, signature: string, reply: INonceData) {
        this.id = id;
        this.path = path;
        this.issuer = issuer;
        this.approver = approver;
        this.token = token;
        this.signature = signature;
        this.reply = new NonceData(reply);
    }

    get Id() {
        return this.id;
    }

    get Path() {
        return this.path;
    }

    get Issuer() {
        return this.issuer;
    }

    get Approver() {
        return this.approver;
    }

    get Token() {
        return this.token;
    }

    get Reply() {
        return this.reply;
    }

    get TicketId() {
        return this.reply.TicketId;
    }

    get OrderId() {
        return this.reply.OrderId;
    }

    get Signature() {
        return this.signature;
    }

    get TotalAmount() {
        return this.reply.TotalAmount;
    }

    get TotalAmountWithInstallmentCharge() {
        return this.reply.TotalAmountWithInstallmentCharge;
    }

    get NumberOfInstallments(): number {
        return this.reply.NumberOfInstallments;
    }

}
