"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
var exceptions_1 = require("../exceptions");
var BexApiConfiguration = (function () {
    function BexApiConfiguration(environment) {
        if (enums_1.Environment.LOCAL === environment) {
            this.baseUrl = BexApiConfiguration.LOCAL_URL;
            this.baseJs = BexApiConfiguration.LOCAL_EXPRESS_JS_URL;
        }
        else if (enums_1.Environment.DEV === environment) {
            this.baseUrl = BexApiConfiguration.DEV_URL;
            this.baseJs = BexApiConfiguration.DEV_EXPRESS_JS_URL;
        }
        else if (enums_1.Environment.SANDBOX === environment) {
            this.baseUrl = BexApiConfiguration.SANDBOX_URL;
            this.baseJs = BexApiConfiguration.SANDBOX_EXPRESS_JS_URL;
        }
        else if (enums_1.Environment.PREPROD === environment) {
            this.baseUrl = BexApiConfiguration.PREPROD_URL;
            this.baseJs = BexApiConfiguration.PREPROD_EXPRESS_JS_URL;
        }
        else if (enums_1.Environment.PRODUCTION === environment) {
            this.baseUrl = BexApiConfiguration.PRODUCTION_URL;
            this.baseJs = BexApiConfiguration.PRODUCTION_EXPRESS_JS_URL;
        }
        else {
            throw new exceptions_1.BexApiConfigurationException("You should set a valid environment");
        }
    }
    Object.defineProperty(BexApiConfiguration.prototype, "BaseUrl", {
        get: function () {
            return this.baseUrl;
        },
        set: function (url) {
            this.baseUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BexApiConfiguration.prototype, "BaseJs", {
        get: function () {
            return this.baseJs;
        },
        set: function (url) {
            this.baseJs = url;
        },
        enumerable: true,
        configurable: true
    });
    BexApiConfiguration.LOCAL_URL = "http://api.bex.finartz/v1/";
    BexApiConfiguration.DEV_URL = "https://bex-api.finartz.com/v1/";
    BexApiConfiguration.SANDBOX_URL = "https://test-api.bkmexpress.com.tr/v1/";
    BexApiConfiguration.PREPROD_URL = "https://preprod-api.bkmexpress.com.tr/v1/";
    BexApiConfiguration.PRODUCTION_URL = "https://api.bkmexpress.com.tr/v1/";
    BexApiConfiguration.LOCAL_EXPRESS_JS_URL = "http://js.bex.finartz/javascripts/bex.js";
    BexApiConfiguration.DEV_EXPRESS_JS_URL = "https://bex-js.finartz.com/v1/javascripts/bex.js";
    BexApiConfiguration.SANDBOX_EXPRESS_JS_URL = "https://test-js.bkmexpress.com.tr/v1/javascripts/bex.js";
    BexApiConfiguration.PREPROD_EXPRESS_JS_URL = "https://preprod-js.bkmexpress.com.tr/v1/javascripts/bex.js";
    BexApiConfiguration.PRODUCTION_EXPRESS_JS_URL = "https://js.bkmexpress.com.tr/v1/javascripts/bex.js";
    return BexApiConfiguration;
}());
exports.BexApiConfiguration = BexApiConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV4QXBpQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvYmV4QXBpQ29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLGtDQUFxQztBQUNyQyw0Q0FBMkQ7QUFFM0Q7SUFnQkksNkJBQW1CLFdBQW1CO1FBQ2xDLElBQUksbUJBQVcsQ0FBQyxLQUFLLEtBQUssV0FBVyxFQUFFO1lBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUMsU0FBUyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUMsb0JBQW9CLENBQUM7U0FDMUQ7YUFDSSxJQUFJLG1CQUFXLENBQUMsR0FBRyxLQUFLLFdBQVcsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDO1NBQ3hEO2FBQ0ksSUFBSSxtQkFBVyxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7WUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQztTQUM1RDthQUNJLElBQUksbUJBQVcsQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUMsV0FBVyxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUMsc0JBQXNCLENBQUM7U0FDNUQ7YUFDSSxJQUFJLG1CQUFXLENBQUMsVUFBVSxLQUFLLFdBQVcsRUFBRTtZQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLHlCQUF5QixDQUFDO1NBQy9EO2FBQ0k7WUFDRCxNQUFNLElBQUkseUNBQTRCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztTQUNoRjtJQUNMLENBQUM7SUFFRCxzQkFBSSx3Q0FBTzthQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFZLEdBQVc7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx1Q0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFXLEdBQVc7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDdEIsQ0FBQzs7O09BSkE7SUFuRGEsNkJBQVMsR0FBRyw0QkFBNEIsQ0FBQztJQUN6QywyQkFBTyxHQUFHLGlDQUFpQyxDQUFDO0lBQzVDLCtCQUFXLEdBQUcsd0NBQXdDLENBQUM7SUFDdkQsK0JBQVcsR0FBRywyQ0FBMkMsQ0FBQztJQUMxRCxrQ0FBYyxHQUFHLG1DQUFtQyxDQUFDO0lBRXJELHdDQUFvQixHQUFHLDBDQUEwQyxDQUFDO0lBQ2xFLHNDQUFrQixHQUFHLGtEQUFrRCxDQUFDO0lBQ3hFLDBDQUFzQixHQUFHLHlEQUF5RCxDQUFDO0lBQ25GLDBDQUFzQixHQUFHLDREQUE0RCxDQUFDO0lBQ3RGLDZDQUF5QixHQUFHLG9EQUFvRCxDQUFDO0lBOENuRywwQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vZW51bXNcIjtcbmltcG9ydCB7QmV4QXBpQ29uZmlndXJhdGlvbkV4Y2VwdGlvbn0gZnJvbSBcIi4uL2V4Y2VwdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIEJleEFwaUNvbmZpZ3VyYXRpb24ge1xuICAgIHB1YmxpYyBzdGF0aWMgTE9DQUxfVVJMID0gXCJodHRwOi8vYXBpLmJleC5maW5hcnR6L3YxL1wiO1xuICAgIHB1YmxpYyBzdGF0aWMgREVWX1VSTCA9IFwiaHR0cHM6Ly9iZXgtYXBpLmZpbmFydHouY29tL3YxL1wiO1xuICAgIHB1YmxpYyBzdGF0aWMgU0FOREJPWF9VUkwgPSBcImh0dHBzOi8vdGVzdC1hcGkuYmttZXhwcmVzcy5jb20udHIvdjEvXCI7XG4gICAgcHVibGljIHN0YXRpYyBQUkVQUk9EX1VSTCA9IFwiaHR0cHM6Ly9wcmVwcm9kLWFwaS5ia21leHByZXNzLmNvbS50ci92MS9cIjtcbiAgICBwdWJsaWMgc3RhdGljIFBST0RVQ1RJT05fVVJMID0gXCJodHRwczovL2FwaS5ia21leHByZXNzLmNvbS50ci92MS9cIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgTE9DQUxfRVhQUkVTU19KU19VUkwgPSBcImh0dHA6Ly9qcy5iZXguZmluYXJ0ei9qYXZhc2NyaXB0cy9iZXguanNcIjtcbiAgICBwdWJsaWMgc3RhdGljIERFVl9FWFBSRVNTX0pTX1VSTCA9IFwiaHR0cHM6Ly9iZXgtanMuZmluYXJ0ei5jb20vdjEvamF2YXNjcmlwdHMvYmV4LmpzXCI7XG4gICAgcHVibGljIHN0YXRpYyBTQU5EQk9YX0VYUFJFU1NfSlNfVVJMID0gXCJodHRwczovL3Rlc3QtanMuYmttZXhwcmVzcy5jb20udHIvdjEvamF2YXNjcmlwdHMvYmV4LmpzXCI7XG4gICAgcHVibGljIHN0YXRpYyBQUkVQUk9EX0VYUFJFU1NfSlNfVVJMID0gXCJodHRwczovL3ByZXByb2QtanMuYmttZXhwcmVzcy5jb20udHIvdjEvamF2YXNjcmlwdHMvYmV4LmpzXCI7XG4gICAgcHVibGljIHN0YXRpYyBQUk9EVUNUSU9OX0VYUFJFU1NfSlNfVVJMID0gXCJodHRwczovL2pzLmJrbWV4cHJlc3MuY29tLnRyL3YxL2phdmFzY3JpcHRzL2JleC5qc1wiO1xuXG4gICAgcHJpdmF0ZSBiYXNlVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBiYXNlSnM6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChFbnZpcm9ubWVudC5MT0NBTCA9PT0gZW52aXJvbm1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCA9IEJleEFwaUNvbmZpZ3VyYXRpb24uTE9DQUxfVVJMO1xuICAgICAgICAgICAgdGhpcy5iYXNlSnMgPSBCZXhBcGlDb25maWd1cmF0aW9uLkxPQ0FMX0VYUFJFU1NfSlNfVVJMO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEVudmlyb25tZW50LkRFViA9PT0gZW52aXJvbm1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCA9IEJleEFwaUNvbmZpZ3VyYXRpb24uREVWX1VSTDtcbiAgICAgICAgICAgIHRoaXMuYmFzZUpzID0gQmV4QXBpQ29uZmlndXJhdGlvbi5ERVZfRVhQUkVTU19KU19VUkw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoRW52aXJvbm1lbnQuU0FOREJPWCA9PT0gZW52aXJvbm1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCA9IEJleEFwaUNvbmZpZ3VyYXRpb24uU0FOREJPWF9VUkw7XG4gICAgICAgICAgICB0aGlzLmJhc2VKcyA9IEJleEFwaUNvbmZpZ3VyYXRpb24uU0FOREJPWF9FWFBSRVNTX0pTX1VSTDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChFbnZpcm9ubWVudC5QUkVQUk9EID09PSBlbnZpcm9ubWVudCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gQmV4QXBpQ29uZmlndXJhdGlvbi5QUkVQUk9EX1VSTDtcbiAgICAgICAgICAgIHRoaXMuYmFzZUpzID0gQmV4QXBpQ29uZmlndXJhdGlvbi5QUkVQUk9EX0VYUFJFU1NfSlNfVVJMO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEVudmlyb25tZW50LlBST0RVQ1RJT04gPT09IGVudmlyb25tZW50KSB7XG4gICAgICAgICAgICB0aGlzLmJhc2VVcmwgPSBCZXhBcGlDb25maWd1cmF0aW9uLlBST0RVQ1RJT05fVVJMO1xuICAgICAgICAgICAgdGhpcy5iYXNlSnMgPSBCZXhBcGlDb25maWd1cmF0aW9uLlBST0RVQ1RJT05fRVhQUkVTU19KU19VUkw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmV4QXBpQ29uZmlndXJhdGlvbkV4Y2VwdGlvbihcIllvdSBzaG91bGQgc2V0IGEgdmFsaWQgZW52aXJvbm1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgQmFzZVVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsO1xuICAgIH1cblxuICAgIHNldCBCYXNlVXJsKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IHVybDtcbiAgICB9XG5cbiAgICBnZXQgQmFzZUpzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VKcztcbiAgICB9XG5cbiAgICBzZXQgQmFzZUpzKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYmFzZUpzID0gdXJsO1xuICAgIH1cbn1cbiJdfQ==