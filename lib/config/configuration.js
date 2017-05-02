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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLDRDQUFxRDtBQUNyRCw2REFBMEQ7QUFFMUQ7SUFNSSx1QkFBbUIsV0FBbUIsRUFBRSxVQUFrQixFQUFFLGtCQUEwQjtRQUNsRixFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksbUNBQXNCLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxJQUFJLG1DQUFzQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDOUUsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sSUFBSSxtQ0FBc0IsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHNCQUFJLHNDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBZ0IsV0FBbUI7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbkMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxQ0FBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWUsVUFBa0I7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw2Q0FBa0I7YUFBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ25DLENBQUM7YUFFRCxVQUF1QixrQkFBMEI7WUFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQ2pELENBQUM7OztPQUpBO0lBTUQsc0JBQUksOENBQW1CO2FBQXZCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwQyxDQUFDO2FBRUQsVUFBd0IsbUJBQXdDO1lBQzVELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUNuRCxDQUFDOzs7T0FKQTtJQU1MLG9CQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQXZEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5pbXBvcnQge0NvbmZpZ3VyYXRpb25FeGNlcHRpb259IGZyb20gXCIuLi9leGNlcHRpb25zXCI7XG5pbXBvcnQge0JleEFwaUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2JleEFwaUNvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb24ge1xuICAgIHByaXZhdGUgZW52aXJvbm1lbnQ6IHN0cmluZztcbiAgICBwcml2YXRlIG1lcmNoYW50SWQ6IHN0cmluZztcbiAgICBwcml2YXRlIG1lcmNoYW50UHJpdmF0ZUtleTogc3RyaW5nO1xuICAgIHByaXZhdGUgYmV4QXBpQ29uZmlndXJhdGlvbjogQmV4QXBpQ29uZmlndXJhdGlvbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogc3RyaW5nLCBtZXJjaGFudElkOiBzdHJpbmcsIG1lcmNoYW50UHJpdmF0ZUtleTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghZW52aXJvbm1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb25maWd1cmF0aW9uRXhjZXB0aW9uKFwiRW52aXJvbm1lbnQgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lcmNoYW50SWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb25maWd1cmF0aW9uRXhjZXB0aW9uKFwiTWVyY2hhbnQgaWQgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lcmNoYW50UHJpdmF0ZUtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ3VyYXRpb25FeGNlcHRpb24oXCJNZXJjaGFudCBQcml2YXRlIEtleSBjYW4gbm90IGJlIE5VTEwgb3IgRW1wdHkuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgICAgICB0aGlzLm1lcmNoYW50SWQgPSBtZXJjaGFudElkO1xuICAgICAgICB0aGlzLm1lcmNoYW50UHJpdmF0ZUtleSA9IG1lcmNoYW50UHJpdmF0ZUtleTtcbiAgICAgICAgdGhpcy5iZXhBcGlDb25maWd1cmF0aW9uID0gbmV3IEJleEFwaUNvbmZpZ3VyYXRpb24oZW52aXJvbm1lbnQpO1xuICAgIH1cblxuICAgIGdldCBFbnZpcm9ubWVudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnZpcm9ubWVudDtcbiAgICB9XG5cbiAgICBzZXQgRW52aXJvbm1lbnQoZW52aXJvbm1lbnQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmVudmlyb25tZW50ID0gZW52aXJvbm1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IE1lcmNoYW50SWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVyY2hhbnRJZDtcbiAgICB9XG5cbiAgICBzZXQgTWVyY2hhbnRJZChtZXJjaGFudElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tZXJjaGFudElkID0gbWVyY2hhbnRJZDtcbiAgICB9XG5cbiAgICBnZXQgTWVyY2hhbnRQcml2YXRlS2V5KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lcmNoYW50UHJpdmF0ZUtleTtcbiAgICB9XG5cbiAgICBzZXQgTWVyY2hhbnRQcml2YXRlS2V5KG1lcmNoYW50UHJpdmF0ZUtleTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubWVyY2hhbnRQcml2YXRlS2V5ID0gbWVyY2hhbnRQcml2YXRlS2V5O1xuICAgIH1cblxuICAgIGdldCBCZXhBcGlDb25maWd1cmF0aW9uKCk6IEJleEFwaUNvbmZpZ3VyYXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5iZXhBcGlDb25maWd1cmF0aW9uO1xuICAgIH1cblxuICAgIHNldCBCZXhBcGlDb25maWd1cmF0aW9uKGJleEFwaUNvbmZpZ3VyYXRpb246IEJleEFwaUNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5iZXhBcGlDb25maWd1cmF0aW9uID0gYmV4QXBpQ29uZmlndXJhdGlvbjtcbiAgICB9XG5cbn1cbiJdfQ==