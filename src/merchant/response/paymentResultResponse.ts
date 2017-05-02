/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

// tslint:disable:max-classes-per-file
import {BexResponse, RawBexResponse} from "./bexResponse";
import {PosResult} from "./posResult";

export class PaymentResultResponse extends BexResponse<PosData> {
    public constructor(obj?: RawBexResponse<PosData>) {
        super(obj);
    }

    public isPaymentPurchased(): boolean {
        return this.Data.isPaymentPurchased();
    }

    get Status(): string {
        return this.Data.Status;
    }

    get InstallmentCount(): string {
        return this.Data.InstallmentCount;
    }

    get TotalAmount(): string {
        return this.Data.TotalAmount;
    }

    get CardFirst6(): string {
        return this.Data.CardFirst6;
    }

    get CardLast4(): string {
        return this.Data.CardLast4;
    }

    get CardHash(): string {
        return this.Data.CardHash;
    }

    get BkmTokenId(): string {
        return this.Data.BkmTokenId;
    }

    get PosResult(): PosResult {
        return this.Data.PosResult;
    }

}

export class PosData {
    private status: string;
    private paymentPurchased: boolean;
    private installmentCount: string;
    private totalAmount: string;
    private cardFirst6: string;
    private cardLast4: string;
    private cardHash: string;
    private bkmTokenId: string;
    private posResult: PosResult;

    get Status(): string {
        return this.status;
    }

    public isPaymentPurchased(): boolean {
        return this.paymentPurchased;
    }

    get InstallmentCount(): string {
        return this.installmentCount;
    }

    get TotalAmount(): string {
        return this.totalAmount;
    }

    get CardFirst6(): string {
        return this.cardFirst6;
    }

    get CardLast4(): string {
        return this.cardLast4;
    }

    get CardHash(): string {
        return this.cardHash;
    }

    get BkmTokenId(): string {
        return this.bkmTokenId;
    }

    get PosResult(): PosResult {
        return this.posResult;
    }
}
