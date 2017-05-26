/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

/* tslint:disable:max-classes-per-file */
export class RawBexResponse<T> {
    public call?: string | null = null;
    public result?: string | null = null;
    public code?: string | null = null;
    public message?: string;
    public description?: string | null = null;
    // TODO: type Map<String, Object>
    public parameters?: any | null = null;
    public data?: T | null = null;
    public error?: string = "";
}

export class BexResponse<T> {
    protected call?: string | null = null;
    protected result?: string | null = null;
    protected code?: string | null = null;
    protected message?: string;
    protected description?: string | null = null;
    // TODO: type Map<String, Object>
    protected parameters?: any | null = null;
    protected data?: T;

    public constructor(obj?: RawBexResponse<T>) {
        if (obj && obj.message) {
            this.message = obj.message;
        }
        if (obj && obj.result) {
            this.result = obj.result;
        }
        if (obj && obj.code) {
            this.code = obj.code;
        }
        if (obj && obj.call) {
            this.call = obj.call;
        }
        if (obj && obj.description) {
            this.description = obj.description;
        }
        if (obj && obj.parameters) {
            this.parameters = obj.parameters;
        }
        if (obj && obj.data) {
            this.data = obj.data;
        }
    }

    get Message(): string {
        return this.message;
    }

    set Message(message: string) {
        this.message = message;
    }

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
