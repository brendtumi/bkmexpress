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
            debug_1.Log.debug("MerchantService/oneTimeTicket", connectionToken, ticket);
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
            debug_1.Log.debug("MerchantService/sendNonceResponse", connectionToken, request);
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
            debug_1.Log.debug("MerchantService/result", connectionToken, ticketId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lcmNoYW50L21lcmNoYW50U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLG1DQUFxQztBQUVyQyxrQ0FBNkI7QUFDN0IsNENBQXVEO0FBQ3ZELDRDQUF5QztBQUN6Qyw2Q0FBMEM7QUFDMUMsdUVBQW9FO0FBQ3BFLHlEQUFzRDtBQUV0RCwwRUFBdUU7QUFFdkUsNEVBQXlFO0FBQ3pFLDBFQUFnRjtBQUNoRiw0REFBeUQ7QUFDekQsdUNBQTBDO0FBRzFDO0lBR0kseUJBQW1CLGFBQTRCO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQUEsaUJBaUJDO1FBaEJHLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQ2pELElBQU0sSUFBSSxHQUFHLHlCQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEYsSUFBTSxPQUFPLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDaEMsV0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1Qyx5QkFBVyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7aUJBQ3JFLElBQUksQ0FBQyxVQUFDLEdBQTBCO2dCQUM3QixJQUFNLFFBQVEsR0FBMEIsSUFBSSw2Q0FBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkUsV0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDckUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO2dCQUNULFdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3RFLE1BQU0sQ0FBQyxJQUFJLHFDQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx1Q0FBYSxHQUFwQixVQUFxQixlQUFzQixFQUFFLE1BQWMsRUFBRSxjQUF1QixFQUFFLFFBQWlCO1FBQXZHLGlCQXNCQztRQXJCRyxJQUFNLE1BQU0sR0FBRyxJQUFJLDZCQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLE1BQU0sR0FBRyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQzNDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2hDLFdBQUcsQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BFLHlCQUFXLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUM7aUJBQ3RGLElBQUksQ0FBQyxVQUFDLEdBQTBCO2dCQUM3QixJQUFNLFFBQVEsR0FBbUIsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6RCxXQUFHLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ1QsV0FBRyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSwwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUUsTUFBTSxDQUFDLElBQUkscUNBQXdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDJDQUFpQixHQUF4QixVQUF5QixlQUFzQixFQUFFLE9BQThCO1FBQS9FLGlCQWNDO1FBYkcsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDaEMsV0FBRyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDekUseUJBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sQ0FBQztpQkFDdkYsSUFBSSxDQUFDLFVBQUMsR0FBNEI7Z0JBQy9CLElBQU0sUUFBUSxHQUF3QixJQUFJLHlDQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRSxXQUFHLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUMvRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ1QsV0FBRyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsRUFBRSwwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDbEYsTUFBTSxDQUFDLElBQUkscUNBQXdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGdDQUFNLEdBQWIsVUFBYyxlQUFzQixFQUFFLFFBQWdCO1FBQXRELGlCQWNDO1FBYkcsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDaEMsV0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QseUJBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQztpQkFDeEYsSUFBSSxDQUFDLFVBQUMsR0FBNEI7Z0JBQy9CLElBQU0sUUFBUSxHQUEwQixJQUFJLDZDQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2RSxXQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLHVCQUF1QixFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7Z0JBQ1QsV0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSwwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdkUsTUFBTSxDQUFDLElBQUkscUNBQXdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWpGRCxJQWlGQztBQWpGWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI4LjA0LjIwMTdcbiAqL1xuXG5pbXBvcnQgKiBhcyBCbHVlYmlyZCBmcm9tIFwiYmx1ZWJpcmRcIjtcbmltcG9ydCB7Q29uZmlndXJhdGlvbn0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQge0xvZ30gZnJvbSBcIi4uL2RlYnVnXCI7XG5pbXBvcnQge01lcmNoYW50U2VydmljZUV4Y2VwdGlvbn0gZnJvbSBcIi4uL2V4Y2VwdGlvbnNcIjtcbmltcG9ydCB7TW9uZXlVdGlsc30gZnJvbSBcIi4uL21vbmV5VXRpbHNcIjtcbmltcG9ydCB7TWVyY2hhbnRBcGl9IGZyb20gXCIuL21lcmNoYW50QXBpXCI7XG5pbXBvcnQge01lcmNoYW50TG9naW5SZXF1ZXN0fSBmcm9tIFwiLi9yZXF1ZXN0L21lcmNoYW50TG9naW5SZXF1ZXN0XCI7XG5pbXBvcnQge1RpY2tldFJlcXVlc3R9IGZyb20gXCIuL3JlcXVlc3QvdGlja2V0UmVxdWVzdFwiO1xuaW1wb3J0IHtSYXdCZXhSZXNwb25zZX0gZnJvbSBcIi4vcmVzcG9uc2UvYmV4UmVzcG9uc2VcIjtcbmltcG9ydCB7TWVyY2hhbnRMb2dpblJlc3BvbnNlfSBmcm9tIFwiLi9yZXNwb25zZS9tZXJjaGFudExvZ2luUmVzcG9uc2VcIjtcbmltcG9ydCB7TWVyY2hhbnROb25jZVJlc3BvbnNlfSBmcm9tIFwiLi9yZXNwb25zZS9ub25jZS9tZXJjaGFudE5vbmNlUmVzcG9uc2VcIjtcbmltcG9ydCB7Tm9uY2VSZXN1bHRSZXNwb25zZX0gZnJvbSBcIi4vcmVzcG9uc2Uvbm9uY2Uvbm9uY2VSZXN1bHRSZXNwb25zZVwiO1xuaW1wb3J0IHtQYXltZW50UmVzdWx0UmVzcG9uc2UsIFBvc0RhdGF9IGZyb20gXCIuL3Jlc3BvbnNlL3BheW1lbnRSZXN1bHRSZXNwb25zZVwiO1xuaW1wb3J0IHtUaWNrZXRSZXNwb25zZX0gZnJvbSBcIi4vcmVzcG9uc2UvdGlja2V0UmVzcG9uc2VcIjtcbmltcG9ydCB7RW5jcnlwdGlvblV0aWx9IGZyb20gXCIuL3NlY3VyaXR5XCI7XG5pbXBvcnQge1Rva2VufSBmcm9tIFwiLi90b2tlblwiO1xuXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKCk6IFByb21pc2U8TWVyY2hhbnRMb2dpblJlc3BvbnNlIHwgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uPiB7XG4gICAgICAgIGNvbnN0IG1lcmNoYW50SWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uTWVyY2hhbnRJZDtcbiAgICAgICAgY29uc3Qgc2lnbiA9IEVuY3J5cHRpb25VdGlsLnNpZ24odGhpcy5jb25maWd1cmF0aW9uLk1lcmNoYW50UHJpdmF0ZUtleSwgbWVyY2hhbnRJZCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgTWVyY2hhbnRMb2dpblJlcXVlc3QobWVyY2hhbnRJZCwgc2lnbik7XG4gICAgICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL2xvZ2luXCIsIHJlcXVlc3QpO1xuICAgICAgICAgICAgTWVyY2hhbnRBcGkubG9naW4odGhpcy5jb25maWd1cmF0aW9uLkJleEFwaUNvbmZpZ3VyYXRpb24uQmFzZVVybCwgcmVxdWVzdClcbiAgICAgICAgICAgICAgICAudGhlbigocmF3OiBSYXdCZXhSZXNwb25zZTxUb2tlbj4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2U6IE1lcmNoYW50TG9naW5SZXNwb25zZSA9IG5ldyBNZXJjaGFudExvZ2luUmVzcG9uc2UocmF3KTtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJNZXJjaGFudFNlcnZpY2UvbG9naW5cIiwgXCJNZXJjaGFudExvZ2luUmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL2xvZ2luXCIsIFwiTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24oZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uZVRpbWVUaWNrZXQoY29ubmVjdGlvblRva2VuOiBUb2tlbiwgYW1vdW50OiBudW1iZXIsIGluc3RhbGxtZW50VXJsPzogc3RyaW5nLCBub25jZVVybD86IHN0cmluZyk6IFByb21pc2U8VGlja2V0UmVzcG9uc2UgfCBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24+IHtcbiAgICAgICAgY29uc3QgdGlja2V0ID0gbmV3IFRpY2tldFJlcXVlc3QoXCJwYXltZW50XCIpO1xuICAgICAgICB0aWNrZXQuQW1vdW50ID0gTW9uZXlVdGlscy50b1RSWShhbW91bnQpO1xuICAgICAgICBpZiAoaW5zdGFsbG1lbnRVcmwpIHtcbiAgICAgICAgICAgIHRpY2tldC5JbnN0YWxsbWVudFVybCA9IGluc3RhbGxtZW50VXJsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub25jZVVybCkge1xuICAgICAgICAgICAgdGlja2V0Lk5vbmNlVXJsID0gbm9uY2VVcmw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBCbHVlYmlyZCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXJjaGFudFNlcnZpY2Uvb25lVGltZVRpY2tldFwiLCBjb25uZWN0aW9uVG9rZW4sIHRpY2tldCk7XG4gICAgICAgICAgICBNZXJjaGFudEFwaS50aWNrZXQodGhpcy5jb25maWd1cmF0aW9uLkJleEFwaUNvbmZpZ3VyYXRpb24uQmFzZVVybCwgY29ubmVjdGlvblRva2VuLCB0aWNrZXQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJhdzogUmF3QmV4UmVzcG9uc2U8VG9rZW4+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBUaWNrZXRSZXNwb25zZSA9IG5ldyBUaWNrZXRSZXNwb25zZShyYXcpO1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIk1lcmNoYW50U2VydmljZS9vbmVUaW1lVGlja2V0XCIsIFwiVGlja2V0UmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL29uZVRpbWVUaWNrZXRcIiwgXCJNZXJjaGFudFNlcnZpY2VFeGNlcHRpb25cIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbihlcnJvcikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZE5vbmNlUmVzcG9uc2UoY29ubmVjdGlvblRva2VuOiBUb2tlbiwgcmVxdWVzdDogTWVyY2hhbnROb25jZVJlc3BvbnNlKTogUHJvbWlzZTxOb25jZVJlc3VsdFJlc3BvbnNlIHwgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uPiB7XG4gICAgICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL3NlbmROb25jZVJlc3BvbnNlXCIsIGNvbm5lY3Rpb25Ub2tlbiwgcmVxdWVzdCk7XG4gICAgICAgICAgICBNZXJjaGFudEFwaS5jb21taXQodGhpcy5jb25maWd1cmF0aW9uLkJleEFwaUNvbmZpZ3VyYXRpb24uQmFzZVVybCwgY29ubmVjdGlvblRva2VuLCByZXF1ZXN0KVxuICAgICAgICAgICAgICAgIC50aGVuKChyYXc6IFJhd0JleFJlc3BvbnNlPFBvc0RhdGE+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBOb25jZVJlc3VsdFJlc3BvbnNlID0gbmV3IE5vbmNlUmVzdWx0UmVzcG9uc2UocmF3KTtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJNZXJjaGFudFNlcnZpY2Uvc2VuZE5vbmNlUmVzcG9uc2VcIiwgXCJOb25jZVJlc3VsdFJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1lcmNoYW50U2VydmljZS9zZW5kTm9uY2VSZXNwb25zZVwiLCBcIk1lcmNoYW50U2VydmljZUV4Y2VwdGlvblwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uKGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXN1bHQoY29ubmVjdGlvblRva2VuOiBUb2tlbiwgdGlja2V0SWQ6IHN0cmluZyk6IFByb21pc2U8UGF5bWVudFJlc3VsdFJlc3BvbnNlIHwgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uPiB7XG4gICAgICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL3Jlc3VsdFwiLCBjb25uZWN0aW9uVG9rZW4sIHRpY2tldElkKTtcbiAgICAgICAgICAgIE1lcmNoYW50QXBpLnJlc3VsdCh0aGlzLmNvbmZpZ3VyYXRpb24uQmV4QXBpQ29uZmlndXJhdGlvbi5CYXNlVXJsLCBjb25uZWN0aW9uVG9rZW4sIHRpY2tldElkKVxuICAgICAgICAgICAgICAgIC50aGVuKChyYXc6IFJhd0JleFJlc3BvbnNlPFBvc0RhdGE+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBQYXltZW50UmVzdWx0UmVzcG9uc2UgPSBuZXcgUGF5bWVudFJlc3VsdFJlc3BvbnNlKHJhdyk7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiTWVyY2hhbnRTZXJ2aWNlL3Jlc3VsdFwiLCBcIlBheW1lbnRSZXN1bHRSZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJNZXJjaGFudFNlcnZpY2UvcmVzdWx0XCIsIFwiTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24oZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19