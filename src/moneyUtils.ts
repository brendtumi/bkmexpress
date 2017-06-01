/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 28.04.2017
 */
import {MoneyUtilException} from "./exceptions";

export class MoneyUtils {
    public static toTRY(amount: number): string {
        let formatted: string = amount.toLocaleString("tr-TR", {style: "currency", currency: "TRY", currencyDisplay: "code"});
        formatted = formatted.replace(/TRY|,|\s+/gi, "");
        formatted = formatted.replace(/\./i, ",");
        return MoneyUtils.validate(formatted);
    }

    public static toNumber(amount: string): number {
        let formatted: string = MoneyUtils.validate(amount).replace(",", ".");
        formatted = formatted.replace(/[^\d\.]/i, "");
        return parseFloat(formatted);
    }

    public static validate(amount: string): string {
        const split: string[] = amount.split(",");
        if (amount.indexOf(".") > -1 || split.length !== 2 || split[1].length !== 2) {
            throw new MoneyUtilException("Input validation error.");
        }
        return amount;
    }
}