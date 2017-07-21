/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 03.05.2017
 */

import * as Debug from "debug";

const err = Debug("bkmexpress:error");
const deb = Debug("bkmexpress:debug");
const info = Debug("bkmexpress:info");

info.log = console.log.bind(console);
// deb.log = console.debug.bind(console);
deb.log = console.log.bind(console);

export class Log {
    public static debug(...args: any[]): void {
        deb.apply(null, args);
    }

    public static info(...args: any[]): void {
        info.apply(null, args);
    }

    public static error(...args: any[]): void {
        err.apply(null, args);
    }
}
