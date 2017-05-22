/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 22.05.2017
 */

// tslint:disable:max-classes-per-file

export interface INonceData {
    TicketId: string;
    OrderId: string;
    TotalAmount: string;
    TotalAmountWithInstallmentCharge: string;
    NumberOfInstallments: number;
    Hash: string;
}

export class NonceRequest {
    private id: string;
    private path: string;
    private issuer: string;
    private approver: string;
    private token: string;
    private signature: string;
    private reply: INonceData;

    public constructor(id: string, path: string, issuer: string, approver: string, token: string, signature: string, reply: INonceData) {
        this.id = id;
        this.path = path;
        this.issuer = issuer;
        this.approver = approver;
        this.token = token;
        this.signature = signature;
        this.reply = reply;
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