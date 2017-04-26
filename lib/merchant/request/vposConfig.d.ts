export declare class VposConfig {
    private vposUserId;
    private vposPassword;
    private extra;
    private bankIndicator;
    private serviceUrl;
    private preAuth;
    addExtra(key: string, value: string): void;
    addSubMerchant(name: string): void;
    addSubMerchantForFinans(name: string, id: string, postalCode: string, city: string, country: string): void;
    Extra: any;
    VposUserId: string;
    VposPassword: string;
    BankIndicator: string;
    ServiceUrl: string;
    isPreAuth(): boolean;
    PreAuth: boolean;
}
