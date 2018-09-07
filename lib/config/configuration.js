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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLDRDQUFxRDtBQUNyRCw2REFBMEQ7QUFFMUQ7SUFNSSx1QkFBbUIsV0FBbUIsRUFBRSxVQUFrQixFQUFFLGtCQUEwQjtRQUNsRixJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsTUFBTSxJQUFJLG1DQUFzQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDN0U7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2IsTUFBTSxJQUFJLG1DQUFzQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDN0U7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDckIsTUFBTSxJQUFJLG1DQUFzQixDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDdEY7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELHNCQUFJLHNDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWdCLFdBQW1CO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBTUQsc0JBQUkscUNBQVU7YUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBZSxVQUFrQjtZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDZDQUFrQjthQUF0QjtZQUNJLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ25DLENBQUM7YUFFRCxVQUF1QixrQkFBMEI7WUFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQ2pELENBQUM7OztPQUpBO0lBTUQsc0JBQUksOENBQW1CO2FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDcEMsQ0FBQzthQUVELFVBQXdCLG1CQUF3QztZQUM1RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDbkQsQ0FBQzs7O09BSkE7SUFNTCxvQkFBQztBQUFELENBQUMsQUF2REQsSUF1REM7QUF2RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuaW1wb3J0IHtDb25maWd1cmF0aW9uRXhjZXB0aW9ufSBmcm9tIFwiLi4vZXhjZXB0aW9uc1wiO1xuaW1wb3J0IHtCZXhBcGlDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9iZXhBcGlDb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcbiAgICBwcml2YXRlIGVudmlyb25tZW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBtZXJjaGFudElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBtZXJjaGFudFByaXZhdGVLZXk6IHN0cmluZztcbiAgICBwcml2YXRlIGJleEFwaUNvbmZpZ3VyYXRpb246IEJleEFwaUNvbmZpZ3VyYXRpb247XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IHN0cmluZywgbWVyY2hhbnRJZDogc3RyaW5nLCBtZXJjaGFudFByaXZhdGVLZXk6IHN0cmluZykge1xuICAgICAgICBpZiAoIWVudmlyb25tZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlndXJhdGlvbkV4Y2VwdGlvbihcIkVudmlyb25tZW50IGNhbiBub3QgYmUgTlVMTCBvciBFbXB0eS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtZXJjaGFudElkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlndXJhdGlvbkV4Y2VwdGlvbihcIk1lcmNoYW50IGlkIGNhbiBub3QgYmUgTlVMTCBvciBFbXB0eS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtZXJjaGFudFByaXZhdGVLZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb25maWd1cmF0aW9uRXhjZXB0aW9uKFwiTWVyY2hhbnQgUHJpdmF0ZSBLZXkgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICAgICAgdGhpcy5tZXJjaGFudElkID0gbWVyY2hhbnRJZDtcbiAgICAgICAgdGhpcy5tZXJjaGFudFByaXZhdGVLZXkgPSBtZXJjaGFudFByaXZhdGVLZXk7XG4gICAgICAgIHRoaXMuYmV4QXBpQ29uZmlndXJhdGlvbiA9IG5ldyBCZXhBcGlDb25maWd1cmF0aW9uKGVudmlyb25tZW50KTtcbiAgICB9XG5cbiAgICBnZXQgRW52aXJvbm1lbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW52aXJvbm1lbnQ7XG4gICAgfVxuXG4gICAgc2V0IEVudmlyb25tZW50KGVudmlyb25tZW50OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIH1cblxuICAgIGdldCBNZXJjaGFudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lcmNoYW50SWQ7XG4gICAgfVxuXG4gICAgc2V0IE1lcmNoYW50SWQobWVyY2hhbnRJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubWVyY2hhbnRJZCA9IG1lcmNoYW50SWQ7XG4gICAgfVxuXG4gICAgZ2V0IE1lcmNoYW50UHJpdmF0ZUtleSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXJjaGFudFByaXZhdGVLZXk7XG4gICAgfVxuXG4gICAgc2V0IE1lcmNoYW50UHJpdmF0ZUtleShtZXJjaGFudFByaXZhdGVLZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1lcmNoYW50UHJpdmF0ZUtleSA9IG1lcmNoYW50UHJpdmF0ZUtleTtcbiAgICB9XG5cbiAgICBnZXQgQmV4QXBpQ29uZmlndXJhdGlvbigpOiBCZXhBcGlDb25maWd1cmF0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmV4QXBpQ29uZmlndXJhdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgQmV4QXBpQ29uZmlndXJhdGlvbihiZXhBcGlDb25maWd1cmF0aW9uOiBCZXhBcGlDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuYmV4QXBpQ29uZmlndXJhdGlvbiA9IGJleEFwaUNvbmZpZ3VyYXRpb247XG4gICAgfVxuXG59XG4iXX0=