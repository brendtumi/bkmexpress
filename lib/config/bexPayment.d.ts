import { Environment } from "../enums";
import { Configuration } from "./configuration";
export declare class BexPayment extends Configuration {
    static startBexPayment(environment: Environment, merchantId: string, merchantSecret: string): Configuration;
    constructor(environment: Environment, merchantId: string, merchantSecret: string);
}
