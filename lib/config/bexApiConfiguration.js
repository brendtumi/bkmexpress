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
    BexApiConfiguration.LOCAL_URL = "http://api.bex.dev/v1/";
    BexApiConfiguration.DEV_URL = "https://bex-api.finartz.com/v1/";
    BexApiConfiguration.SANDBOX_URL = "https://test-api.bkmexpress.com.tr/v1/";
    BexApiConfiguration.PRODUCTION_URL = "https://api.bkmexpress.com.tr/v1/";
    BexApiConfiguration.LOCAL_EXPRESS_JS_URL = "http://js.bex.dev/javascripts/bex.js";
    BexApiConfiguration.DEV_EXPRESS_JS_URL = "https://bex-js.finartz.com/v1/javascripts/bex.js";
    BexApiConfiguration.SANDBOX_EXPRESS_JS_URL = "https://test-js.bkmexpress.com.tr/v1/javascripts/bex.js";
    BexApiConfiguration.PRODUCTION_EXPRESS_JS_URL = "https://js.bkmexpress.com.tr/v1/javascripts/bex.js";
    return BexApiConfiguration;
}());
exports.BexApiConfiguration = BexApiConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV4QXBpQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvYmV4QXBpQ29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLGtDQUFxQztBQUNyQyw0Q0FBMkQ7QUFFM0Q7SUFjSSw2QkFBbUIsV0FBbUI7UUFDbEMsRUFBRSxDQUFDLENBQUMsbUJBQVcsQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztZQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDO1FBQzNELENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsbUJBQVcsQ0FBQyxHQUFHLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDO1FBQ3pELENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsbUJBQVcsQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztZQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDO1FBQzdELENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsbUJBQVcsQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLHlCQUF5QixDQUFDO1FBQ2hFLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sSUFBSSx5Q0FBNEIsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUksd0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFZLEdBQVc7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx1Q0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVcsR0FBVztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FKQTtJQTdDYSw2QkFBUyxHQUFHLHdCQUF3QixDQUFDO0lBQ3JDLDJCQUFPLEdBQUcsaUNBQWlDLENBQUM7SUFDNUMsK0JBQVcsR0FBRyx3Q0FBd0MsQ0FBQztJQUN2RCxrQ0FBYyxHQUFHLG1DQUFtQyxDQUFDO0lBRXJELHdDQUFvQixHQUFHLHNDQUFzQyxDQUFDO0lBQzlELHNDQUFrQixHQUFHLGtEQUFrRCxDQUFDO0lBQ3hFLDBDQUFzQixHQUFHLHlEQUF5RCxDQUFDO0lBQ25GLDZDQUF5QixHQUFHLG9EQUFvRCxDQUFDO0lBMENuRywwQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vZW51bXNcIjtcbmltcG9ydCB7QmV4QXBpQ29uZmlndXJhdGlvbkV4Y2VwdGlvbn0gZnJvbSBcIi4uL2V4Y2VwdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIEJleEFwaUNvbmZpZ3VyYXRpb24ge1xuICAgIHB1YmxpYyBzdGF0aWMgTE9DQUxfVVJMID0gXCJodHRwOi8vYXBpLmJleC5kZXYvdjEvXCI7XG4gICAgcHVibGljIHN0YXRpYyBERVZfVVJMID0gXCJodHRwczovL2JleC1hcGkuZmluYXJ0ei5jb20vdjEvXCI7XG4gICAgcHVibGljIHN0YXRpYyBTQU5EQk9YX1VSTCA9IFwiaHR0cHM6Ly90ZXN0LWFwaS5ia21leHByZXNzLmNvbS50ci92MS9cIjtcbiAgICBwdWJsaWMgc3RhdGljIFBST0RVQ1RJT05fVVJMID0gXCJodHRwczovL2FwaS5ia21leHByZXNzLmNvbS50ci92MS9cIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgTE9DQUxfRVhQUkVTU19KU19VUkwgPSBcImh0dHA6Ly9qcy5iZXguZGV2L2phdmFzY3JpcHRzL2JleC5qc1wiO1xuICAgIHB1YmxpYyBzdGF0aWMgREVWX0VYUFJFU1NfSlNfVVJMID0gXCJodHRwczovL2JleC1qcy5maW5hcnR6LmNvbS92MS9qYXZhc2NyaXB0cy9iZXguanNcIjtcbiAgICBwdWJsaWMgc3RhdGljIFNBTkRCT1hfRVhQUkVTU19KU19VUkwgPSBcImh0dHBzOi8vdGVzdC1qcy5ia21leHByZXNzLmNvbS50ci92MS9qYXZhc2NyaXB0cy9iZXguanNcIjtcbiAgICBwdWJsaWMgc3RhdGljIFBST0RVQ1RJT05fRVhQUkVTU19KU19VUkwgPSBcImh0dHBzOi8vanMuYmttZXhwcmVzcy5jb20udHIvdjEvamF2YXNjcmlwdHMvYmV4LmpzXCI7XG5cbiAgICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIGJhc2VKczogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKEVudmlyb25tZW50LkxPQ0FMID09PSBlbnZpcm9ubWVudCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gQmV4QXBpQ29uZmlndXJhdGlvbi5MT0NBTF9VUkw7XG4gICAgICAgICAgICB0aGlzLmJhc2VKcyA9IEJleEFwaUNvbmZpZ3VyYXRpb24uTE9DQUxfRVhQUkVTU19KU19VUkw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoRW52aXJvbm1lbnQuREVWID09PSBlbnZpcm9ubWVudCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gQmV4QXBpQ29uZmlndXJhdGlvbi5ERVZfVVJMO1xuICAgICAgICAgICAgdGhpcy5iYXNlSnMgPSBCZXhBcGlDb25maWd1cmF0aW9uLkRFVl9FWFBSRVNTX0pTX1VSTDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChFbnZpcm9ubWVudC5TQU5EQk9YID09PSBlbnZpcm9ubWVudCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gQmV4QXBpQ29uZmlndXJhdGlvbi5TQU5EQk9YX1VSTDtcbiAgICAgICAgICAgIHRoaXMuYmFzZUpzID0gQmV4QXBpQ29uZmlndXJhdGlvbi5TQU5EQk9YX0VYUFJFU1NfSlNfVVJMO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEVudmlyb25tZW50LlBST0RVQ1RJT04gPT09IGVudmlyb25tZW50KSB7XG4gICAgICAgICAgICB0aGlzLmJhc2VVcmwgPSBCZXhBcGlDb25maWd1cmF0aW9uLlBST0RVQ1RJT05fVVJMO1xuICAgICAgICAgICAgdGhpcy5iYXNlSnMgPSBCZXhBcGlDb25maWd1cmF0aW9uLlBST0RVQ1RJT05fRVhQUkVTU19KU19VUkw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmV4QXBpQ29uZmlndXJhdGlvbkV4Y2VwdGlvbihcIllvdSBzaG91bGQgc2V0IGEgdmFsaWQgZW52aXJvbm1lbnRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgQmFzZVVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsO1xuICAgIH1cblxuICAgIHNldCBCYXNlVXJsKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IHVybDtcbiAgICB9XG5cbiAgICBnZXQgQmFzZUpzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VKcztcbiAgICB9XG5cbiAgICBzZXQgQmFzZUpzKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYmFzZUpzID0gdXJsO1xuICAgIH1cbn1cbiJdfQ==