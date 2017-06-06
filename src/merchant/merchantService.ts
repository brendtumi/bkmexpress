/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 28.04.2017
 */

import * as Bluebird from "bluebird";
import {Configuration} from "../config/configuration";
import {Log} from "../debug";
import {MerchantServiceException} from "../exceptions";
import {MoneyUtils} from "../moneyUtils";
import {MerchantApi} from "./merchantApi";
import {MerchantLoginRequest} from "./request/merchantLoginRequest";
import {TicketRequest} from "./request/ticketRequest";
import {RawBexResponse} from "./response/bexResponse";
import {MerchantLoginResponse} from "./response/merchantLoginResponse";
import {MerchantNonceResponse} from "./response/nonce/merchantNonceResponse";
import {NonceResultResponse} from "./response/nonce/nonceResultResponse";
import {PaymentResultResponse, PosData} from "./response/paymentResultResponse";
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
            Log.debug("MerchantService/login", request);
            MerchantApi.login(this.configuration.BexApiConfiguration.BaseUrl, request)
                .then((raw: RawBexResponse<Token>) => {
                    const response: MerchantLoginResponse = new MerchantLoginResponse(raw);
                    Log.info("MerchantService/login", "MerchantLoginResponse", response);
                    resolve(response);
                })
                .catch((error) => {
                    Log.debug("MerchantService/login", "MerchantServiceException", error);
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
            Log.debug("MerchantService/oneTimeTicket", "connectionToken", connectionToken);
            Log.debug("MerchantService/oneTimeTicket", "ticket", ticket);
            MerchantApi.ticket(this.configuration.BexApiConfiguration.BaseUrl, connectionToken, ticket)
                .then((raw: RawBexResponse<Token>) => {
                    const response: TicketResponse = new TicketResponse(raw);
                    Log.info("MerchantService/oneTimeTicket", "TicketResponse", response);
                    resolve(response);
                })
                .catch((error) => {
                    Log.debug("MerchantService/oneTimeTicket", "MerchantServiceException", error);
                    reject(new MerchantServiceException(error));
                });
        });
    }

    public sendNonceResponse(connectionToken: Token, request: MerchantNonceResponse): Promise<NonceResultResponse | MerchantServiceException> {
        return new Bluebird((resolve, reject) => {
            Log.debug("MerchantService/sendNonceResponse", "connectionToken", connectionToken);
            Log.debug("MerchantService/sendNonceResponse", "MerchantNonceResponse", request);
            MerchantApi.commit(this.configuration.BexApiConfiguration.BaseUrl, connectionToken, request)
                .then((raw: RawBexResponse<PosData>) => {
                    const response: NonceResultResponse = new NonceResultResponse(raw);
                    Log.info("MerchantService/sendNonceResponse", "NonceResultResponse", response);
                    resolve(response);
                })
                .catch((error) => {
                    Log.debug("MerchantService/sendNonceResponse", "MerchantServiceException", error);
                    reject(new MerchantServiceException(error));
                });
        });
    }

    public result(connectionToken: Token, ticketId: string): Promise<PaymentResultResponse | MerchantServiceException> {
        return new Bluebird((resolve, reject) => {
            Log.debug("MerchantService/result", "connectionToken", connectionToken);
            Log.debug("MerchantService/result", "ticketId", ticketId);
            MerchantApi.result(this.configuration.BexApiConfiguration.BaseUrl, connectionToken, ticketId)
                .then((raw: RawBexResponse<PosData>) => {
                    const response: PaymentResultResponse = new PaymentResultResponse(raw);
                    Log.info("MerchantService/result", "PaymentResultResponse", response);
                    resolve(response);
                })
                .catch((error) => {
                    Log.debug("MerchantService/result", "MerchantServiceException", error);
                    reject(new MerchantServiceException(error));
                });
        });
    }
}
