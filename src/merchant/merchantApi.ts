/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 27.04.2017
 */

import {extend} from "lodash";
import {CoreOptions} from "request";
import * as request from "request-promise";
import {debug} from "../debug";
import {MerchantLoginRequest} from "./request/merchantLoginRequest";
import {TicketRequest} from "./request/ticketRequest";
import {RawBexResponse} from "./response/bexResponse";
import {MerchantNonceResponse} from "./response/nonce/merchantNonceResponse";
import {PosData} from "./response/paymentResultResponse";
import {Token} from "./token";

export class MerchantApi {
    public static opts: CoreOptions = {
        baseUrl: null,
        body: {},
        headers: {
            // "Bex-Connection": Token.Token,
            // "Bex-Nonce": MerchantNonceResponse.Nonce,
            // "Bex-Ticket": "",
        },
        json: true,
        method: "POST",
        timeout: 20000,
    };

    public static login(baseUrl: string, body: MerchantLoginRequest): Promise<RawBexResponse<Token> | Error> {
        const opts: CoreOptions = extend(MerchantApi.opts, {baseUrl, body});
        debug("MerchantApi", "merchant/login", opts);
        return request("merchant/login", opts);
    }

    public static ticket(baseUrl: string, token: Token, body: TicketRequest): Promise<RawBexResponse<Token> | Error> {
        const opts: CoreOptions = extend(MerchantApi.opts, {baseUrl, body, headers: {"Bex-Connection": token.Token}});
        debug("MerchantApi", `merchant/${token.Path}/ticket?type=${body.Type}`, opts);
        return request(`merchant/${token.Path}/ticket?type=${body.Type}`, opts);
    }

    public static result(baseUrl: string, token: Token, ticketId: string): Promise<RawBexResponse<PosData> | Error> {
        const opts: CoreOptions = extend(MerchantApi.opts, {baseUrl, headers: {"Bex-Connection": token.Token}});
        debug("MerchantApi", `merchant/${token.Path}/ticket/${ticketId}/operate?name=result`, opts);
        return request(`merchant/${token.Path}/ticket/${ticketId}/operate?name=result`, opts);

    }

    public static commit(baseUrl: string, token: Token, body: MerchantNonceResponse): Promise<RawBexResponse<PosData> | Error> {
        const opts: CoreOptions = extend(MerchantApi.opts, {baseUrl, headers: {"Bex-Connection": token.Token, "Bex-Nonce": body.Nonce}});
        debug("MerchantApi", `merchant/${token.Path}/ticket/${body.Id}/operate?name=commit`, opts);
        return request(`merchant/${token.Path}/ticket/${body.Id}/operate?name=commit`, opts);
    }

}
