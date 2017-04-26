"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MerchantNonceResponse = (function () {
    function MerchantNonceResponse() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnROb25jZVJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL25vbmNlL21lcmNoYW50Tm9uY2VSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BO0lBQUE7SUFxQ0EsQ0FBQztJQS9CRyxzQkFBSSx5Q0FBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVcsTUFBZTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksMENBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFZLE9BQWU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxQ0FBRTthQUFOO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsQ0FBQzthQUVELFVBQU8sRUFBVTtZQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUM7OztPQUpBO0lBS0wsNEJBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBckNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5leHBvcnQgY2xhc3MgTWVyY2hhbnROb25jZVJlc3BvbnNlIHtcbiAgICBwcml2YXRlIHJlc3VsdDogYm9vbGVhbjtcbiAgICBwcml2YXRlIG5vbmNlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgZ2V0IFJlc3VsdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgIH1cblxuICAgIHNldCBSZXN1bHQocmVzdWx0OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldCBOb25jZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ub25jZTtcbiAgICB9XG5cbiAgICBzZXQgTm9uY2Uobm9uY2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuXG4gICAgZ2V0IE1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgICB9XG5cbiAgICBzZXQgTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBnZXQgSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgc2V0IElkKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbn0iXX0=