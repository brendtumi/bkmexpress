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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnROb25jZVJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL25vbmNlL21lcmNoYW50Tm9uY2VSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BO0lBQUE7UUFJWSxZQUFPLEdBQVcsRUFBRSxDQUFDO0lBaUNqQyxDQUFDO0lBL0JHLHNCQUFJLHlDQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVcsTUFBZTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHdDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDBDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVksT0FBZTtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHFDQUFFO2FBQU47WUFDSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsQ0FBQzthQUVELFVBQU8sRUFBVTtZQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUM7OztPQUpBO0lBS0wsNEJBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBckNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5leHBvcnQgY2xhc3MgTWVyY2hhbnROb25jZVJlc3BvbnNlIHtcbiAgICBwcml2YXRlIHJlc3VsdDogYm9vbGVhbjtcbiAgICBwcml2YXRlIG5vbmNlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgbWVzc2FnZTogc3RyaW5nID0gXCJcIjtcblxuICAgIGdldCBSZXN1bHQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgICB9XG5cbiAgICBzZXQgUmVzdWx0KHJlc3VsdDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXQgTm9uY2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9uY2U7XG4gICAgfVxuXG4gICAgc2V0IE5vbmNlKG5vbmNlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cblxuICAgIGdldCBNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XG4gICAgfVxuXG4gICAgc2V0IE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgZ2V0IElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIHNldCBJZChpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG59XG4iXX0=