"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MerchantLoginRequest = (function () {
    function MerchantLoginRequest() {
    }
    MerchantLoginRequest.prototype.MerchantLoginRequest = function (id, signature) {
        this.id = id;
        this.signature = signature;
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRMb2dpblJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVxdWVzdC9tZXJjaGFudExvZ2luUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BO0lBQUE7SUF5QkEsQ0FBQztJQXBCVSxtREFBb0IsR0FBM0IsVUFBNEIsRUFBVSxFQUFFLFNBQWlCO1FBQ3JELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELHNCQUFJLG9DQUFFO2FBQU47WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDO2FBRUQsVUFBTyxFQUFVO1lBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwyQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWMsU0FBaUI7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDL0IsQ0FBQzs7O09BSkE7SUFLTCwyQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6Qlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmV4cG9ydCBjbGFzcyBNZXJjaGFudExvZ2luUmVxdWVzdCB7XG5cbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzaWduYXR1cmU6IHN0cmluZztcblxuICAgIHB1YmxpYyBNZXJjaGFudExvZ2luUmVxdWVzdChpZDogc3RyaW5nLCBzaWduYXR1cmU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIH1cblxuICAgIGdldCBJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG5cbiAgICBzZXQgSWQoaWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgZ2V0IFNpZ25hdHVyZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zaWduYXR1cmU7XG4gICAgfVxuXG4gICAgc2V0IFNpZ25hdHVyZShzaWduYXR1cmU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB9XG59XG4iXX0=