import { Environment } from "../enums";
import { BexApiConfiguration } from "./bexApiConfiguration";
export declare class Configuration {
    private environment;
    private merchantId;
    private merchantPrivateKey;
    private bexApiConfiguration;
    constructor(environment: Environment, merchantId: string, merchantPrivateKey: string);
    Environment: Environment;
    MerchantId: string;
    MerchantPrivateKey: string;
    BexApiConfiguration: BexApiConfiguration;
}
