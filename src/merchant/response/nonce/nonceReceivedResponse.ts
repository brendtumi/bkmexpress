/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */
import {BexResponse} from "../bexResponse";

export class NonceReceivedResponse extends BexResponse<string> {
    public status: string = "OK";

    public constructor() {
        super();
        this.Data = this.status;
    }
}
