/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

import {PaymentResultResponse} from "../paymentResultResponse";

export class NonceResultResponse extends PaymentResultResponse {
    private error: string;

    get Error(): string {
        return this.error;
    }

    set Error(error: string) {
        this.error = error;
    }
}