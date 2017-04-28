/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 */

/* tslint:disable:max-classes-per-file */
export class BexException extends Error {
    constructor(message: string | Error) {
        if (typeof message === "string") {
            super(message);
        }
        else {
            super(message.toString());
        }
        this.name = "BexException";
    }
}
export class BexPaymentException extends BexException {
    constructor(message: string | Error) {
        super(message);
        this.name = "BexPaymentException";
    }
}
export class ConfigurationException extends BexException {
    constructor(message: string | Error) {
        super(message);
        this.name = "ConfigurationException";
    }
}
export class EncryptionException extends BexException {
    constructor(message: string | Error) {
        super(message);
        this.name = "EncryptionException";
    }
}
export class MerchantServiceException extends BexException {
    constructor(message: string | Error) {
        super(message);
        this.name = "MerchantServiceException";
    }
}
export class MoneyUtilException extends BexException {
    constructor(message: string | Error) {
        super(message);
        this.name = "MoneyUtilException";
    }
}
export class BexApiConfigurationException extends BexException {
    constructor(message: string | Error) {
        super(message);
        this.name = "BexApiConfigurationException";
    }
}
