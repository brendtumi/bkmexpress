import {Banks} from "../enums";
/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 02.05.2017
 */

export class BinAndBank {
    private bin: string;
    private bankCode: string;

    public constructor(...binAndBank: string[]) {
        if (binAndBank.indexOf("@") > -1) {
            const split: string[] = binAndBank[0].split("@");
            this.bin = split[0];
            this.bankCode = split[1];
        }
        else {
            [this.bin, this.bankCode] = binAndBank;
        }
    }

    get Bin(): string {
        return this.bin;
    }

    get BankCode(): string {
        return this.bankCode;
    }

    get Bank(): string {
        return Banks.validate(this.bankCode);
        // return Banks.findById(this.bankCode);
    }
}
