/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

export class MerchantNonceResponse {
    private result: boolean;
    private nonce: string;
    private id: string;
    private message: string = "";

    get Result(): boolean {
        return this.result;
    }

    set Result(result: boolean) {
        this.result = result;
    }

    get Nonce(): string {
        return this.nonce;
    }

    set Nonce(nonce: string) {
        this.nonce = nonce;
    }

    get Message(): string {
        return this.message;
    }

    set Message(message: string) {
        this.message = message;
    }

    get Id(): string {
        return this.id;
    }

    set Id(id: string) {
        this.id = id;
    }
}
