export declare class BexApiConfiguration {
    static LOCAL_URL: string;
    static DEV_URL: string;
    static SANDBOX_URL: string;
    static PRODUCTION_URL: string;
    static LOCAL_EXPRESS_JS_URL: string;
    static DEV_EXPRESS_JS_URL: string;
    static SANDBOX_EXPRESS_JS_URL: string;
    static PRODUCTION_EXPRESS_JS_URL: string;
    private baseUrl;
    private baseJs;
    constructor(environment: any);
    BaseUrl: string;
    BaseJs: string;
}
