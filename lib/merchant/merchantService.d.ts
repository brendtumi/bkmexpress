import { Configuration } from "../config/configuration";
import { MerchantServiceException } from "../exceptions";
import { MerchantLoginResponse } from "./response/merchantLoginResponse";
import { TicketResponse } from "./response/ticketResponse";
import { Token } from "./token";
export declare class MerchantService {
    protected configuration: Configuration;
    constructor(configuration: Configuration);
    login(): Promise<MerchantLoginResponse | MerchantServiceException>;
    oneTimeTicket(connectionToken: Token, amount: number, installmentUrl?: string, nonceUrl?: string): Promise<TicketResponse | MerchantServiceException>;
}
