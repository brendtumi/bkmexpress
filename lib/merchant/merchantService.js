"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bluebird = require("bluebird");
var debug_1 = require("../debug");
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
            debug_1.debug("MerchantService/login", request);
            merchantApi_1.MerchantApi.login(_this.configuration.BexApiConfiguration.BaseUrl, request)
                .then(function (raw) {
                var response = new merchantLoginResponse_1.MerchantLoginResponse(raw);
                debug_1.debug("MerchantService/login", "MerchantLoginResponse", response);
                resolve(response);
            })
                .catch(function (error) {
                debug_1.debug("MerchantService/login", "MerchantServiceException", error);
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
            debug_1.debug("MerchantService/oneTimeTicket", connectionToken, ticket);
            merchantApi_1.MerchantApi.ticket(_this.configuration.BexApiConfiguration.BaseUrl, connectionToken, ticket)
                .then(function (raw) {
                var response = new ticketResponse_1.TicketResponse(raw);
                debug_1.debug("MerchantService/oneTimeTicket", "TicketResponse", response);
                resolve(response);
            })
                .catch(function (error) {
                debug_1.debug("MerchantService/oneTimeTicket", "MerchantServiceException", error);
                reject(new exceptions_1.MerchantServiceException(error));
            });
        });
    };
    return MerchantService;
}());
exports.MerchantService = MerchantService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lcmNoYW50L21lcmNoYW50U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLG1DQUFxQztBQUVyQyxrQ0FBK0I7QUFDL0IsNENBQXVEO0FBQ3ZELDRDQUF5QztBQUN6Qyw2Q0FBMEM7QUFDMUMsdUVBQW9FO0FBQ3BFLHlEQUFzRDtBQUV0RCwwRUFBdUU7QUFDdkUsNERBQXlEO0FBQ3pELHVDQUEwQztBQUcxQztJQUdJLHlCQUFtQixhQUE0QjtRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUFBLGlCQWlCQztRQWhCRyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUNqRCxJQUFNLElBQUksR0FBRyx5QkFBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BGLElBQU0sT0FBTyxHQUFHLElBQUksMkNBQW9CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2hDLGFBQUssQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN4Qyx5QkFBVyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7aUJBQ3JFLElBQUksQ0FBQyxVQUFDLEdBQTBCO2dCQUM3QixJQUFNLFFBQVEsR0FBMEIsSUFBSSw2Q0FBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkUsYUFBSyxDQUFDLHVCQUF1QixFQUFFLHVCQUF1QixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNsRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ1QsYUFBSyxDQUFDLHVCQUF1QixFQUFFLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNsRSxNQUFNLENBQUMsSUFBSSxxQ0FBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sdUNBQWEsR0FBcEIsVUFBcUIsZUFBc0IsRUFBRSxNQUFjLEVBQUUsY0FBdUIsRUFBRSxRQUFpQjtRQUF2RyxpQkFzQkM7UUFyQkcsSUFBTSxNQUFNLEdBQUcsSUFBSSw2QkFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNoQyxhQUFLLENBQUMsK0JBQStCLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2hFLHlCQUFXLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUM7aUJBQ3RGLElBQUksQ0FBQyxVQUFDLEdBQTBCO2dCQUM3QixJQUFNLFFBQVEsR0FBbUIsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxhQUFLLENBQUMsK0JBQStCLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ25FLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDVCxhQUFLLENBQUMsK0JBQStCLEVBQUUsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzFFLE1BQU0sQ0FBQyxJQUFJLHFDQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUFsRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyOC4wNC4yMDE3XG4gKi9cblxuaW1wb3J0ICogYXMgQmx1ZWJpcmQgZnJvbSBcImJsdWViaXJkXCI7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHtkZWJ1Z30gZnJvbSBcIi4uL2RlYnVnXCI7XG5pbXBvcnQge01lcmNoYW50U2VydmljZUV4Y2VwdGlvbn0gZnJvbSBcIi4uL2V4Y2VwdGlvbnNcIjtcbmltcG9ydCB7TW9uZXlVdGlsc30gZnJvbSBcIi4uL21vbmV5VXRpbHNcIjtcbmltcG9ydCB7TWVyY2hhbnRBcGl9IGZyb20gXCIuL21lcmNoYW50QXBpXCI7XG5pbXBvcnQge01lcmNoYW50TG9naW5SZXF1ZXN0fSBmcm9tIFwiLi9yZXF1ZXN0L21lcmNoYW50TG9naW5SZXF1ZXN0XCI7XG5pbXBvcnQge1RpY2tldFJlcXVlc3R9IGZyb20gXCIuL3JlcXVlc3QvdGlja2V0UmVxdWVzdFwiO1xuaW1wb3J0IHtSYXdCZXhSZXNwb25zZX0gZnJvbSBcIi4vcmVzcG9uc2UvYmV4UmVzcG9uc2VcIjtcbmltcG9ydCB7TWVyY2hhbnRMb2dpblJlc3BvbnNlfSBmcm9tIFwiLi9yZXNwb25zZS9tZXJjaGFudExvZ2luUmVzcG9uc2VcIjtcbmltcG9ydCB7VGlja2V0UmVzcG9uc2V9IGZyb20gXCIuL3Jlc3BvbnNlL3RpY2tldFJlc3BvbnNlXCI7XG5pbXBvcnQge0VuY3J5cHRpb25VdGlsfSBmcm9tIFwiLi9zZWN1cml0eVwiO1xuaW1wb3J0IHtUb2tlbn0gZnJvbSBcIi4vdG9rZW5cIjtcblxuZXhwb3J0IGNsYXNzIE1lcmNoYW50U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpbigpOiBQcm9taXNlPE1lcmNoYW50TG9naW5SZXNwb25zZSB8IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbj4ge1xuICAgICAgICBjb25zdCBtZXJjaGFudElkID0gdGhpcy5jb25maWd1cmF0aW9uLk1lcmNoYW50SWQ7XG4gICAgICAgIGNvbnN0IHNpZ24gPSBFbmNyeXB0aW9uVXRpbC5zaWduKHRoaXMuY29uZmlndXJhdGlvbi5NZXJjaGFudFByaXZhdGVLZXksIG1lcmNoYW50SWQpO1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IE1lcmNoYW50TG9naW5SZXF1ZXN0KG1lcmNoYW50SWQsIHNpZ24pO1xuICAgICAgICByZXR1cm4gbmV3IEJsdWViaXJkKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL2xvZ2luXCIsIHJlcXVlc3QpO1xuICAgICAgICAgICAgTWVyY2hhbnRBcGkubG9naW4odGhpcy5jb25maWd1cmF0aW9uLkJleEFwaUNvbmZpZ3VyYXRpb24uQmFzZVVybCwgcmVxdWVzdClcbiAgICAgICAgICAgICAgICAudGhlbigocmF3OiBSYXdCZXhSZXNwb25zZTxUb2tlbj4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2U6IE1lcmNoYW50TG9naW5SZXNwb25zZSA9IG5ldyBNZXJjaGFudExvZ2luUmVzcG9uc2UocmF3KTtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJNZXJjaGFudFNlcnZpY2UvbG9naW5cIiwgXCJNZXJjaGFudExvZ2luUmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJNZXJjaGFudFNlcnZpY2UvbG9naW5cIiwgXCJNZXJjaGFudFNlcnZpY2VFeGNlcHRpb25cIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbihlcnJvcikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25lVGltZVRpY2tldChjb25uZWN0aW9uVG9rZW46IFRva2VuLCBhbW91bnQ6IG51bWJlciwgaW5zdGFsbG1lbnRVcmw/OiBzdHJpbmcsIG5vbmNlVXJsPzogc3RyaW5nKTogUHJvbWlzZTxUaWNrZXRSZXNwb25zZSB8IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbj4ge1xuICAgICAgICBjb25zdCB0aWNrZXQgPSBuZXcgVGlja2V0UmVxdWVzdChcInBheW1lbnRcIik7XG4gICAgICAgIHRpY2tldC5BbW91bnQgPSBNb25leVV0aWxzLnRvVFJZKGFtb3VudCk7XG4gICAgICAgIGlmIChpbnN0YWxsbWVudFVybCkge1xuICAgICAgICAgICAgdGlja2V0Lkluc3RhbGxtZW50VXJsID0gaW5zdGFsbG1lbnRVcmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vbmNlVXJsKSB7XG4gICAgICAgICAgICB0aWNrZXQuTm9uY2VVcmwgPSBub25jZVVybDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEJsdWViaXJkKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL29uZVRpbWVUaWNrZXRcIiwgY29ubmVjdGlvblRva2VuLCB0aWNrZXQpO1xuICAgICAgICAgICAgTWVyY2hhbnRBcGkudGlja2V0KHRoaXMuY29uZmlndXJhdGlvbi5CZXhBcGlDb25maWd1cmF0aW9uLkJhc2VVcmwsIGNvbm5lY3Rpb25Ub2tlbiwgdGlja2V0KVxuICAgICAgICAgICAgICAgIC50aGVuKChyYXc6IFJhd0JleFJlc3BvbnNlPFRva2VuPikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZTogVGlja2V0UmVzcG9uc2UgPSBuZXcgVGlja2V0UmVzcG9uc2UocmF3KTtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJNZXJjaGFudFNlcnZpY2Uvb25lVGltZVRpY2tldFwiLCBcIlRpY2tldFJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL29uZVRpbWVUaWNrZXRcIiwgXCJNZXJjaGFudFNlcnZpY2VFeGNlcHRpb25cIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbihlcnJvcikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==