"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var request = require("request-promise");
var debug_1 = require("../debug");
var exceptions_1 = require("../exceptions");
var token_1 = require("./token");
var MerchantApi = (function () {
    function MerchantApi() {
    }
    MerchantApi.login = function (baseUrl, body) {
        var opts = lodash_1.extend(MerchantApi.opts, { baseUrl: baseUrl, body: body });
        debug_1.Log.debug("MerchantApi", "merchant/login", opts);
        return request("merchant/login", opts);
    };
    MerchantApi.ticket = function (baseUrl, token, body) {
        if (!(token instanceof token_1.Token)) {
            throw new exceptions_1.MerchantServiceException("Token value invalid");
        }
        var opts = lodash_1.extend(MerchantApi.opts, { baseUrl: baseUrl, body: body, headers: { "Bex-Connection": token.Token } });
        debug_1.Log.debug("MerchantApi", "merchant/" + token.Path + "/ticket?type=" + body.Type, opts);
        return request("merchant/" + token.Path + "/ticket?type=" + body.Type, opts);
    };
    MerchantApi.result = function (baseUrl, token, ticketId) {
        if (!(token instanceof token_1.Token)) {
            throw new exceptions_1.MerchantServiceException("Token value invalid");
        }
        var opts = lodash_1.extend(MerchantApi.opts, { baseUrl: baseUrl, headers: { "Bex-Connection": token.Token } });
        debug_1.Log.debug("MerchantApi", "merchant/" + token.Path + "/ticket/" + ticketId + "/operate?name=result", opts);
        return request("merchant/" + token.Path + "/ticket/" + ticketId + "/operate?name=result", opts);
    };
    MerchantApi.commit = function (baseUrl, token, body) {
        if (!(token instanceof token_1.Token)) {
            throw new exceptions_1.MerchantServiceException("Token value invalid");
        }
        var opts = lodash_1.extend(MerchantApi.opts, { baseUrl: baseUrl, headers: { "Bex-Connection": token.Token, "Bex-Nonce": body.Nonce } });
        debug_1.Log.debug("MerchantApi", "merchant/" + token.Path + "/ticket/" + body.Id + "/operate?name=commit", opts);
        return request("merchant/" + token.Path + "/ticket/" + body.Id + "/operate?name=commit", opts);
    };
    return MerchantApi;
}());
MerchantApi.opts = {
    baseUrl: null,
    body: {},
    headers: {},
    json: true,
    method: "POST",
    timeout: 20000,
};
exports.MerchantApi = MerchantApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWVyY2hhbnQvbWVyY2hhbnRBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxpQ0FBOEI7QUFFOUIseUNBQTJDO0FBQzNDLGtDQUE2QjtBQUM3Qiw0Q0FBdUQ7QUFNdkQsaUNBQThCO0FBRTlCO0lBQUE7SUFnREEsQ0FBQztJQWxDaUIsaUJBQUssR0FBbkIsVUFBb0IsT0FBZSxFQUFFLElBQTBCO1FBQzNELElBQU0sSUFBSSxHQUFnQixlQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFDLE9BQU8sU0FBQSxFQUFFLElBQUksTUFBQSxFQUFDLENBQUMsQ0FBQztRQUNwRSxXQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFYSxrQkFBTSxHQUFwQixVQUFxQixPQUFlLEVBQUUsS0FBWSxFQUFFLElBQW1CO1FBQ25FLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSxxQ0FBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDRCxJQUFNLElBQUksR0FBZ0IsZUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBQyxPQUFPLFNBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLEVBQUUsRUFBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzlHLFdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGNBQVksS0FBSyxDQUFDLElBQUkscUJBQWdCLElBQUksQ0FBQyxJQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFZLEtBQUssQ0FBQyxJQUFJLHFCQUFnQixJQUFJLENBQUMsSUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFYSxrQkFBTSxHQUFwQixVQUFxQixPQUFlLEVBQUUsS0FBWSxFQUFFLFFBQWdCO1FBQ2hFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSxxQ0FBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDRCxJQUFNLElBQUksR0FBZ0IsZUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBQyxPQUFPLFNBQUEsRUFBRSxPQUFPLEVBQUUsRUFBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3hHLFdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGNBQVksS0FBSyxDQUFDLElBQUksZ0JBQVcsUUFBUSx5QkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQVksS0FBSyxDQUFDLElBQUksZ0JBQVcsUUFBUSx5QkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUUxRixDQUFDO0lBRWEsa0JBQU0sR0FBcEIsVUFBcUIsT0FBZSxFQUFFLEtBQVksRUFBRSxJQUEyQjtRQUMzRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLGFBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLElBQUkscUNBQXdCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM5RCxDQUFDO1FBQ0QsSUFBTSxJQUFJLEdBQWdCLGVBQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUMsT0FBTyxTQUFBLEVBQUUsT0FBTyxFQUFFLEVBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxFQUFDLENBQUMsQ0FBQztRQUNqSSxXQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxjQUFZLEtBQUssQ0FBQyxJQUFJLGdCQUFXLElBQUksQ0FBQyxFQUFFLHlCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9GLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBWSxLQUFLLENBQUMsSUFBSSxnQkFBVyxJQUFJLENBQUMsRUFBRSx5QkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBaEREO0FBQ2tCLGdCQUFJLEdBQWdCO0lBQzlCLE9BQU8sRUFBRSxJQUFJO0lBQ2IsSUFBSSxFQUFFLEVBQUU7SUFDUixPQUFPLEVBQUUsRUFJUjtJQUNELElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUUsS0FBSztDQUNqQixDQUFDO0FBWk8sa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNy4wNC4yMDE3XG4gKi9cblxuaW1wb3J0IHtleHRlbmR9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7Q29yZU9wdGlvbnN9IGZyb20gXCJyZXF1ZXN0XCI7XG5pbXBvcnQgKiBhcyByZXF1ZXN0IGZyb20gXCJyZXF1ZXN0LXByb21pc2VcIjtcbmltcG9ydCB7TG9nfSBmcm9tIFwiLi4vZGVidWdcIjtcbmltcG9ydCB7TWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9ufSBmcm9tIFwiLi4vZXhjZXB0aW9uc1wiO1xuaW1wb3J0IHtNZXJjaGFudExvZ2luUmVxdWVzdH0gZnJvbSBcIi4vcmVxdWVzdC9tZXJjaGFudExvZ2luUmVxdWVzdFwiO1xuaW1wb3J0IHtUaWNrZXRSZXF1ZXN0fSBmcm9tIFwiLi9yZXF1ZXN0L3RpY2tldFJlcXVlc3RcIjtcbmltcG9ydCB7UmF3QmV4UmVzcG9uc2V9IGZyb20gXCIuL3Jlc3BvbnNlL2JleFJlc3BvbnNlXCI7XG5pbXBvcnQge01lcmNoYW50Tm9uY2VSZXNwb25zZX0gZnJvbSBcIi4vcmVzcG9uc2Uvbm9uY2UvbWVyY2hhbnROb25jZVJlc3BvbnNlXCI7XG5pbXBvcnQge1Bvc0RhdGF9IGZyb20gXCIuL3Jlc3BvbnNlL3BheW1lbnRSZXN1bHRSZXNwb25zZVwiO1xuaW1wb3J0IHtUb2tlbn0gZnJvbSBcIi4vdG9rZW5cIjtcblxuZXhwb3J0IGNsYXNzIE1lcmNoYW50QXBpIHtcbiAgICBwdWJsaWMgc3RhdGljIG9wdHM6IENvcmVPcHRpb25zID0ge1xuICAgICAgICBiYXNlVXJsOiBudWxsLFxuICAgICAgICBib2R5OiB7fSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgLy8gXCJCZXgtQ29ubmVjdGlvblwiOiBUb2tlbi5Ub2tlbixcbiAgICAgICAgICAgIC8vIFwiQmV4LU5vbmNlXCI6IE1lcmNoYW50Tm9uY2VSZXNwb25zZS5Ob25jZSxcbiAgICAgICAgICAgIC8vIFwiQmV4LVRpY2tldFwiOiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICBqc29uOiB0cnVlLFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICB0aW1lb3V0OiAyMDAwMCxcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBsb2dpbihiYXNlVXJsOiBzdHJpbmcsIGJvZHk6IE1lcmNoYW50TG9naW5SZXF1ZXN0KTogUHJvbWlzZTxSYXdCZXhSZXNwb25zZTxUb2tlbj4gfCBFcnJvcj4ge1xuICAgICAgICBjb25zdCBvcHRzOiBDb3JlT3B0aW9ucyA9IGV4dGVuZChNZXJjaGFudEFwaS5vcHRzLCB7YmFzZVVybCwgYm9keX0pO1xuICAgICAgICBMb2cuZGVidWcoXCJNZXJjaGFudEFwaVwiLCBcIm1lcmNoYW50L2xvZ2luXCIsIG9wdHMpO1xuICAgICAgICByZXR1cm4gcmVxdWVzdChcIm1lcmNoYW50L2xvZ2luXCIsIG9wdHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgdGlja2V0KGJhc2VVcmw6IHN0cmluZywgdG9rZW46IFRva2VuLCBib2R5OiBUaWNrZXRSZXF1ZXN0KTogUHJvbWlzZTxSYXdCZXhSZXNwb25zZTxUb2tlbj4gfCBFcnJvcj4ge1xuICAgICAgICBpZiAoISh0b2tlbiBpbnN0YW5jZW9mIFRva2VuKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbihcIlRva2VuIHZhbHVlIGludmFsaWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3B0czogQ29yZU9wdGlvbnMgPSBleHRlbmQoTWVyY2hhbnRBcGkub3B0cywge2Jhc2VVcmwsIGJvZHksIGhlYWRlcnM6IHtcIkJleC1Db25uZWN0aW9uXCI6IHRva2VuLlRva2VufX0pO1xuICAgICAgICBMb2cuZGVidWcoXCJNZXJjaGFudEFwaVwiLCBgbWVyY2hhbnQvJHt0b2tlbi5QYXRofS90aWNrZXQ/dHlwZT0ke2JvZHkuVHlwZX1gLCBvcHRzKTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYG1lcmNoYW50LyR7dG9rZW4uUGF0aH0vdGlja2V0P3R5cGU9JHtib2R5LlR5cGV9YCwgb3B0cyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZXN1bHQoYmFzZVVybDogc3RyaW5nLCB0b2tlbjogVG9rZW4sIHRpY2tldElkOiBzdHJpbmcpOiBQcm9taXNlPFJhd0JleFJlc3BvbnNlPFBvc0RhdGE+IHwgRXJyb3I+IHtcbiAgICAgICAgaWYgKCEodG9rZW4gaW5zdGFuY2VvZiBUb2tlbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24oXCJUb2tlbiB2YWx1ZSBpbnZhbGlkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdHM6IENvcmVPcHRpb25zID0gZXh0ZW5kKE1lcmNoYW50QXBpLm9wdHMsIHtiYXNlVXJsLCBoZWFkZXJzOiB7XCJCZXgtQ29ubmVjdGlvblwiOiB0b2tlbi5Ub2tlbn19KTtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRBcGlcIiwgYG1lcmNoYW50LyR7dG9rZW4uUGF0aH0vdGlja2V0LyR7dGlja2V0SWR9L29wZXJhdGU/bmFtZT1yZXN1bHRgLCBvcHRzKTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3QoYG1lcmNoYW50LyR7dG9rZW4uUGF0aH0vdGlja2V0LyR7dGlja2V0SWR9L29wZXJhdGU/bmFtZT1yZXN1bHRgLCBvcHRzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29tbWl0KGJhc2VVcmw6IHN0cmluZywgdG9rZW46IFRva2VuLCBib2R5OiBNZXJjaGFudE5vbmNlUmVzcG9uc2UpOiBQcm9taXNlPFJhd0JleFJlc3BvbnNlPFBvc0RhdGE+IHwgRXJyb3I+IHtcbiAgICAgICAgaWYgKCEodG9rZW4gaW5zdGFuY2VvZiBUb2tlbikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNZXJjaGFudFNlcnZpY2VFeGNlcHRpb24oXCJUb2tlbiB2YWx1ZSBpbnZhbGlkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdHM6IENvcmVPcHRpb25zID0gZXh0ZW5kKE1lcmNoYW50QXBpLm9wdHMsIHtiYXNlVXJsLCBoZWFkZXJzOiB7XCJCZXgtQ29ubmVjdGlvblwiOiB0b2tlbi5Ub2tlbiwgXCJCZXgtTm9uY2VcIjogYm9keS5Ob25jZX19KTtcbiAgICAgICAgTG9nLmRlYnVnKFwiTWVyY2hhbnRBcGlcIiwgYG1lcmNoYW50LyR7dG9rZW4uUGF0aH0vdGlja2V0LyR7Ym9keS5JZH0vb3BlcmF0ZT9uYW1lPWNvbW1pdGAsIG9wdHMpO1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgbWVyY2hhbnQvJHt0b2tlbi5QYXRofS90aWNrZXQvJHtib2R5LklkfS9vcGVyYXRlP25hbWU9Y29tbWl0YCwgb3B0cyk7XG4gICAgfVxuXG59XG4iXX0=