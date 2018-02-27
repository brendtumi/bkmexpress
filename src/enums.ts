/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 */

/* tslint:disable:max-classes-per-file */
import {BexException} from "./exceptions";
export class Environment {
    public static DEV = "DEV";
    public static LOCAL = "LOCAL";
    public static SANDBOX = "SANDBOX";
    public static PREPROD = "PREPROD";
    public static PRODUCTION = "PRODUCTION";
}

export class Banks {
    public static ALBARAKA: string = "0203";
    public static AKBANK: string = "0046";
    public static BANKASYA: string = "0208";
    public static DENIZBANK: string = "0134";
    public static FINANSBANK: string = "0111";
    public static GARANTI: string = "0062";
    public static HALKBANK: string = "0012";
    public static HSBC: string = "0123";
    public static ISBANK: string = "0064";
    public static ING: string = "0099";
    public static KUVEYTTURK: string = "0205";
    public static ODEABANK: string = "0146";
    public static SEKERBANK: string = "0059";
    public static TEBBANK: string = "0032";
    public static TFKB: string = "0206";
    public static VAKIFBANK: string = "0015";
    public static YKB: string = "0067";
    public static ZIRAATBANK: string = "0010";

    public static validate(bankCode: string): string {
        switch (bankCode) {
            case this.ALBARAKA :
                return this.ALBARAKA;
            case this.AKBANK :
                return this.AKBANK;
            case this.BANKASYA :
                return this.BANKASYA;
            case this.DENIZBANK :
                return this.DENIZBANK;
            case this.FINANSBANK :
                return this.FINANSBANK;
            case this.GARANTI :
                return this.GARANTI;
            case this.HALKBANK :
                return this.HALKBANK;
            case this.HSBC :
                return this.HSBC;
            case this.ISBANK :
                return this.ISBANK;
            case this.ING :
                return this.ING;
            case this.KUVEYTTURK :
                return this.KUVEYTTURK;
            case this.ODEABANK :
                return this.ODEABANK;
            case this.SEKERBANK :
                return this.SEKERBANK;
            case this.TEBBANK :
                return this.TEBBANK;
            case this.TFKB :
                return this.TFKB;
            case this.VAKIFBANK :
                return this.VAKIFBANK;
            case this.YKB :
                return this.YKB;
            case this.ZIRAATBANK :
                return this.ZIRAATBANK;
            default:
                throw new BexException("Please check your bank code!");
        }
    }
}
