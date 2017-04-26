/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

import {Token} from "../token";
import {BexResponse} from "./bexResponse";

export class TicketResponse extends BexResponse<Token> {
    get Token(): Token {
        return this.Data;
    }
}
