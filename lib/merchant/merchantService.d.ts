import { Configuration } from "../config/configuration";
import { MerchantServiceException } from "../exceptions";
import { Token } from "./token";
export declare class MerchantService {
    protected configuration: Configuration;
    constructor(configuration: Configuration);
    login(): Promise<Token | MerchantServiceException>;
}
