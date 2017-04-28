"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../exceptions");
var configuration_1 = require("./configuration");
var BexPayment = (function (_super) {
    __extends(BexPayment, _super);
    function BexPayment(environment, merchantId, merchantSecret) {
        var _this = this;
        if (!environment) {
            throw new exceptions_1.BexPaymentException("Environment can not be NULL or Empty.");
        }
        if (!merchantId) {
            throw new exceptions_1.BexPaymentException("Merchant id can not be NULL or Empty.");
        }
        if (!merchantSecret) {
            throw new exceptions_1.BexPaymentException("Merchant Private Key can not be NULL or Empty.");
        }
        _this = _super.call(this, environment, merchantId, merchantSecret) || this;
        return _this;
    }
    BexPayment.startBexPayment = function (environment, merchantId, merchantSecret) {
        if (!environment) {
            throw new exceptions_1.BexPaymentException("Environment can not be NULL or Empty.");
        }
        if (!merchantId) {
            throw new exceptions_1.BexPaymentException("Merchant id can not be NULL or Empty.");
        }
        if (!merchantSecret) {
            throw new exceptions_1.BexPaymentException("Merchant Private Key can not be NULL or Empty.");
        }
        return new configuration_1.Configuration(environment, merchantId, merchantSecret);
    };
    return BexPayment;
}(configuration_1.Configuration));
exports.BexPayment = BexPayment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV4UGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvYmV4UGF5bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSw0Q0FBa0Q7QUFDbEQsaURBQThDO0FBRTlDO0lBQWdDLDhCQUFhO0lBZXpDLG9CQUFtQixXQUFtQixFQUFFLFVBQWtCLEVBQUUsY0FBc0I7UUFBbEYsaUJBV0M7UUFWRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksZ0NBQW1CLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUMzRSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxJQUFJLGdDQUFtQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLElBQUksZ0NBQW1CLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUNwRixDQUFDO1FBQ0QsUUFBQSxrQkFBTSxXQUFXLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxTQUFDOztJQUNuRCxDQUFDO0lBekJhLDBCQUFlLEdBQTdCLFVBQThCLFdBQW1CLEVBQUUsVUFBa0IsRUFBRSxjQUFzQjtRQUN6RixFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLElBQUksZ0NBQW1CLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUMzRSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxJQUFJLGdDQUFtQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLElBQUksZ0NBQW1CLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUNwRixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksNkJBQWEsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFlTCxpQkFBQztBQUFELENBQUMsQUE1QkQsQ0FBZ0MsNkJBQWEsR0E0QjVDO0FBNUJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmltcG9ydCB7RW52aXJvbm1lbnR9IGZyb20gXCIuLi9lbnVtc1wiO1xuaW1wb3J0IHtCZXhQYXltZW50RXhjZXB0aW9ufSBmcm9tIFwiLi4vZXhjZXB0aW9uc1wiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBCZXhQYXltZW50IGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XG4gICAgcHVibGljIHN0YXRpYyBzdGFydEJleFBheW1lbnQoZW52aXJvbm1lbnQ6IHN0cmluZywgbWVyY2hhbnRJZDogc3RyaW5nLCBtZXJjaGFudFNlY3JldDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghZW52aXJvbm1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCZXhQYXltZW50RXhjZXB0aW9uKFwiRW52aXJvbm1lbnQgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lcmNoYW50SWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCZXhQYXltZW50RXhjZXB0aW9uKFwiTWVyY2hhbnQgaWQgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lcmNoYW50U2VjcmV0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmV4UGF5bWVudEV4Y2VwdGlvbihcIk1lcmNoYW50IFByaXZhdGUgS2V5IGNhbiBub3QgYmUgTlVMTCBvciBFbXB0eS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IENvbmZpZ3VyYXRpb24oZW52aXJvbm1lbnQsIG1lcmNoYW50SWQsIG1lcmNoYW50U2VjcmV0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZW52aXJvbm1lbnQ6IHN0cmluZywgbWVyY2hhbnRJZDogc3RyaW5nLCBtZXJjaGFudFNlY3JldDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghZW52aXJvbm1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCZXhQYXltZW50RXhjZXB0aW9uKFwiRW52aXJvbm1lbnQgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lcmNoYW50SWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCZXhQYXltZW50RXhjZXB0aW9uKFwiTWVyY2hhbnQgaWQgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1lcmNoYW50U2VjcmV0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmV4UGF5bWVudEV4Y2VwdGlvbihcIk1lcmNoYW50IFByaXZhdGUgS2V5IGNhbiBub3QgYmUgTlVMTCBvciBFbXB0eS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoZW52aXJvbm1lbnQsIG1lcmNoYW50SWQsIG1lcmNoYW50U2VjcmV0KTtcbiAgICB9XG5cbn0iXX0=