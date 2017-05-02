/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */
import {BexResponse, RawBexResponse} from "../bexResponse";

export class NonceReceivedResponse extends BexResponse<string> {
    public status: string = "OK";

    public constructor(obj?: RawBexResponse<string>) {
        super(obj);
        this.Data = this.status;
    }
}
