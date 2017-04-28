import { BexApiConfiguration } from "./bexApiConfiguration";
export declare class Configuration {
    private environment;
    private merchantId;
    private merchantPrivateKey;
    private bexApiConfiguration;
    constructor(environment: string, merchantId: string, merchantPrivateKey: string);
    Environment: string;
    MerchantId: string;
    MerchantPrivateKey: string;
    BexApiConfiguration: BexApiConfiguration;
}
