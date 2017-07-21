/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

export class VposConfig {
    private vposUserId: string;
    private vposPassword: string;
    private extra: any;
    private bankIndicator: string;
    private serviceUrl: string;
    private preAuth: boolean;

    public constructor() {
        this.extra = {};
    }

    public addExtra(key: string, value: string) {
        this.extra[key] = value;
    }

    public addSubMerchant(name: string): void {
        this.extra.subMerchantName = name;
    }

    public addSubMerchantForFinans(name: string, id: string, postalCode: string, city: string, country: string): void {
        this.extra.subMerchantName = name;
        this.extra.subMerchantId = id;
        this.extra.subMerchantPostalCode = postalCode;
        this.extra.subMerchantCity = city;
        this.extra.subMerchantCountry = country;
    }

    get Extra(): any {
        return this.extra;
    }

    set Extra(extra: any) {
        this.extra = extra;
    }

    get VposUserId(): string {
        return this.vposUserId;
    }

    set VposUserId(vposUserId: string) {
        this.vposUserId = vposUserId;
    }

    get VposPassword(): string {
        return this.vposPassword;
    }

    set VposPassword(vposPassword: string) {
        this.vposPassword = vposPassword;
    }

    get BankIndicator(): string {
        return this.bankIndicator;
    }

    set BankIndicator(bankIndicator: string) {
        this.bankIndicator = bankIndicator;
    }

    get ServiceUrl(): string {
        return this.serviceUrl;
    }

    set ServiceUrl(serviceUrl: string) {
        this.serviceUrl = serviceUrl;
    }

    public isPreAuth(): boolean {
        return this.preAuth;
    }

    set PreAuth(preAuth: boolean) {
        this.preAuth = preAuth;
    }
}
