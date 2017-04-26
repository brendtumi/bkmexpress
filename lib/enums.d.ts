export declare enum Environment {
    DEV = 1,
    LOCAL = 2,
    SANDBOX = 3,
    PRODUCTION = 4,
}
export declare class Banks {
    static ALBARAKA: string;
    static AKBANK: string;
    static BANKASYA: string;
    static DENIZBANK: string;
    static FINANSBANK: string;
    static GARANTI: string;
    static HALKBANK: string;
    static HSBC: string;
    static ISBANK: string;
    static ING: string;
    static KUVEYTTURK: string;
    static ODEABANK: string;
    static SEKERBANK: string;
    static TEBBANK: string;
    static TFKB: string;
    static VAKIFBANK: string;
    static YKB: string;
    static ZIRAATBANK: string;
    static validate(bankCode: string): string;
}
