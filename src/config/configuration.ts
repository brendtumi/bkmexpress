/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

import {Environment} from "../enums";
import {ConfigurationException} from "../exceptions";
import {BexApiConfiguration} from "./bexApiConfiguration";

export class Configuration {
    private environment: string;
    private merchantId: string;
    private merchantPrivateKey: string;
    private bexApiConfiguration: BexApiConfiguration;

    public constructor(environment: string, merchantId: string, merchantPrivateKey: string) {
        if (!environment) {
            throw new ConfigurationException("Environment can not be NULL or Empty.");
        }
        if (!merchantId) {
            throw new ConfigurationException("Merchant id can not be NULL or Empty.");
        }
        if (!merchantPrivateKey) {
            throw new ConfigurationException("Merchant Private Key can not be NULL or Empty.");
        }

        this.environment = environment;
        this.merchantId = merchantId;
        this.merchantPrivateKey = merchantPrivateKey;
        this.bexApiConfiguration = new BexApiConfiguration(environment);
    }

    get Environment(): string {
        return this.environment;
    }

    set Environment(environment: string) {
        this.environment = environment;
    }

    get MerchantId(): string {
        return this.merchantId;
    }

    set MerchantId(merchantId: string) {
        this.merchantId = merchantId;
    }

    get MerchantPrivateKey(): string {
        return this.merchantPrivateKey;
    }

    set MerchantPrivateKey(merchantPrivateKey: string) {
        this.merchantPrivateKey = merchantPrivateKey;
    }

    get BexApiConfiguration(): BexApiConfiguration {
        return this.bexApiConfiguration;
    }

    set BexApiConfiguration(bexApiConfiguration: BexApiConfiguration) {
        this.bexApiConfiguration = bexApiConfiguration;
    }

}