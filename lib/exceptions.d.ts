export declare class BexException extends Error {
    constructor(message: string | Error);
}
export declare class BexPaymentException extends BexException {
    constructor(message: string | Error);
}
export declare class ConfigurationException extends BexException {
    constructor(message: string | Error);
}
export declare class EncryptionException extends BexException {
    constructor(message: string | Error);
}
export declare class MerchantServiceException extends BexException {
    constructor(message: string | Error);
}
export declare class MoneyUtilException extends BexException {
    constructor(message: string | Error);
}
export declare class BexApiConfigurationException extends BexException {
    constructor(message: string | Error);
}
