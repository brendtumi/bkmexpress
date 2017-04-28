"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../exceptions");
var bexApiConfiguration_1 = require("./bexApiConfiguration");
var Configuration = (function () {
    function Configuration(environment, merchantId, merchantPrivateKey) {
        if (!environment) {
            throw new exceptions_1.ConfigurationException("Environment can not be NULL or Empty.");
        }
        if (!merchantId) {
            throw new exceptions_1.ConfigurationException("Merchant id can not be NULL or Empty.");
        }
        if (!merchantPrivateKey) {
            throw new exceptions_1.ConfigurationException("Merchant Private Key can not be NULL or Empty.");
        }
        this.environment = environment;
        this.merchantId = merchantId;
        this.merchantPrivateKey = merchantPrivateKey;
        this.bexApiConfiguration = new bexApiConfiguration_1.BexApiConfiguration(environment);
    }
    Object.defineProperty(Configuration.prototype, "Environment", {
        get: function () {
            return this.environment;
        },
        set: function (environment) {
            this.environment = environment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "MerchantId", {
        get: function () {
            return this.merchantId;
        },
        set: function (merchantId) {
            this.merchantId = merchantId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "MerchantPrivateKey", {
        get: function () {
            return this.merchantPrivateKey;
        },
        set: function (merchantPrivateKey) {
            this.merchantPrivateKey = merchantPrivateKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Configuration.prototype, "BexApiConfiguration", {
        get: function () {
            return this.bexApiConfiguration;
        },
        set: function (bexApiConfiguration) {
            this.bexApiConfiguration = bexApiConfiguration;
        },
        enumerable: true,
        configurable: true
    });
    return Configuration;
}());
exports.Configuration = Configuration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLDRDQUFxRDtBQUNyRCw2REFBMEQ7QUFFMUQ7SUFNSSx1QkFBbUIsV0FBbUIsRUFBRSxVQUFrQixFQUFFLGtCQUEwQjtRQUNsRixFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksbUNBQXNCLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxJQUFJLG1DQUFzQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDOUUsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sSUFBSSxtQ0FBc0IsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHNCQUFJLHNDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBZ0IsV0FBbUI7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbkMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxQ0FBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWUsVUFBa0I7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw2Q0FBa0I7YUFBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ25DLENBQUM7YUFFRCxVQUF1QixrQkFBMEI7WUFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQ2pELENBQUM7OztPQUpBO0lBTUQsc0JBQUksOENBQW1CO2FBQXZCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwQyxDQUFDO2FBRUQsVUFBd0IsbUJBQXdDO1lBQzVELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUNuRCxDQUFDOzs7T0FKQTtJQU1MLG9CQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQXZEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vZW51bXNcIjtcbmltcG9ydCB7Q29uZmlndXJhdGlvbkV4Y2VwdGlvbn0gZnJvbSBcIi4uL2V4Y2VwdGlvbnNcIjtcbmltcG9ydCB7QmV4QXBpQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vYmV4QXBpQ29uZmlndXJhdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gICAgcHJpdmF0ZSBlbnZpcm9ubWVudDogc3RyaW5nO1xuICAgIHByaXZhdGUgbWVyY2hhbnRJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgbWVyY2hhbnRQcml2YXRlS2V5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBiZXhBcGlDb25maWd1cmF0aW9uOiBCZXhBcGlDb25maWd1cmF0aW9uO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBzdHJpbmcsIG1lcmNoYW50SWQ6IHN0cmluZywgbWVyY2hhbnRQcml2YXRlS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFlbnZpcm9ubWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ3VyYXRpb25FeGNlcHRpb24oXCJFbnZpcm9ubWVudCBjYW4gbm90IGJlIE5VTEwgb3IgRW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVyY2hhbnRJZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ3VyYXRpb25FeGNlcHRpb24oXCJNZXJjaGFudCBpZCBjYW4gbm90IGJlIE5VTEwgb3IgRW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVyY2hhbnRQcml2YXRlS2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlndXJhdGlvbkV4Y2VwdGlvbihcIk1lcmNoYW50IFByaXZhdGUgS2V5IGNhbiBub3QgYmUgTlVMTCBvciBFbXB0eS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgICAgIHRoaXMubWVyY2hhbnRJZCA9IG1lcmNoYW50SWQ7XG4gICAgICAgIHRoaXMubWVyY2hhbnRQcml2YXRlS2V5ID0gbWVyY2hhbnRQcml2YXRlS2V5O1xuICAgICAgICB0aGlzLmJleEFwaUNvbmZpZ3VyYXRpb24gPSBuZXcgQmV4QXBpQ29uZmlndXJhdGlvbihlbnZpcm9ubWVudCk7XG4gICAgfVxuXG4gICAgZ2V0IEVudmlyb25tZW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudmlyb25tZW50O1xuICAgIH1cblxuICAgIHNldCBFbnZpcm9ubWVudChlbnZpcm9ubWVudDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICB9XG5cbiAgICBnZXQgTWVyY2hhbnRJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXJjaGFudElkO1xuICAgIH1cblxuICAgIHNldCBNZXJjaGFudElkKG1lcmNoYW50SWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1lcmNoYW50SWQgPSBtZXJjaGFudElkO1xuICAgIH1cblxuICAgIGdldCBNZXJjaGFudFByaXZhdGVLZXkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVyY2hhbnRQcml2YXRlS2V5O1xuICAgIH1cblxuICAgIHNldCBNZXJjaGFudFByaXZhdGVLZXkobWVyY2hhbnRQcml2YXRlS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tZXJjaGFudFByaXZhdGVLZXkgPSBtZXJjaGFudFByaXZhdGVLZXk7XG4gICAgfVxuXG4gICAgZ2V0IEJleEFwaUNvbmZpZ3VyYXRpb24oKTogQmV4QXBpQ29uZmlndXJhdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJleEFwaUNvbmZpZ3VyYXRpb247XG4gICAgfVxuXG4gICAgc2V0IEJleEFwaUNvbmZpZ3VyYXRpb24oYmV4QXBpQ29uZmlndXJhdGlvbjogQmV4QXBpQ29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLmJleEFwaUNvbmZpZ3VyYXRpb24gPSBiZXhBcGlDb25maWd1cmF0aW9uO1xuICAgIH1cblxufSJdfQ==