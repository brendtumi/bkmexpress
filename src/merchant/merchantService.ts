/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 28.04.2017
 */

import * as Bluebird from "bluebird";
import {Configuration} from "../config/configuration";
import {debug} from "../debug";
import {MerchantServiceException} from "../exceptions";
import {MoneyUtils} from "../moneyUtils";
import {MerchantApi} from "./merchantApi";
import {MerchantLoginRequest} from "./request/merchantLoginRequest";
import {TicketRequest} from "./request/ticketRequest";
import {RawBexResponse} from "./response/bexResponse";
import {MerchantLoginResponse} from "./response/merchantLoginResponse";
import {TicketResponse} from "./response/ticketResponse";
import {EncryptionUtil} from "./security";
import {Token} from "./token";

export class MerchantService {
    protected configuration: Configuration;

    public constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    public login(): Promise<MerchantLoginResponse | MerchantServiceException> {
        const merchantId = this.configuration.MerchantId;
        const sign = EncryptionUtil.sign(this.configuration.MerchantPrivateKey, merchantId);
        const request = new MerchantLoginRequest(merchantId, sign);
        return new Bluebird((resolve, reject) => {
            debug("MerchantService/login", request);
            MerchantApi.login(this.configuration.BexApiConfiguration.BaseUrl, request)
                .then((raw: RawBexResponse<Token>) => {
                    const response: MerchantLoginResponse = new MerchantLoginResponse(raw);
                    debug("MerchantService/login", "MerchantLoginResponse", response);
                    resolve(response);
                })
                .catch((error) => {
                    debug("MerchantService/login", "MerchantServiceException", error);
                    reject(new MerchantServiceException(error));
                });
        });
    }

    public oneTimeTicket(connectionToken: Token, amount: number, installmentUrl?: string, nonceUrl?: string): Promise<TicketResponse | MerchantServiceException> {
        const ticket = new TicketRequest("payment");
        ticket.Amount = MoneyUtils.toTRY(amount);
        if (installmentUrl) {
            ticket.InstallmentUrl = installmentUrl;
        }
        if (nonceUrl) {
            ticket.NonceUrl = nonceUrl;
        }
        return new Bluebird((resolve, reject) => {
            debug("MerchantService/oneTimeTicket", connectionToken, ticket);
            MerchantApi.ticket(this.configuration.BexApiConfiguration.BaseUrl, connectionToken, ticket)
                .then((raw: RawBexResponse<Token>) => {
                    const response: TicketResponse = new TicketResponse(raw);
                    debug("MerchantService/oneTimeTicket", "TicketResponse", response);
                    resolve(response);
                })
                .catch((error) => {
                    debug("MerchantService/oneTimeTicket", "MerchantServiceException", error);
                    reject(new MerchantServiceException(error));
                });
        });
    }

}
