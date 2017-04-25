/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 */

/* tslint:disable:max-classes-per-file */
export class BexException extends Error {
    constructor(message) {
        super(message);
        this.name = "BexException";
    }
}
export class BexPaymentException extends Error {
    constructor(message) {
        super(message);
        this.name = "BexPaymentException";
    }
}
export class ConfigurationException extends Error {
    constructor(message) {
        super(message);
        this.name = "ConfigurationException";
    }
}
export class EncryptionException extends Error {
    constructor(message) {
        super(message);
        this.name = "EncryptionException";
    }
}
export class MerchantServiceException extends Error {
    constructor(message) {
        super(message);
        this.name = "MerchantServiceException";
    }
}
export class MoneyUtilException extends Error {
    constructor(message) {
        super(message);
        this.name = "MoneyUtilException";
    }
}
export class BexApiConfigurationException extends Error {
    constructor(message) {
        super(message);
        this.name = "BexApiConfigurationException";
    }
}
