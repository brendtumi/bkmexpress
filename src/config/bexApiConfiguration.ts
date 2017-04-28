/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 */

import {Environment} from "../enums";
import {BexApiConfigurationException} from "../exceptions";

export class BexApiConfiguration {
    public static LOCAL_URL = "http://api.bex.dev/v1/";
    public static DEV_URL = "https://bex-api.finartz.com/v1/";
    public static SANDBOX_URL = "https://test-api.bkmexpress.com.tr/v1/";
    public static PRODUCTION_URL = "https://api.bkmexpress.com.tr/v1/";

    public static LOCAL_EXPRESS_JS_URL = "http://js.bex.dev/javascripts/bex.js";
    public static DEV_EXPRESS_JS_URL = "https://bex-js.finartz.com/v1/javascripts/bex.js";
    public static SANDBOX_EXPRESS_JS_URL = "https://test-js.bkmexpress.com.tr/v1/javascripts/bex.js";
    public static PRODUCTION_EXPRESS_JS_URL = "https://js.bkmexpress.com.tr/v1/javascripts/bex.js";

    private baseUrl: string;
    private baseJs: string;

    public constructor(environment: string) {
        if (Environment.LOCAL === environment) {
            this.baseUrl = BexApiConfiguration.LOCAL_URL;
            this.baseJs = BexApiConfiguration.LOCAL_EXPRESS_JS_URL;
        }
        else if (Environment.DEV === environment) {
            this.baseUrl = BexApiConfiguration.DEV_URL;
            this.baseJs = BexApiConfiguration.DEV_EXPRESS_JS_URL;
        }
        else if (Environment.SANDBOX === environment) {
            this.baseUrl = BexApiConfiguration.SANDBOX_URL;
            this.baseJs = BexApiConfiguration.SANDBOX_EXPRESS_JS_URL;
        }
        else if (Environment.PRODUCTION === environment) {
            this.baseUrl = BexApiConfiguration.PRODUCTION_URL;
            this.baseJs = BexApiConfiguration.PRODUCTION_EXPRESS_JS_URL;
        }
        else {
            throw new BexApiConfigurationException("You should set a valid environment");
        }
    }

    get BaseUrl(): string {
        return this.baseUrl;
    }

    set BaseUrl(url: string) {
        this.baseUrl = url;
    }

    get BaseJs(): string {
        return this.baseJs;
    }

    set BaseJs(url: string) {
        this.baseJs = url;
    }
}
