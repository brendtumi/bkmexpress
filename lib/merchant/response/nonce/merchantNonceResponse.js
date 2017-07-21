"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MerchantNonceResponse = (function () {
    function MerchantNonceResponse() {
        this.message = "";
    }
    Object.defineProperty(MerchantNonceResponse.prototype, "Result", {
        get: function () {
            return this.result;
        },
        set: function (result) {
            this.result = result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MerchantNonceResponse.prototype, "Nonce", {
        get: function () {
            return this.nonce;
        },
        set: function (nonce) {
            this.nonce = nonce;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MerchantNonceResponse.prototype, "Message", {
        get: function () {
            return this.message;
        },
        set: function (message) {
            this.message = message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MerchantNonceResponse.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: true,
        configurable: true
    });
    return MerchantNonceResponse;
}());
exports.MerchantNonceResponse = MerchantNonceResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnROb25jZVJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL25vbmNlL21lcmNoYW50Tm9uY2VSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BO0lBQUE7UUFJWSxZQUFPLEdBQVcsRUFBRSxDQUFDO0lBaUNqQyxDQUFDO0lBL0JHLHNCQUFJLHlDQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVyxNQUFlO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksd0NBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwwQ0FBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVksT0FBZTtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHFDQUFFO2FBQU47WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDO2FBRUQsVUFBTyxFQUFVO1lBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQzs7O09BSkE7SUFLTCw0QkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmV4cG9ydCBjbGFzcyBNZXJjaGFudE5vbmNlUmVzcG9uc2Uge1xuICAgIHByaXZhdGUgcmVzdWx0OiBib29sZWFuO1xuICAgIHByaXZhdGUgbm9uY2U6IHN0cmluZztcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgZ2V0IFJlc3VsdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgIH1cblxuICAgIHNldCBSZXN1bHQocmVzdWx0OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldCBOb25jZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ub25jZTtcbiAgICB9XG5cbiAgICBzZXQgTm9uY2Uobm9uY2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuXG4gICAgZ2V0IE1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgICB9XG5cbiAgICBzZXQgTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBnZXQgSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgc2V0IElkKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbn1cbiJdfQ==