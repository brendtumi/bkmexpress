/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

export class MerchantLoginRequest {

    private id: string;
    private signature: string;

    public MerchantLoginRequest(id: string, signature: string) {
        this.id = id;
        this.signature = signature;
    }

    get Id(): string {
        return this.id;
    }

    set Id(id: string) {
        this.id = id;
    }

    get Signature(): string {
        return this.signature;
    }

    set Signature(signature: string) {
        this.signature = signature;
    }
}
