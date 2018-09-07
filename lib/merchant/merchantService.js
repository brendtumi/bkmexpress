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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21lcmNoYW50L21lcmNoYW50U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BLG1DQUFxQztBQUVyQyxrQ0FBNkI7QUFDN0IsNENBQXVEO0FBQ3ZELDRDQUF5QztBQUN6Qyw2Q0FBMEM7QUFDMUMsdUVBQW9FO0FBQ3BFLHlEQUFzRDtBQUV0RCwwRUFBdUU7QUFFdkUsNEVBQXlFO0FBQ3pFLDBFQUFnRjtBQUNoRiw0REFBeUQ7QUFDekQsdUNBQTBDO0FBRzFDO0lBR0kseUJBQW1CLGFBQTRCO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQUEsaUJBaUJDO1FBaEJHLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQ2pELElBQU0sSUFBSSxHQUFHLHlCQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEYsSUFBTSxPQUFPLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLFFBQVEsQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2hDLFdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDNUMseUJBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO2lCQUNyRSxJQUFJLENBQUMsVUFBQyxHQUEwQjtnQkFDN0IsSUFBTSxRQUFRLEdBQTBCLElBQUksNkNBQXFCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZFLFdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsdUJBQXVCLEVB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dGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyOC4wNC4yMDE3XG4gKi9cblxuaW1wb3J0ICogYXMgQmx1ZWJpcmQgZnJvbSBcImJsdWViaXJkXCI7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuLi9jb25maWcvY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHtMb2d9IGZyb20gXCIuLi9kZWJ1Z1wiO1xuaW1wb3J0IHtNZXJjaGFudFNlcnZpY2VFeGNlcHRpb259IGZyb20gXCIuLi9leGNlcHRpb25zXCI7XG5pbXBvcnQge01vbmV5VXRpbHN9IGZyb20gXCIuLi9tb25leVV0aWxzXCI7XG5pbXBvcnQge01lcmNoYW50QXBpfSBmcm9tIFwiLi9tZXJjaGFudEFwaVwiO1xuaW1wb3J0IHtNZXJjaGFudExvZ2luUmVxdWVzdH0gZnJvbSBcIi4vcmVxdWVzdC9tZXJjaGFudExvZ2luUmVxdWVzdFwiO1xuaW1wb3J0IHtUaWNrZXRSZXF1ZXN0fSBmcm9tIFwiLi9yZXF1ZXN0L3RpY2tldFJlcXVlc3RcIjtcbmltcG9ydCB7UmF3QmV4UmVzcG9uc2V9IGZyb20gXCIuL3Jlc3BvbnNlL2JleFJlc3BvbnNlXCI7XG5pbXBvcnQge01lcmNoYW50TG9naW5SZXNwb25zZX0gZnJvbSBcIi4vcmVzcG9uc2UvbWVyY2hhbnRMb2dpblJlc3BvbnNlXCI7XG5pbXBvcnQge01lcmNoYW50Tm9uY2VSZXNwb25zZX0gZnJvbSBcIi4vcmVzcG9uc2Uvbm9uY2UvbWVyY2hhbnROb25jZVJlc3BvbnNlXCI7XG5pbXBvcnQge05vbmNlUmVzdWx0UmVzcG9uc2V9IGZyb20gXCIuL3Jlc3BvbnNlL25vbmNlL25vbmNlUmVzdWx0UmVzcG9uc2VcIjtcbmltcG9ydCB7UGF5bWVudFJlc3VsdFJlc3BvbnNlLCBQb3NEYXRhfSBmcm9tIFwiLi9yZXNwb25zZS9wYXltZW50UmVzdWx0UmVzcG9uc2VcIjtcbmltcG9ydCB7VGlja2V0UmVzcG9uc2V9IGZyb20gXCIuL3Jlc3BvbnNlL3RpY2tldFJlc3BvbnNlXCI7XG5pbXBvcnQge0VuY3J5cHRpb25VdGlsfSBmcm9tIFwiLi9zZWN1cml0eVwiO1xuaW1wb3J0IHtUb2tlbn0gZnJvbSBcIi4vdG9rZW5cIjtcblxuZXhwb3J0IGNsYXNzIE1lcmNoYW50U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb247XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpbigpOiBQcm9taXNlPE1lcmNoYW50TG9naW5SZXNwb25zZSB8IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbj4ge1xuICAgICAgICBjb25zdCBtZXJjaGFudElkID0gdGhpcy5jb25maWd1cmF0aW9uLk1lcmNoYW50SWQ7XG4gICAgICAgIGNvbnN0IHNpZ24gPSBFbmNyeXB0aW9uVXRpbC5zaWduKHRoaXMuY29uZmlndXJhdGlvbi5NZXJjaGFudFByaXZhdGVLZXksIG1lcmNoYW50SWQpO1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IE1lcmNoYW50TG9naW5SZXF1ZXN0KG1lcmNoYW50SWQsIHNpZ24pO1xuICAgICAgICByZXR1cm4gbmV3IEJsdWViaXJkKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1lcmNoYW50U2VydmljZS9sb2dpblwiLCByZXF1ZXN0KTtcbiAgICAgICAgICAgIE1lcmNoYW50QXBpLmxvZ2luKHRoaXMuY29uZmlndXJhdGlvbi5CZXhBcGlDb25maWd1cmF0aW9uLkJhc2VVcmwsIHJlcXVlc3QpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJhdzogUmF3QmV4UmVzcG9uc2U8VG9rZW4+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBNZXJjaGFudExvZ2luUmVzcG9uc2UgPSBuZXcgTWVyY2hhbnRMb2dpblJlc3BvbnNlKHJhdyk7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiTWVyY2hhbnRTZXJ2aWNlL2xvZ2luXCIsIFwiTWVyY2hhbnRMb2dpblJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1lcmNoYW50U2VydmljZS9sb2dpblwiLCBcIk1lcmNoYW50U2VydmljZUV4Y2VwdGlvblwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uKGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbmVUaW1lVGlja2V0KGNvbm5lY3Rpb25Ub2tlbjogVG9rZW4sIGFtb3VudDogbnVtYmVyLCBpbnN0YWxsbWVudFVybD86IHN0cmluZywgbm9uY2VVcmw/OiBzdHJpbmcpOiBQcm9taXNlPFRpY2tldFJlc3BvbnNlIHwgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uPiB7XG4gICAgICAgIGNvbnN0IHRpY2tldCA9IG5ldyBUaWNrZXRSZXF1ZXN0KFwicGF5bWVudFwiKTtcbiAgICAgICAgdGlja2V0LkFtb3VudCA9IE1vbmV5VXRpbHMudG9UUlkoYW1vdW50KTtcbiAgICAgICAgaWYgKGluc3RhbGxtZW50VXJsKSB7XG4gICAgICAgICAgICB0aWNrZXQuSW5zdGFsbG1lbnRVcmwgPSBpbnN0YWxsbWVudFVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9uY2VVcmwpIHtcbiAgICAgICAgICAgIHRpY2tldC5Ob25jZVVybCA9IG5vbmNlVXJsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL29uZVRpbWVUaWNrZXRcIiwgXCJjb25uZWN0aW9uVG9rZW5cIiwgY29ubmVjdGlvblRva2VuKTtcbiAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1lcmNoYW50U2VydmljZS9vbmVUaW1lVGlja2V0XCIsIFwidGlja2V0XCIsIHRpY2tldCk7XG4gICAgICAgICAgICBNZXJjaGFudEFwaS50aWNrZXQodGhpcy5jb25maWd1cmF0aW9uLkJleEFwaUNvbmZpZ3VyYXRpb24uQmFzZVVybCwgY29ubmVjdGlvblRva2VuLCB0aWNrZXQpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJhdzogUmF3QmV4UmVzcG9uc2U8VG9rZW4+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBUaWNrZXRSZXNwb25zZSA9IG5ldyBUaWNrZXRSZXNwb25zZShyYXcpO1xuICAgICAgICAgICAgICAgICAgICBMb2cuaW5mbyhcIk1lcmNoYW50U2VydmljZS9vbmVUaW1lVGlja2V0XCIsIFwiVGlja2V0UmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL29uZVRpbWVUaWNrZXRcIiwgXCJNZXJjaGFudFNlcnZpY2VFeGNlcHRpb25cIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbihlcnJvcikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZE5vbmNlUmVzcG9uc2UoY29ubmVjdGlvblRva2VuOiBUb2tlbiwgcmVxdWVzdDogTWVyY2hhbnROb25jZVJlc3BvbnNlKTogUHJvbWlzZTxOb25jZVJlc3VsdFJlc3BvbnNlIHwgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uPiB7XG4gICAgICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL3NlbmROb25jZVJlc3BvbnNlXCIsIFwiY29ubmVjdGlvblRva2VuXCIsIGNvbm5lY3Rpb25Ub2tlbik7XG4gICAgICAgICAgICBMb2cuZGVidWcoXCJNZXJjaGFudFNlcnZpY2Uvc2VuZE5vbmNlUmVzcG9uc2VcIiwgXCJNZXJjaGFudE5vbmNlUmVzcG9uc2VcIiwgcmVxdWVzdCk7XG4gICAgICAgICAgICBNZXJjaGFudEFwaS5jb21taXQodGhpcy5jb25maWd1cmF0aW9uLkJleEFwaUNvbmZpZ3VyYXRpb24uQmFzZVVybCwgY29ubmVjdGlvblRva2VuLCByZXF1ZXN0KVxuICAgICAgICAgICAgICAgIC50aGVuKChyYXc6IFJhd0JleFJlc3BvbnNlPFBvc0RhdGE+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBOb25jZVJlc3VsdFJlc3BvbnNlID0gbmV3IE5vbmNlUmVzdWx0UmVzcG9uc2UocmF3KTtcbiAgICAgICAgICAgICAgICAgICAgTG9nLmluZm8oXCJNZXJjaGFudFNlcnZpY2Uvc2VuZE5vbmNlUmVzcG9uc2VcIiwgXCJOb25jZVJlc3VsdFJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIExvZy5kZWJ1ZyhcIk1lcmNoYW50U2VydmljZS9zZW5kTm9uY2VSZXNwb25zZVwiLCBcIk1lcmNoYW50U2VydmljZUV4Y2VwdGlvblwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uKGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXN1bHQoY29ubmVjdGlvblRva2VuOiBUb2tlbiwgdGlja2V0SWQ6IHN0cmluZyk6IFByb21pc2U8UGF5bWVudFJlc3VsdFJlc3BvbnNlIHwgTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uPiB7XG4gICAgICAgIHJldHVybiBuZXcgQmx1ZWJpcmQoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL3Jlc3VsdFwiLCBcImNvbm5lY3Rpb25Ub2tlblwiLCBjb25uZWN0aW9uVG9rZW4pO1xuICAgICAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRTZXJ2aWNlL3Jlc3VsdFwiLCBcInRpY2tldElkXCIsIHRpY2tldElkKTtcbiAgICAgICAgICAgIE1lcmNoYW50QXBpLnJlc3VsdCh0aGlzLmNvbmZpZ3VyYXRpb24uQmV4QXBpQ29uZmlndXJhdGlvbi5CYXNlVXJsLCBjb25uZWN0aW9uVG9rZW4sIHRpY2tldElkKVxuICAgICAgICAgICAgICAgIC50aGVuKChyYXc6IFJhd0JleFJlc3BvbnNlPFBvc0RhdGE+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBQYXltZW50UmVzdWx0UmVzcG9uc2UgPSBuZXcgUGF5bWVudFJlc3VsdFJlc3BvbnNlKHJhdyk7XG4gICAgICAgICAgICAgICAgICAgIExvZy5pbmZvKFwiTWVyY2hhbnRTZXJ2aWNlL3Jlc3VsdFwiLCBcIlBheW1lbnRSZXN1bHRSZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBMb2cuZGVidWcoXCJNZXJjaGFudFNlcnZpY2UvcmVzdWx0XCIsIFwiTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uXCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24oZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19