/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

export class TicketRequest {
    private type: string;
    private installmentUrl: string;
    private nonceUrl: string;
    private amount: string;
    private orderId: string;

    get Type(): string {
        return this.type;
    }

    set Type(type: string) {
        this.type = type;
    }

    get InstallmentUrl(): string {
        return this.installmentUrl;
    }

    set InstallmentUrl(installmentUrl: string) {
        this.installmentUrl = installmentUrl;
    }

    get NonceUrl(): string {
        return this.nonceUrl;
    }

    set NonceUrl(nonceUrl: string) {
        this.nonceUrl = nonceUrl;
    }

    get Amount(): string {
        return this.amount;
    }

    set Amount(amount: string) {
        this.amount = amount;
    }

    get OrderId(): string {
        return this.orderId;
    }

    set OrderId(orderId: string) {
        this.orderId = orderId;
    }
}