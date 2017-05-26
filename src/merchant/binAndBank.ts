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

    public constructor(binAndBank: string) {
        if (binAndBank.indexOf("@") > -1) {
            [this.bin, this.bankCode] = binAndBank.split("@");
        }
        else {
            this.bin = binAndBank.substr(0, 6);
            this.bankCode = binAndBank.substr(6, 4);
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
