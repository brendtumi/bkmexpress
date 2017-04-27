"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MerchantLoginRequest = (function () {
    function MerchantLoginRequest(id, signature) {
        this.id = id;
        this.signature = signature;
    }
    Object.defineProperty(MerchantLoginRequest.prototype, "Id", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MerchantLoginRequest.prototype, "Signature", {
        get: function () {
            return this.signature;
        },
        set: function (signature) {
            this.signature = signature;
        },
        enumerable: true,
        configurable: true
    });
    return MerchantLoginRequest;
}());
exports.MerchantLoginRequest = MerchantLoginRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRMb2dpblJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVxdWVzdC9tZXJjaGFudExvZ2luUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BO0lBS0ksOEJBQW1CLEVBQVUsRUFBRSxTQUFpQjtRQUM1QyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQkFBSSxvQ0FBRTthQUFOO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsQ0FBQzthQUVELFVBQU8sRUFBVTtZQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksMkNBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFjLFNBQWlCO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUpBO0lBS0wsMkJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBekJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5leHBvcnQgY2xhc3MgTWVyY2hhbnRMb2dpblJlcXVlc3Qge1xuXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgc2lnbmF0dXJlOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgc2lnbmF0dXJlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB9XG5cbiAgICBnZXQgSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgc2V0IElkKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIGdldCBTaWduYXR1cmUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICAgIH1cblxuICAgIHNldCBTaWduYXR1cmUoc2lnbmF0dXJlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgfVxufVxuIl19