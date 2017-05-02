import { Configuration } from "../config/configuration";
import { MerchantServiceException } from "../exceptions";
import { Token } from "./token";
export declare class MerchantService {
    protected configuration: Configuration;
    constructor(configuration: Configuration);
    login(): Promise<Token | MerchantServiceException>;
    oneTimeTicket(connectionToken: Token, amount: number, installmentUrl?: string, nonceUrl?: string): Promise<Token | MerchantServiceException>;
}
