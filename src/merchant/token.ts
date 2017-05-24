/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

export class Token {
    private shortId: string;
    private path: string;
    private token: string;

    public constructor(obj?: { id: string, shortId: string, path: string, token: string } | any) {
        if (obj && (obj.id || obj.shortId)) {
            this.shortId = obj.id || obj.shortId;
        }
        if (obj && obj.path) {
            this.path = obj.path;
        }
        if (obj && obj.token) {
            this.token = obj.token;
        }
    }

    get ShortId(): string {
        return this.shortId;
    }

    set ShortId(shortId: string) {
        this.shortId = shortId;
    }

    get Path(): string {
        return this.path;
    }

    set Path(path: string) {
        this.path = path;
    }

    get Token(): string {
        return this.token;
    }

    set Token(token: string) {
        this.token = token;
    }
}
