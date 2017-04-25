/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */

import {BexPaymentException} from "../exceptions";
import {Configuration} from "./configuration";

export class BexPayment extends Configuration {
    public static startBexPayment(environment: string, merchantId: string, merchantSecret: string) {
        if (!environment) {
            throw new BexPaymentException("Enviroment can not be NULL or Empty.");
        }
        if (!merchantId) {
            throw new BexPaymentException("Merchant id can not be NULL or Empty.");
        }
        if (!merchantSecret) {
            throw new BexPaymentException("Merchant Private Key can not be NULL or Empty.");
        }

        return new Configuration(environment, merchantId, merchantSecret);
    }

    public constructor(environment: string, merchantId: string, merchantSecret: string) {
        if (!environment) {
            throw new BexPaymentException("Enviroment can not be NULL or Empty.");
        }
        if (!merchantId) {
            throw new BexPaymentException("Merchant id can not be NULL or Empty.");
        }
        if (!merchantSecret) {
            throw new BexPaymentException("Merchant Private Key can not be NULL or Empty.");
        }
        super(environment, merchantId, merchantSecret);
    }

}