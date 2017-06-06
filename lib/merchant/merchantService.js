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
var nonceResultResponse_1 = require("./response/nonce/nonceResultResponse");
var paymentResultResponse_1 = require("./response/paymentResultResponse");
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
            debug_1.Log.debug("MerchantService/login", request);
            merchantApi_1.MerchantApi.login(_this.configuration.BexApiConfiguration.BaseUrl, request)
                .then(function (raw) {
                var response = new merchantLoginResponse_1.MerchantLoginResponse(raw);
                debug_1.Log.info("MerchantService/login", "MerchantLoginResponse", response);
                resolve(response);
            })
                .catch(function (error) {
                debug_1.Log.debug("MerchantService/login", "MerchantServiceException", error);
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
            debug_1.Log.debug("MerchantService/oneTimeTicket", "connectionToken", connectionToken);
            debug_1.Log.debug("MerchantService/oneTimeTicket", "ticket", ticket);
            merchantApi_1.MerchantApi.ticket(_this.configuration.BexApiConfiguration.BaseUrl, connectionToken, ticket)
                .then(function (raw) {
                var response = new ticketResponse_1.TicketResponse(raw);
                debug_1.Log.info("MerchantService/oneTimeTicket", "TicketResponse", response);
                resolve(response);
            })
                .catch(function (error) {
                debug_1.Log.debug("MerchantService/oneTimeTicket", "MerchantServiceException", error);
                reject(new exceptions_1.MerchantServiceException(error));
            });
        });
    };
    MerchantService.prototype.sendNonceResponse = function (connectionToken, request) {
        var _this = this;
        return new Bluebird(function (resolve, reject) {
            debug_1.Log.debug("MerchantService/sendNonceResponse", "connectionToken", connectionToken);
            debug_1.Log.debug("MerchantService/sendNonceResponse", "MerchantNonceResponse", request);
            merchantApi_1.MerchantApi.commit(_this.configuration.BexApiConfiguration.BaseUrl, connectionToken, request)
                .then(function (raw) {
                var response = new nonceResultResponse_1.NonceResultResponse(raw);
                debug_1.Log.info("MerchantService/sendNonceResponse", "NonceResultResponse", response);
                resolve(response);
            })
                .catch(function (error) {
                debug_1.Log.debug("MerchantService/sendNonceResponse", "MerchantServiceException", error);
                reject(new exceptions_1.MerchantServiceException(error));
            });
        });
    };
    MerchantService.prototype.result = function (connectionToken, ticketId) {
        var _this = this;
        return new Bluebird(function (resolve, reject) {
            debug_1.Log.debug("MerchantService/result", "connectionToken", connectionToken);
            debug_1.Log.debug("MerchantService/result", "ticketId", ticketId);
            merchantApi_1.MerchantApi.result(_this.configuration.BexApiConfiguration.BaseUrl, connectionToken, ticketId)
                .then(function (raw) {
                var response = new paymentResultResponse_1.PaymentResultResponse(raw);
                debug_1.Log.info("MerchantService/result", "PaymentResultResponse", response);
                resolve(response);
            })
                .catch(function (error) {
                debug_1.Log.debug("MerchantService/result", "MerchantServiceException", error);
                reject(new exceptions_1.MerchantServiceException(error));
            });
        });
    };
    return MerchantService;
}());
exports.MerchantService = MerchantService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lcmNoYW50L21lcmNoYW50U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLG1DQUFxQztBQUVyQyxrQ0FBNkI7QUFDN0IsNENBQXVEO0FBQ3ZELDRDQUF5QztBQUN6Qyw2Q0FBMEM7QUFDMUMsdUVBQW9FO0FBQ3BFLHlEQUFzRDtBQUV0RCwwRUFBdUU7QUFFdkUsNEVBQXlFO0FBQ3pFLDBFQUFnRjtBQUNoRiw0REFBeUQ7QUFDekQsdUNBQTBDO0FBRzFDO0lBR0kseUJBQW1CLGFBQTRCO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQUEsaUJBaUJDO1FBaEJHLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQ2pELElBQU0sSUFBSSxHQUFHLHlCQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEYsSUFBTSxPQUFPLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDaEMsV0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1Qyx5QkFBVyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7aUJBQ3JFLElBQUksQ0FBQyxVQUFDLEdBQTBCO2dCQUM3QixJQUFNLFFBQVEsR0FBMEIsSUFBSSw2Q0FBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkUsV0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDckUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNULFdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3RFLE1BQU0sQ0FBQyxJQUFJLHFDQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx1Q0FBYSxHQUFwQixVQUFxQixlQUFzQixFQUFFLE1BQWMsRUFBRSxjQUF1QixFQUFFLFFBQWlCO1FBQXZHLGlCQXVCQztRQXRCRyxJQUFNLE1BQU0sR0FBRyxJQUFJLDZCQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLE1BQU0sR0FBRyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2hDLFdBQUcsQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDL0UsV0FBRyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0QseUJBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQztpQkFDdEYsSUFBSSxDQUFDLFVBQUMsR0FBMEI7Z0JBQzdCLElBQU0sUUFBUSxHQUFtQixJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pELFdBQUcsQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3RFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDVCxXQUFHLENBQUMsS0FBSyxDQUFDLCtCQUErQixFQUFFLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM5RSxNQUFNLENBQUMsSUFBSSxxQ0FBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkNBQWlCLEdBQXhCLFVBQXlCLGVBQXNCLEVBQUUsT0FBOEI7UUFBL0UsaUJBZUM7UUFkRyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNoQyxXQUFHLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ25GLFdBQUcsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakYseUJBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sQ0FBQztpQkFDdkYsSUFBSSxDQUFDLFVBQUMsR0FBNEI7Z0JBQy9CLElBQU0sUUFBUSxHQUF3QixJQUFJLHlDQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRSxXQUFHLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUMvRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ1QsV0FBRyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRSwwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbEYsTUFBTSxDQUFDLElBQUkscUNBQXdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGdDQUFNLEdBQWIsVUFBYyxlQUFzQixFQUFFLFFBQWdCO1FBQXRELGlCQWVDO1FBZEcsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDaEMsV0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN4RSxXQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMxRCx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDO2lCQUN4RixJQUFJLENBQUMsVUFBQyxHQUE0QjtnQkFDL0IsSUFBTSxRQUFRLEdBQTBCLElBQUksNkNBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZFLFdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ3RFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDVCxXQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUN2RSxNQUFNLENBQUMsSUFBSSxxQ0FBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBcEZELElBb0ZDO0FBcEZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjguMDQuMjAxN1xuICovXG5cbmltcG9ydCAqIGFzIEJsdWViaXJkIGZyb20gXCJibHVlYmlyZFwiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vY29uZmlnL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7TG9nfSBmcm9tIFwiLi4vZGVidWdcIjtcbmltcG9ydCB7TWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9ufSBmcm9tIFwiLi4vZXhjZXB0aW9uc1wiO1xuaW1wb3J0IHtNb25leVV0aWxzfSBmcm9tIFwiLi4vbW9uZXlVdGlsc1wiO1xuaW1wb3J0IHtNZXJjaGFudEFwaX0gZnJvbSBcIi4vbWVyY2hhbnRBcGlcIjtcbmltcG9ydCB7TWVyY2hhbnRMb2dpblJlcXVlc3R9IGZyb20gXCIuL3JlcXVlc3QvbWVyY2hhbnRMb2dpblJlcXVlc3RcIjtcbmltcG9ydCB7VGlja2V0UmVxdWVzdH0gZnJvbSBcIi4vcmVxdWVzdC90aWNrZXRSZXF1ZXN0XCI7XG5pbXBvcnQge1Jhd0JleFJlc3BvbnNlfSBmcm9tIFwiLi9yZXNwb25zZS9iZXhSZXNwb25zZVwiO1xuaW1wb3J0IHtNZXJjaGFudExvZ2luUmVzcG9uc2V9IGZyb20gXCIuL3Jlc3BvbnNlL21lcmNoYW50TG9naW5SZXNwb25zZVwiO1xuaW1wb3J0IHtNZXJjaGFudE5vbmNlUmVzcG9uc2V9IGZyb20gXCIuL3Jlc3BvbnNlL25vbmNlL21lcmNoYW50Tm9uY2VSZXNwb25zZVwiO1xuaW1wb3J0IHtOb25jZVJlc3VsdFJlc3BvbnNlfSBmcm9tIFwiLi9yZXNwb25zZS9ub25jZS9ub25jZVJlc3VsdFJlc3BvbnNlXCI7XG5pbXBvcnQge1BheW1lbnRSZXN1bHRSZXNwb25zZSwgUG9zRGF0YX0gZnJvbSBcIi4vcmVzcG9uc2UvcGF5bWVudFJlc3VsdFJlc3BvbnNlXCI7XG5pbXBvcnQge1RpY2tldFJlc3BvbnNlfSBmcm9tIFwiLi9yZXNwb25zZS90aWNrZXRSZXNwb25zZVwiO1xuaW1wb3J0IHtFbmNyeXB0aW9uVXRpbH0gZnJvbSBcIi4vc2VjdXJpdHlcIjtcbmltcG9ydCB7VG9rZW59IGZyb20gXCIuL3Rva2VuXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXJjaGFudFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4oKTogUHJvbWlzZTxNZXJjaGFudExvZ2luUmVzcG9uc2UgfCBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24+IHtcbiAgICAgICAgY29uc3QgbWVyY2hhbnRJZCA9IHRoaXMuY29uZmlndXJhdGlvbi5NZXJjaGFudElkO1xuICAgICAgICBjb25zdCBzaWduID0gRW5jcnlwdGlvblV0aWwuc2lnbih0aGlzLmNvbmZpZ3VyYXRpb24uTWVyY2hhbnRQcml2YXRlS2V5LCBtZXJjaGFudElkKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBNZXJjaGFudExvZ2luUmVxdWVzdChtZXJjaGFudElkLCBzaWduKTtcbiAgICAgICAgcmV0dXJuIG5ldyBCbHVlYmlyZCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXJjaGFudFNlcnZpY2UvbG9naW5cIiwgcmVxdWVzdCk7XG4gICAgICAgICAgICBNZXJjaGFudEFwaS5sb2dpbih0aGlzLmNvbmZpZ3VyYXRpb24uQmV4QXBpQ29uZmlndXJhdGlvbi5CYXNlVXJsLCByZXF1ZXN0KVxuICAgICAgICAgICAgICAgIC50aGVuKChyYXc6IFJhd0JleFJlc3BvbnNlPFRva2VuPikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZTogTWVyY2hhbnRMb2dpblJlc3BvbnNlID0gbmV3IE1lcmNoYW50TG9naW5SZXNwb25zZShyYXcpO1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIk1lcmNoYW50U2VydmljZS9sb2dpblwiLCBcIk1lcmNoYW50TG9naW5SZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJNZXJjaGFudFNlcnZpY2UvbG9naW5cIiwgXCJNZXJjaGFudFNlcnZpY2VFeGNlcHRpb25cIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbihlcnJvcikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25lVGltZVRpY2tldChjb25uZWN0aW9uVG9rZW46IFRva2VuLCBhbW91bnQ6IG51bWJlciwgaW5zdGFsbG1lbnRVcmw/OiBzdHJpbmcsIG5vbmNlVXJsPzogc3RyaW5nKTogUHJvbWlzZTxUaWNrZXRSZXNwb25zZSB8IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbj4ge1xuICAgICAgICBjb25zdCB0aWNrZXQgPSBuZXcgVGlja2V0UmVxdWVzdChcInBheW1lbnRcIik7XG4gICAgICAgIHRpY2tldC5BbW91bnQgPSBNb25leVV0aWxzLnRvVFJZKGFtb3VudCk7XG4gICAgICAgIGlmIChpbnN0YWxsbWVudFVybCkge1xuICAgICAgICAgICAgdGlja2V0Lkluc3RhbGxtZW50VXJsID0gaW5zdGFsbG1lbnRVcmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vbmNlVXJsKSB7XG4gICAgICAgICAgICB0aWNrZXQuTm9uY2VVcmwgPSBub25jZVVybDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEJsdWViaXJkKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1lcmNoYW50U2VydmljZS9vbmVUaW1lVGlja2V0XCIsIFwiY29ubmVjdGlvblRva2VuXCIsIGNvbm5lY3Rpb25Ub2tlbik7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXJjaGFudFNlcnZpY2Uvb25lVGltZVRpY2tldFwiLCBcInRpY2tldFwiLCB0aWNrZXQpO1xuICAgICAgICAgICAgTWVyY2hhbnRBcGkudGlja2V0KHRoaXMuY29uZmlndXJhdGlvbi5CZXhBcGlDb25maWd1cmF0aW9uLkJhc2VVcmwsIGNvbm5lY3Rpb25Ub2tlbiwgdGlja2V0KVxuICAgICAgICAgICAgICAgIC50aGVuKChyYXc6IFJhd0JleFJlc3BvbnNlPFRva2VuPikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZTogVGlja2V0UmVzcG9uc2UgPSBuZXcgVGlja2V0UmVzcG9uc2UocmF3KTtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJNZXJjaGFudFNlcnZpY2Uvb25lVGltZVRpY2tldFwiLCBcIlRpY2tldFJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1lcmNoYW50U2VydmljZS9vbmVUaW1lVGlja2V0XCIsIFwiTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24oZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbmROb25jZVJlc3BvbnNlKGNvbm5lY3Rpb25Ub2tlbjogVG9rZW4sIHJlcXVlc3Q6IE1lcmNoYW50Tm9uY2VSZXNwb25zZSk6IFByb21pc2U8Tm9uY2VSZXN1bHRSZXNwb25zZSB8IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbj4ge1xuICAgICAgICByZXR1cm4gbmV3IEJsdWViaXJkKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1lcmNoYW50U2VydmljZS9zZW5kTm9uY2VSZXNwb25zZVwiLCBcImNvbm5lY3Rpb25Ub2tlblwiLCBjb25uZWN0aW9uVG9rZW4pO1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL3NlbmROb25jZVJlc3BvbnNlXCIsIFwiTWVyY2hhbnROb25jZVJlc3BvbnNlXCIsIHJlcXVlc3QpO1xuICAgICAgICAgICAgTWVyY2hhbnRBcGkuY29tbWl0KHRoaXMuY29uZmlndXJhdGlvbi5CZXhBcGlDb25maWd1cmF0aW9uLkJhc2VVcmwsIGNvbm5lY3Rpb25Ub2tlbiwgcmVxdWVzdClcbiAgICAgICAgICAgICAgICAudGhlbigocmF3OiBSYXdCZXhSZXNwb25zZTxQb3NEYXRhPikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZTogTm9uY2VSZXN1bHRSZXNwb25zZSA9IG5ldyBOb25jZVJlc3VsdFJlc3BvbnNlKHJhdyk7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiTWVyY2hhbnRTZXJ2aWNlL3NlbmROb25jZVJlc3BvbnNlXCIsIFwiTm9uY2VSZXN1bHRSZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJNZXJjaGFudFNlcnZpY2Uvc2VuZE5vbmNlUmVzcG9uc2VcIiwgXCJNZXJjaGFudFNlcnZpY2VFeGNlcHRpb25cIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbihlcnJvcikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzdWx0KGNvbm5lY3Rpb25Ub2tlbjogVG9rZW4sIHRpY2tldElkOiBzdHJpbmcpOiBQcm9taXNlPFBheW1lbnRSZXN1bHRSZXNwb25zZSB8IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbj4ge1xuICAgICAgICByZXR1cm4gbmV3IEJsdWViaXJkKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1lcmNoYW50U2VydmljZS9yZXN1bHRcIiwgXCJjb25uZWN0aW9uVG9rZW5cIiwgY29ubmVjdGlvblRva2VuKTtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1lcmNoYW50U2VydmljZS9yZXN1bHRcIiwgXCJ0aWNrZXRJZFwiLCB0aWNrZXRJZCk7XG4gICAgICAgICAgICBNZXJjaGFudEFwaS5yZXN1bHQodGhpcy5jb25maWd1cmF0aW9uLkJleEFwaUNvbmZpZ3VyYXRpb24uQmFzZVVybCwgY29ubmVjdGlvblRva2VuLCB0aWNrZXRJZClcbiAgICAgICAgICAgICAgICAudGhlbigocmF3OiBSYXdCZXhSZXNwb25zZTxQb3NEYXRhPikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZTogUGF5bWVudFJlc3VsdFJlc3BvbnNlID0gbmV3IFBheW1lbnRSZXN1bHRSZXNwb25zZShyYXcpO1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIk1lcmNoYW50U2VydmljZS9yZXN1bHRcIiwgXCJQYXltZW50UmVzdWx0UmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL3Jlc3VsdFwiLCBcIk1lcmNoYW50U2VydmljZUV4Y2VwdGlvblwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uKGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==