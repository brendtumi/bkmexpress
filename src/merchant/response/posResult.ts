/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

export interface IPosResult {
    orderId: string;
    authCode: string;
    posResponse: string;
    posResultCode: string;
    posResultMessage: string;
    referenceNumber: string;
    posTransactionId: string;
    posBank: string;
}

export class PosResult {
    private orderId: string;
    private authCode: string;
    private posResponse: string;
    private posResultCode: string;
    private posResultMessage: string;
    private referenceNumber: string;
    private posTransactionId: string;
    private posBank: string;

    public constructor(posResult: IPosResult) {
        this.orderId = posResult.orderId;
        this.authCode = posResult.authCode;
        this.posResponse = posResult.posResponse;
        this.posResultCode = posResult.posResultCode;
        this.posResultMessage = posResult.posResultMessage;
        this.referenceNumber = posResult.referenceNumber;
        this.posTransactionId = posResult.posTransactionId;
        this.posBank = posResult.posBank;
    }

    get OrderId(): string {
        return this.orderId;
    }

    set OrderId(orderId: string) {
        this.orderId = orderId;
    }

    get AuthCode(): string {
        return this.authCode;
    }

    set AuthCode(authCode: string) {
        this.authCode = authCode;
    }

    get PosResponse(): string {
        return this.posResponse;
    }

    set PosResponse(posResponse: string) {
        this.posResponse = posResponse;
    }

    get PosResultCode(): string {
        return this.posResultCode;
    }

    set PosResultCode(posResultCode: string) {
        this.posResultCode = posResultCode;
    }

    get PosResultMessage(): string {
        return this.posResultMessage;
    }

    set PosResultMessage(posResultMessage: string) {
        this.posResultMessage = posResultMessage;
    }

    get ReferenceNumber(): string {
        return this.referenceNumber;
    }

    set ReferenceNumber(referenceNumber: string) {
        this.referenceNumber = referenceNumber;
    }

    get PosTransactionId(): string {
        return this.posTransactionId;
    }

    set PosTransactionId(posTransactionId: string) {
        this.posTransactionId = posTransactionId;
    }

    get PosBank(): string {
        return this.posBank;
    }

    set PosBank(posBank: string) {
        this.posBank = posBank;
    }

}