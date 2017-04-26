/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

export class BexResponse<T> {

    private result: string;
    private code: string;
    private call: string;
    private description: string;
    // TODO: type <String, Object>
    private parameters: any;
    private data: T;

    get Result(): string {
        return this.result;
    }

    set Result(result: string) {
        this.result = result;
    }

    get Code(): string {
        return this.code;
    }

    set Code(code: string) {
        this.code = code;
    }

    get Call(): string {
        return this.call;
    }

    set Call(call: string) {
        this.call = call;
    }

    get Description(): string {
        return this.description;
    }

    set Description(description: string) {
        this.description = description;
    }

    get Parameters(): any {
        return this.parameters;
    }

    set Parameters(parameters: any) {
        this.parameters = parameters;
    }

    get Data(): T {
        return this.data;
    }

    set Data(data: T) {
        this.data = data;
    }
}
