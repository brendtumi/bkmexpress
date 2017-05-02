/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

import {PaymentResultResponse, PosData} from "../paymentResultResponse";
import {RawBexResponse} from "../bexResponse";

export class NonceResultResponse extends PaymentResultResponse {
    private error: string;

    public constructor(obj?: RawBexResponse<PosData>) {
        super(obj);
        this.Error = obj.error;
    }

    get Error(): string {
        return this.error;
    }

    set Error(error: string) {
        this.error = error;
    }
}