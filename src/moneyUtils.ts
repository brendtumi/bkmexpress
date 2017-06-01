/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 28.04.2017
 */
import * as semver from "semver";
import {MoneyUtilException} from "./exceptions";
const nodeVersion = semver.clean(process.version);

export class MoneyUtils {
    public static toTRY(amount: number): string {
        let formatted: string;
        if (semver.lt(nodeVersion, "4.0.0")) {
            formatted = (Math.round(amount * 100) / 100).toString();
            const split: string[] = formatted.split(".");
            if (split.length === 1 || split[1].length < 1) {
                split[1] = "00";
            }
            else if (split[1].length < 2) {
                split[1] = split[1] + "0";
            }
            formatted = split.join(",");
        }
        else {
            formatted = amount.toLocaleString("tr-TR", {style: "currency", currency: "TRY", currencyDisplay: "code"});
            formatted = formatted.replace(/TRY|,|\s+/gi, "");
            formatted = formatted.replace(/\./i, ",");
        }
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