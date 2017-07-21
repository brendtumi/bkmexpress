/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 02.05.2017
 */

import {BinAndBank} from "../binAndBank";

export class InstallmentRequest {
    private bin: string[];
    private totalAmount: string;
    private ticketId: string;
    private signature: string;

    public constructor(bin: string[], totalAmount: string, ticketId: string, signature: string) {
        this.bin = bin;
        this.totalAmount = totalAmount;
        this.ticketId = ticketId;
        this.signature = signature;
    }

    public binAndBanks(): BinAndBank[] {
        const binAndBanks = [];
        for (const bin of this.bin) {
            binAndBanks.push(new BinAndBank(bin));
        }
        return binAndBanks;
    }

    get Bin(): string[] {
        return this.bin;
    }

    set Bin(bin: string[]) {
        this.bin = bin;
    }

    get TotalAmount(): string {
        return this.totalAmount;
    }

    set TotalAmount(totalAmount: string) {
        this.totalAmount = totalAmount;
    }

    get TicketId(): string {
        return this.ticketId;
    }

    set TicketId(ticketId: string) {
        this.ticketId = ticketId;
    }

    get Signature(): string {
        return this.signature;
    }

    set Signature(signature: string) {
        this.signature = signature;
    }

}
