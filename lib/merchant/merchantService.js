"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bluebird = require("bluebird");
var exceptions_1 = require("../exceptions");
var moneyUtils_1 = require("../moneyUtils");
var merchantApi_1 = require("./merchantApi");
var merchantLoginRequest_1 = require("./request/merchantLoginRequest");
var ticketRequest_1 = require("./request/ticketRequest");
var merchantLoginResponse_1 = require("./response/merchantLoginResponse");
var ticketResponse_1 = require("./response/ticketResponse");
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
                .then(function (raw) {
                var response = new merchantLoginResponse_1.MerchantLoginResponse(raw);
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
                .then(function (raw) {
                var response = new ticketResponse_1.TicketResponse(raw);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lcmNoYW50L21lcmNoYW50U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLG1DQUFxQztBQUVyQyw0Q0FBdUQ7QUFDdkQsNENBQXlDO0FBQ3pDLDZDQUEwQztBQUMxQyx1RUFBb0U7QUFDcEUseURBQXNEO0FBRXRELDBFQUF1RTtBQUN2RSw0REFBeUQ7QUFDekQsdUNBQTBDO0FBRzFDO0lBR0kseUJBQW1CLGFBQTRCO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQUEsaUJBY0M7UUFiRyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUNqRCxJQUFNLElBQUksR0FBRyx5QkFBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BGLElBQU0sT0FBTyxHQUFHLElBQUksMkNBQW9CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2hDLHlCQUFXLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztpQkFDckUsSUFBSSxDQUFDLFVBQUMsR0FBMEI7Z0JBQzdCLElBQU0sUUFBUSxHQUFHLElBQUksNkNBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hELE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ1QsTUFBTSxDQUFDLElBQUkscUNBQXdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHVDQUFhLEdBQXBCLFVBQXFCLGVBQXNCLEVBQUUsTUFBYyxFQUFFLGNBQXVCLEVBQUUsUUFBaUI7UUFBdkcsaUJBbUJDO1FBbEJHLElBQU0sTUFBTSxHQUFHLElBQUksNkJBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsTUFBTSxHQUFHLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDM0MsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMvQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDaEMseUJBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQztpQkFDdEYsSUFBSSxDQUFDLFVBQUMsR0FBMEI7Z0JBQzdCLElBQU0sUUFBUSxHQUFHLElBQUksK0JBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDekMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDVCxNQUFNLENBQUMsSUFBSSxxQ0FBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjguMDQuMjAxN1xuICovXG5cbmltcG9ydCAqIGFzIEJsdWViaXJkIGZyb20gXCJibHVlYmlyZFwiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7TWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9ufSBmcm9tIFwiLi4vZXhjZXB0aW9uc1wiO1xuaW1wb3J0IHtNb25leVV0aWxzfSBmcm9tIFwiLi4vbW9uZXlVdGlsc1wiO1xuaW1wb3J0IHtNZXJjaGFudEFwaX0gZnJvbSBcIi4vbWVyY2hhbnRBcGlcIjtcbmltcG9ydCB7TWVyY2hhbnRMb2dpblJlcXVlc3R9IGZyb20gXCIuL3JlcXVlc3QvbWVyY2hhbnRMb2dpblJlcXVlc3RcIjtcbmltcG9ydCB7VGlja2V0UmVxdWVzdH0gZnJvbSBcIi4vcmVxdWVzdC90aWNrZXRSZXF1ZXN0XCI7XG5pbXBvcnQge1Jhd0JleFJlc3BvbnNlfSBmcm9tIFwiLi9yZXNwb25zZS9iZXhSZXNwb25zZVwiO1xuaW1wb3J0IHtNZXJjaGFudExvZ2luUmVzcG9uc2V9IGZyb20gXCIuL3Jlc3BvbnNlL21lcmNoYW50TG9naW5SZXNwb25zZVwiO1xuaW1wb3J0IHtUaWNrZXRSZXNwb25zZX0gZnJvbSBcIi4vcmVzcG9uc2UvdGlja2V0UmVzcG9uc2VcIjtcbmltcG9ydCB7RW5jcnlwdGlvblV0aWx9IGZyb20gXCIuL3NlY3VyaXR5XCI7XG5pbXBvcnQge1Rva2VufSBmcm9tIFwiLi90b2tlblwiO1xuXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKCk6IFByb21pc2U8VG9rZW4gfCBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24+IHtcbiAgICAgICAgY29uc3QgbWVyY2hhbnRJZCA9IHRoaXMuY29uZmlndXJhdGlvbi5NZXJjaGFudElkO1xuICAgICAgICBjb25zdCBzaWduID0gRW5jcnlwdGlvblV0aWwuc2lnbih0aGlzLmNvbmZpZ3VyYXRpb24uTWVyY2hhbnRQcml2YXRlS2V5LCBtZXJjaGFudElkKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBNZXJjaGFudExvZ2luUmVxdWVzdChtZXJjaGFudElkLCBzaWduKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCbHVlYmlyZCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBNZXJjaGFudEFwaS5sb2dpbih0aGlzLmNvbmZpZ3VyYXRpb24uQmV4QXBpQ29uZmlndXJhdGlvbi5CYXNlVXJsLCByZXF1ZXN0KVxuICAgICAgICAgICAgICAgIC50aGVuKChyYXc6IFJhd0JleFJlc3BvbnNlPFRva2VuPikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IG5ldyBNZXJjaGFudExvZ2luUmVzcG9uc2UocmF3KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5Ub2tlbik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uKGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbmVUaW1lVGlja2V0KGNvbm5lY3Rpb25Ub2tlbjogVG9rZW4sIGFtb3VudDogbnVtYmVyLCBpbnN0YWxsbWVudFVybD86IHN0cmluZywgbm9uY2VVcmw/OiBzdHJpbmcpOiBQcm9taXNlPFRva2VuIHwgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uPiB7XG4gICAgICAgIGNvbnN0IHRpY2tldCA9IG5ldyBUaWNrZXRSZXF1ZXN0KFwicGF5bWVudFwiKTtcbiAgICAgICAgdGlja2V0LkFtb3VudCA9IE1vbmV5VXRpbHMudG9UUlkoYW1vdW50KTtcbiAgICAgICAgaWYgKGluc3RhbGxtZW50VXJsKSB7XG4gICAgICAgICAgICB0aWNrZXQuSW5zdGFsbG1lbnRVcmwgPSBpbnN0YWxsbWVudFVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9uY2VVcmwpIHtcbiAgICAgICAgICAgIHRpY2tldC5Ob25jZVVybCA9IG5vbmNlVXJsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgTWVyY2hhbnRBcGkudGlja2V0KHRoaXMuY29uZmlndXJhdGlvbi5CZXhBcGlDb25maWd1cmF0aW9uLkJhc2VVcmwsIGNvbm5lY3Rpb25Ub2tlbiwgdGlja2V0KVxuICAgICAgICAgICAgICAgIC50aGVuKChyYXc6IFJhd0JleFJlc3BvbnNlPFRva2VuPikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IG5ldyBUaWNrZXRSZXNwb25zZShyYXcpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLlRva2VuKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24oZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=