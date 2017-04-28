/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 28.04.2017
 */

import * as Bluebird from "bluebird";
import {Configuration} from "../config/configuration";
import {MerchantServiceException} from "../exceptions";
import {MerchantApi} from "./merchantApi";
import {Token} from "./token";
import {EncryptionUtil} from "./security";
import {MerchantLoginRequest} from "./request/merchantLoginRequest";
import {MerchantLoginResponse} from "./response/merchantLoginResponse";

export class MerchantService {
    protected configuration: Configuration;

    public constructor(configuration: Configuration) {
        this.configuration = configuration;
    }

    public login(): Promise<Token | MerchantServiceException> {
        const merchantId = this.configuration.MerchantId;
        const sign = EncryptionUtil.sign(this.configuration.MerchantPrivateKey, merchantId);
        const request = new MerchantLoginRequest(merchantId, sign);
        return new Bluebird((resolve, reject) => {
            MerchantApi.login(this.configuration.BexApiConfiguration.BaseUrl, request)
                .then((response: MerchantLoginResponse) => {
                    resolve(response.Token);
                })
                .catch((error) => {
                    reject(new MerchantServiceException(error));
                });
        });
    }

}
