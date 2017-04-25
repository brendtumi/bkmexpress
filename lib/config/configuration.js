/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../exceptions");
var bexApiConfiguration_1 = require("./bexApiConfiguration");
var Configuration = (function () {
    function Configuration(environment, merchantId, merchantPrivateKey) {
        if (!environment) {
            throw new exceptions_1.ConfigurationException("Enviroment can not be NULL or Empty.");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRzs7O0FBRUgsNENBQXFEO0FBQ3JELDZEQUEwRDtBQUUxRDtJQU1JLHVCQUFtQixXQUFtQixFQUFFLFVBQWtCLEVBQUUsa0JBQTBCO1FBQ2xGLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sSUFBSSxtQ0FBc0IsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQzdFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLElBQUksbUNBQXNCLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxJQUFJLG1DQUFzQixDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFDdkYsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsc0JBQUksc0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFnQixXQUFtQjtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHFDQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBZSxVQUFrQjtZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDZDQUFrQjthQUF0QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDbkMsQ0FBQzthQUVELFVBQXVCLGtCQUEwQjtZQUM3QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDakQsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw4Q0FBbUI7YUFBdkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BDLENBQUM7YUFFRCxVQUF3QixtQkFBd0M7WUFDNUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQ25ELENBQUM7OztPQUpBO0lBTUwsb0JBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDO0FBdkRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmltcG9ydCB7Q29uZmlndXJhdGlvbkV4Y2VwdGlvbn0gZnJvbSBcIi4uL2V4Y2VwdGlvbnNcIjtcbmltcG9ydCB7QmV4QXBpQ29uZmlndXJhdGlvbn0gZnJvbSBcIi4vYmV4QXBpQ29uZmlndXJhdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gICAgcHJpdmF0ZSBlbnZpcm9ubWVudDogc3RyaW5nO1xuICAgIHByaXZhdGUgbWVyY2hhbnRJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgbWVyY2hhbnRQcml2YXRlS2V5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBiZXhBcGlDb25maWd1cmF0aW9uOiBCZXhBcGlDb25maWd1cmF0aW9uO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGVudmlyb25tZW50OiBzdHJpbmcsIG1lcmNoYW50SWQ6IHN0cmluZywgbWVyY2hhbnRQcml2YXRlS2V5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFlbnZpcm9ubWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbmZpZ3VyYXRpb25FeGNlcHRpb24oXCJFbnZpcm9tZW50IGNhbiBub3QgYmUgTlVMTCBvciBFbXB0eS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtZXJjaGFudElkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29uZmlndXJhdGlvbkV4Y2VwdGlvbihcIk1lcmNoYW50IGlkIGNhbiBub3QgYmUgTlVMTCBvciBFbXB0eS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtZXJjaGFudFByaXZhdGVLZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb25maWd1cmF0aW9uRXhjZXB0aW9uKFwiTWVyY2hhbnQgUHJpdmF0ZSBLZXkgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICAgICAgdGhpcy5tZXJjaGFudElkID0gbWVyY2hhbnRJZDtcbiAgICAgICAgdGhpcy5tZXJjaGFudFByaXZhdGVLZXkgPSBtZXJjaGFudFByaXZhdGVLZXk7XG4gICAgICAgIHRoaXMuYmV4QXBpQ29uZmlndXJhdGlvbiA9IG5ldyBCZXhBcGlDb25maWd1cmF0aW9uKGVudmlyb25tZW50KTtcbiAgICB9XG5cbiAgICBnZXQgRW52aXJvbm1lbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW52aXJvbm1lbnQ7XG4gICAgfVxuXG4gICAgc2V0IEVudmlyb25tZW50KGVudmlyb25tZW50OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xuICAgIH1cblxuICAgIGdldCBNZXJjaGFudElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lcmNoYW50SWQ7XG4gICAgfVxuXG4gICAgc2V0IE1lcmNoYW50SWQobWVyY2hhbnRJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubWVyY2hhbnRJZCA9IG1lcmNoYW50SWQ7XG4gICAgfVxuXG4gICAgZ2V0IE1lcmNoYW50UHJpdmF0ZUtleSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXJjaGFudFByaXZhdGVLZXk7XG4gICAgfVxuXG4gICAgc2V0IE1lcmNoYW50UHJpdmF0ZUtleShtZXJjaGFudFByaXZhdGVLZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1lcmNoYW50UHJpdmF0ZUtleSA9IG1lcmNoYW50UHJpdmF0ZUtleTtcbiAgICB9XG5cbiAgICBnZXQgQmV4QXBpQ29uZmlndXJhdGlvbigpOiBCZXhBcGlDb25maWd1cmF0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmV4QXBpQ29uZmlndXJhdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgQmV4QXBpQ29uZmlndXJhdGlvbihiZXhBcGlDb25maWd1cmF0aW9uOiBCZXhBcGlDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuYmV4QXBpQ29uZmlndXJhdGlvbiA9IGJleEFwaUNvbmZpZ3VyYXRpb247XG4gICAgfVxuXG59Il19