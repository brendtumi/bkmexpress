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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVFBLDRDQUFxRDtBQUNyRCw2REFBMEQ7QUFFMUQ7SUFNSSx1QkFBbUIsV0FBd0IsRUFBRSxVQUFrQixFQUFFLGtCQUEwQjtRQUN2RixFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksbUNBQXNCLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxJQUFJLG1DQUFzQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDOUUsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sSUFBSSxtQ0FBc0IsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQ3ZGLENBQUM7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHNCQUFJLHNDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBZ0IsV0FBd0I7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbkMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxQ0FBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWUsVUFBa0I7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw2Q0FBa0I7YUFBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ25DLENBQUM7YUFFRCxVQUF1QixrQkFBMEI7WUFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQ2pELENBQUM7OztPQUpBO0lBTUQsc0JBQUksOENBQW1CO2FBQXZCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwQyxDQUFDO2FBRUQsVUFBd0IsbUJBQXdDO1lBQzVELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUNuRCxDQUFDOzs7T0FKQTtJQU1MLG9CQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQXZEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5pbXBvcnQge0Vudmlyb25tZW50fSBmcm9tIFwiLi4vZW51bXNcIjtcbmltcG9ydCB7Q29uZmlndXJhdGlvbkV4Y2VwdGlvbn0gZnJvbSBcIi4uL2V4Y2VwdGlvbnNcIjtcbmltcG9ydCB7QmV4QXBpQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vYmV4QXBpQ29uZmlndXJhdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gICAgcHJpdmF0ZSBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQ7XG4gICAgcHJpdmF0ZSBtZXJjaGFudElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBtZXJjaGFudFByaXZhdGVLZXk6IHN0cmluZztcbiAgICBwcml2YXRlIGJleEFwaUNvbmZpZ3VyYXRpb246IEJleEFwaUNvbmZpZ3VyYXRpb247XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50LCBtZXJjaGFudElkOiBzdHJpbmcsIG1lcmNoYW50UHJpdmF0ZUtleTogc3RyaW5nKSB7XG4gICAgICAgIGlmICghZW52aXJvbm1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb25maWd1cmF0aW9uRXhjZXB0aW9uKFwiRW52aXJvbm1lbnQgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lcmNoYW50SWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb25maWd1cmF0aW9uRXhjZXB0aW9uKFwiTWVyY2hhbnQgaWQgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lcmNoYW50UHJpdmF0ZUtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ3VyYXRpb25FeGNlcHRpb24oXCJNZXJjaGFudCBQcml2YXRlIEtleSBjYW4gbm90IGJlIE5VTEwgb3IgRW1wdHkuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgICAgICB0aGlzLm1lcmNoYW50SWQgPSBtZXJjaGFudElkO1xuICAgICAgICB0aGlzLm1lcmNoYW50UHJpdmF0ZUtleSA9IG1lcmNoYW50UHJpdmF0ZUtleTtcbiAgICAgICAgdGhpcy5iZXhBcGlDb25maWd1cmF0aW9uID0gbmV3IEJleEFwaUNvbmZpZ3VyYXRpb24oZW52aXJvbm1lbnQpO1xuICAgIH1cblxuICAgIGdldCBFbnZpcm9ubWVudCgpOiBFbnZpcm9ubWVudCB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudmlyb25tZW50O1xuICAgIH1cblxuICAgIHNldCBFbnZpcm9ubWVudChlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpIHtcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIH1cblxuICAgIGdldCBNZXJjaGFudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lcmNoYW50SWQ7XG4gICAgfVxuXG4gICAgc2V0IE1lcmNoYW50SWQobWVyY2hhbnRJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubWVyY2hhbnRJZCA9IG1lcmNoYW50SWQ7XG4gICAgfVxuXG4gICAgZ2V0IE1lcmNoYW50UHJpdmF0ZUtleSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXJjaGFudFByaXZhdGVLZXk7XG4gICAgfVxuXG4gICAgc2V0IE1lcmNoYW50UHJpdmF0ZUtleShtZXJjaGFudFByaXZhdGVLZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1lcmNoYW50UHJpdmF0ZUtleSA9IG1lcmNoYW50UHJpdmF0ZUtleTtcbiAgICB9XG5cbiAgICBnZXQgQmV4QXBpQ29uZmlndXJhdGlvbigpOiBCZXhBcGlDb25maWd1cmF0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmV4QXBpQ29uZmlndXJhdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgQmV4QXBpQ29uZmlndXJhdGlvbihiZXhBcGlDb25maWd1cmF0aW9uOiBCZXhBcGlDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuYmV4QXBpQ29uZmlndXJhdGlvbiA9IGJleEFwaUNvbmZpZ3VyYXRpb247XG4gICAgfVxuXG59Il19