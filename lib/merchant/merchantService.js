"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bluebird = require("bluebird");
var exceptions_1 = require("../exceptions");
var moneyUtils_1 = require("../moneyUtils");
var merchantApi_1 = require("./merchantApi");
var merchantLoginRequest_1 = require("./request/merchantLoginRequest");
var ticketRequest_1 = require("./request/ticketRequest");
var security_1 = require("./security");
var MerchantService = (function () {
    function MerchantService(configuration) {
        this.configuration = configuration;
    }
    MerchantService.prototype.login = function () {
        var _this = this;
        var merchantId = this.configuration.MerchantId;
        var sign = security_1.EncryptionUtil.sign(this.configuration.MerchantPrivateKey, merchantId);
        var request = new merchantLoginRequest_1.MerchantLoginRequest(merchantId, sign);
        return new Bluebird(function (resolve, reject) {
            merchantApi_1.MerchantApi.login(_this.configuration.BexApiConfiguration.BaseUrl, request)
                .then(function (response) {
                resolve(response.Token);
            })
                .catch(function (error) {
                reject(new exceptions_1.MerchantServiceException(error));
            });
        });
    };
    MerchantService.prototype.oneTimeTicket = function (connectionToken, amount, installmentUrl, nonceUrl) {
        var _this = this;
        var ticket = new ticketRequest_1.TicketRequest("payment");
        ticket.Amount = moneyUtils_1.MoneyUtils.toTRY(amount);
        if (installmentUrl) {
            ticket.InstallmentUrl = installmentUrl;
        }
        if (nonceUrl) {
            ticket.NonceUrl = nonceUrl;
        }
        return new Bluebird(function (resolve, reject) {
            merchantApi_1.MerchantApi.ticket(_this.configuration.BexApiConfiguration.BaseUrl, connectionToken, ticket)
                .then(function (response) {
                resolve(response.Token);
            })
                .catch(function (error) {
                reject(new exceptions_1.MerchantServiceException(error));
            });
        });
    };
    return MerchantService;
}());
exports.MerchantService = MerchantService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lcmNoYW50L21lcmNoYW50U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLG1DQUFxQztBQUVyQyw0Q0FBdUQ7QUFDdkQsNENBQXlDO0FBQ3pDLDZDQUEwQztBQUMxQyx1RUFBb0U7QUFDcEUseURBQXNEO0FBR3RELHVDQUEwQztBQUcxQztJQUdJLHlCQUFtQixhQUE0QjtRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUFBLGlCQWFDO1FBWkcsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDakQsSUFBTSxJQUFJLEdBQUcseUJBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRixJQUFNLE9BQU8sR0FBRyxJQUFJLDJDQUFvQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNoQyx5QkFBVyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7aUJBQ3JFLElBQUksQ0FBQyxVQUFDLFFBQStCO2dCQUNsQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNULE1BQU0sQ0FBQyxJQUFJLHFDQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx1Q0FBYSxHQUFwQixVQUFxQixlQUFzQixFQUFFLE1BQWMsRUFBRSxjQUF1QixFQUFFLFFBQWlCO1FBQXZHLGlCQWtCQztRQWpCRyxJQUFNLE1BQU0sR0FBRyxJQUFJLDZCQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLE1BQU0sR0FBRyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2hDLHlCQUFXLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUM7aUJBQ3RGLElBQUksQ0FBQyxVQUFDLFFBQXdCO2dCQUMzQixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNULE1BQU0sQ0FBQyxJQUFJLHFDQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyOC4wNC4yMDE3XG4gKi9cblxuaW1wb3J0ICogYXMgQmx1ZWJpcmQgZnJvbSBcImJsdWViaXJkXCI7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHtNZXJjaGFudFNlcnZpY2VFeGNlcHRpb259IGZyb20gXCIuLi9leGNlcHRpb25zXCI7XG5pbXBvcnQge01vbmV5VXRpbHN9IGZyb20gXCIuLi9tb25leVV0aWxzXCI7XG5pbXBvcnQge01lcmNoYW50QXBpfSBmcm9tIFwiLi9tZXJjaGFudEFwaVwiO1xuaW1wb3J0IHtNZXJjaGFudExvZ2luUmVxdWVzdH0gZnJvbSBcIi4vcmVxdWVzdC9tZXJjaGFudExvZ2luUmVxdWVzdFwiO1xuaW1wb3J0IHtUaWNrZXRSZXF1ZXN0fSBmcm9tIFwiLi9yZXF1ZXN0L3RpY2tldFJlcXVlc3RcIjtcbmltcG9ydCB7TWVyY2hhbnRMb2dpblJlc3BvbnNlfSBmcm9tIFwiLi9yZXNwb25zZS9tZXJjaGFudExvZ2luUmVzcG9uc2VcIjtcbmltcG9ydCB7VGlja2V0UmVzcG9uc2V9IGZyb20gXCIuL3Jlc3BvbnNlL3RpY2tldFJlc3BvbnNlXCI7XG5pbXBvcnQge0VuY3J5cHRpb25VdGlsfSBmcm9tIFwiLi9zZWN1cml0eVwiO1xuaW1wb3J0IHtUb2tlbn0gZnJvbSBcIi4vdG9rZW5cIjtcblxuZXhwb3J0IGNsYXNzIE1lcmNoYW50U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpbigpOiBQcm9taXNlPFRva2VuIHwgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uPiB7XG4gICAgICAgIGNvbnN0IG1lcmNoYW50SWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uTWVyY2hhbnRJZDtcbiAgICAgICAgY29uc3Qgc2lnbiA9IEVuY3J5cHRpb25VdGlsLnNpZ24odGhpcy5jb25maWd1cmF0aW9uLk1lcmNoYW50UHJpdmF0ZUtleSwgbWVyY2hhbnRJZCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgTWVyY2hhbnRMb2dpblJlcXVlc3QobWVyY2hhbnRJZCwgc2lnbik7XG4gICAgICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgTWVyY2hhbnRBcGkubG9naW4odGhpcy5jb25maWd1cmF0aW9uLkJleEFwaUNvbmZpZ3VyYXRpb24uQmFzZVVybCwgcmVxdWVzdClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IE1lcmNoYW50TG9naW5SZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLlRva2VuKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24oZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uZVRpbWVUaWNrZXQoY29ubmVjdGlvblRva2VuOiBUb2tlbiwgYW1vdW50OiBudW1iZXIsIGluc3RhbGxtZW50VXJsPzogc3RyaW5nLCBub25jZVVybD86IHN0cmluZyk6IFByb21pc2U8VG9rZW4gfCBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24+IHtcbiAgICAgICAgY29uc3QgdGlja2V0ID0gbmV3IFRpY2tldFJlcXVlc3QoXCJwYXltZW50XCIpO1xuICAgICAgICB0aWNrZXQuQW1vdW50ID0gTW9uZXlVdGlscy50b1RSWShhbW91bnQpO1xuICAgICAgICBpZiAoaW5zdGFsbG1lbnRVcmwpIHtcbiAgICAgICAgICAgIHRpY2tldC5JbnN0YWxsbWVudFVybCA9IGluc3RhbGxtZW50VXJsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub25jZVVybCkge1xuICAgICAgICAgICAgdGlja2V0Lk5vbmNlVXJsID0gbm9uY2VVcmw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBCbHVlYmlyZCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBNZXJjaGFudEFwaS50aWNrZXQodGhpcy5jb25maWd1cmF0aW9uLkJleEFwaUNvbmZpZ3VyYXRpb24uQmFzZVVybCwgY29ubmVjdGlvblRva2VuLCB0aWNrZXQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBUaWNrZXRSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLlRva2VuKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24oZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=