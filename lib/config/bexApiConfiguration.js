/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 */
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
    return BexApiConfiguration;
}());
BexApiConfiguration.LOCAL_URL = "http://api.bex.dev/v1/";
BexApiConfiguration.DEV_URL = "https://bex-api.finartz.com/v1/";
BexApiConfiguration.SANDBOX_URL = "https://test-api.bkmexpress.com.tr/v1/";
BexApiConfiguration.PRODUCTION_URL = "https://api.bkmexpress.com.tr/v1/";
BexApiConfiguration.LOCAL_EXPRESS_JS_URL = "http://js.bex.dev/javascripts/bex.js";
BexApiConfiguration.DEV_EXPRESS_JS_URL = "https://bex-js.finartz.com/v1/javascripts/bex.js";
BexApiConfiguration.SANDBOX_EXPRESS_JS_URL = "https://test-js.bkmexpress.com.tr/v1/javascripts/bex.js";
BexApiConfiguration.PRODUCTION_EXPRESS_JS_URL = "https://js.bkmexpress.com.tr/v1/javascripts/bex.js";
exports.BexApiConfiguration = BexApiConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV4QXBpQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvYmV4QXBpQ29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHOzs7QUFFSCxrQ0FBcUM7QUFDckMsNENBQTJEO0FBRTNEO0lBY0ksNkJBQW1CLFdBQVc7UUFDMUIsRUFBRSxDQUFDLENBQUMsbUJBQVcsQ0FBQyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztZQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDO1FBQzNELENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsbUJBQVcsQ0FBQyxHQUFHLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDO1FBQ3pELENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsbUJBQVcsQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLFdBQVcsQ0FBQztZQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDO1FBQzdELENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsbUJBQVcsQ0FBQyxVQUFVLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLHlCQUF5QixDQUFDO1FBQ2hFLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sSUFBSSx5Q0FBNEIsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUksd0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFZLEdBQVc7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx1Q0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVcsR0FBVztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FKQTtJQUtMLDBCQUFDO0FBQUQsQ0FBQyxBQW5ERDtBQUNrQiw2QkFBUyxHQUFHLHdCQUF3QixDQUFDO0FBQ3JDLDJCQUFPLEdBQUcsaUNBQWlDLENBQUM7QUFDNUMsK0JBQVcsR0FBRyx3Q0FBd0MsQ0FBQztBQUN2RCxrQ0FBYyxHQUFHLG1DQUFtQyxDQUFDO0FBRXJELHdDQUFvQixHQUFHLHNDQUFzQyxDQUFDO0FBQzlELHNDQUFrQixHQUFHLGtEQUFrRCxDQUFDO0FBQ3hFLDBDQUFzQixHQUFHLHlEQUF5RCxDQUFDO0FBQ25GLDZDQUF5QixHQUFHLG9EQUFvRCxDQUFDO0FBVHRGLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vZW51bXNcIjtcbmltcG9ydCB7QmV4QXBpQ29uZmlndXJhdGlvbkV4Y2VwdGlvbn0gZnJvbSBcIi4uL2V4Y2VwdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIEJleEFwaUNvbmZpZ3VyYXRpb24ge1xuICAgIHB1YmxpYyBzdGF0aWMgTE9DQUxfVVJMID0gXCJodHRwOi8vYXBpLmJleC5kZXYvdjEvXCI7XG4gICAgcHVibGljIHN0YXRpYyBERVZfVVJMID0gXCJodHRwczovL2JleC1hcGkuZmluYXJ0ei5jb20vdjEvXCI7XG4gICAgcHVibGljIHN0YXRpYyBTQU5EQk9YX1VSTCA9IFwiaHR0cHM6Ly90ZXN0LWFwaS5ia21leHByZXNzLmNvbS50ci92MS9cIjtcbiAgICBwdWJsaWMgc3RhdGljIFBST0RVQ1RJT05fVVJMID0gXCJodHRwczovL2FwaS5ia21leHByZXNzLmNvbS50ci92MS9cIjtcblxuICAgIHB1YmxpYyBzdGF0aWMgTE9DQUxfRVhQUkVTU19KU19VUkwgPSBcImh0dHA6Ly9qcy5iZXguZGV2L2phdmFzY3JpcHRzL2JleC5qc1wiO1xuICAgIHB1YmxpYyBzdGF0aWMgREVWX0VYUFJFU1NfSlNfVVJMID0gXCJodHRwczovL2JleC1qcy5maW5hcnR6LmNvbS92MS9qYXZhc2NyaXB0cy9iZXguanNcIjtcbiAgICBwdWJsaWMgc3RhdGljIFNBTkRCT1hfRVhQUkVTU19KU19VUkwgPSBcImh0dHBzOi8vdGVzdC1qcy5ia21leHByZXNzLmNvbS50ci92MS9qYXZhc2NyaXB0cy9iZXguanNcIjtcbiAgICBwdWJsaWMgc3RhdGljIFBST0RVQ1RJT05fRVhQUkVTU19KU19VUkwgPSBcImh0dHBzOi8vanMuYmttZXhwcmVzcy5jb20udHIvdjEvamF2YXNjcmlwdHMvYmV4LmpzXCI7XG5cbiAgICBwcml2YXRlIGJhc2VVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIGJhc2VKczogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVudmlyb25tZW50KSB7XG4gICAgICAgIGlmIChFbnZpcm9ubWVudC5MT0NBTCA9PT0gZW52aXJvbm1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCA9IEJleEFwaUNvbmZpZ3VyYXRpb24uTE9DQUxfVVJMO1xuICAgICAgICAgICAgdGhpcy5iYXNlSnMgPSBCZXhBcGlDb25maWd1cmF0aW9uLkxPQ0FMX0VYUFJFU1NfSlNfVVJMO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEVudmlyb25tZW50LkRFViA9PT0gZW52aXJvbm1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCA9IEJleEFwaUNvbmZpZ3VyYXRpb24uREVWX1VSTDtcbiAgICAgICAgICAgIHRoaXMuYmFzZUpzID0gQmV4QXBpQ29uZmlndXJhdGlvbi5ERVZfRVhQUkVTU19KU19VUkw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoRW52aXJvbm1lbnQuU0FOREJPWCA9PT0gZW52aXJvbm1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCA9IEJleEFwaUNvbmZpZ3VyYXRpb24uU0FOREJPWF9VUkw7XG4gICAgICAgICAgICB0aGlzLmJhc2VKcyA9IEJleEFwaUNvbmZpZ3VyYXRpb24uU0FOREJPWF9FWFBSRVNTX0pTX1VSTDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChFbnZpcm9ubWVudC5QUk9EVUNUSU9OID09PSBlbnZpcm9ubWVudCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gQmV4QXBpQ29uZmlndXJhdGlvbi5QUk9EVUNUSU9OX1VSTDtcbiAgICAgICAgICAgIHRoaXMuYmFzZUpzID0gQmV4QXBpQ29uZmlndXJhdGlvbi5QUk9EVUNUSU9OX0VYUFJFU1NfSlNfVVJMO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJleEFwaUNvbmZpZ3VyYXRpb25FeGNlcHRpb24oXCJZb3Ugc2hvdWxkIHNldCBhIHZhbGlkIGVudmlyb25tZW50XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybDtcbiAgICB9XG5cbiAgICBzZXQgQmFzZVVybCh1cmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmJhc2VVcmwgPSB1cmw7XG4gICAgfVxuXG4gICAgZ2V0IEJhc2VKcygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlSnM7XG4gICAgfVxuXG4gICAgc2V0IEJhc2VKcyh1cmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmJhc2VKcyA9IHVybDtcbiAgICB9XG59XG4iXX0=