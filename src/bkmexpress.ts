/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 */

/* tslint:disable:no-var-requires */
const pkg: any = require("../package.json");
export const version: string = pkg.version;
export * from "./exceptions";
