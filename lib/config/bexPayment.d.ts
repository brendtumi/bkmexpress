import { Configuration } from "./configuration";
export declare class BexPayment extends Configuration {
    static startBexPayment(environment: string, merchantId: string, merchantSecret: string): Configuration;
    constructor(environment: string, merchantId: string, merchantSecret: string);
}
