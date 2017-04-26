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
var bexResponse_1 = require("./bexResponse");
var PaymentResultResponse = (function (_super) {
    __extends(PaymentResultResponse, _super);
    function PaymentResultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentResultResponse.prototype.isPaymentPurchased = function () {
        return this.Data.isPaymentPurchased();
    };
    Object.defineProperty(PaymentResultResponse.prototype, "Status", {
        get: function () {
            return this.Data.Status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentResultResponse.prototype, "InstallmentCount", {
        get: function () {
            return this.Data.InstallmentCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentResultResponse.prototype, "TotalAmount", {
        get: function () {
            return this.Data.TotalAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentResultResponse.prototype, "CardFirst6", {
        get: function () {
            return this.Data.CardFirst6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentResultResponse.prototype, "CardLast4", {
        get: function () {
            return this.Data.CardLast4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentResultResponse.prototype, "CardHash", {
        get: function () {
            return this.Data.CardHash;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentResultResponse.prototype, "BkmTokenId", {
        get: function () {
            return this.Data.BkmTokenId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentResultResponse.prototype, "PosResult", {
        get: function () {
            return this.Data.PosResult;
        },
        enumerable: true,
        configurable: true
    });
    return PaymentResultResponse;
}(bexResponse_1.BexResponse));
exports.PaymentResultResponse = PaymentResultResponse;
var PosData = (function () {
    function PosData() {
    }
    Object.defineProperty(PosData.prototype, "Status", {
        get: function () {
            return this.status;
        },
        enumerable: true,
        configurable: true
    });
    PosData.prototype.isPaymentPurchased = function () {
        return this.paymentPurchased;
    };
    Object.defineProperty(PosData.prototype, "InstallmentCount", {
        get: function () {
            return this.installmentCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosData.prototype, "TotalAmount", {
        get: function () {
            return this.totalAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosData.prototype, "CardFirst6", {
        get: function () {
            return this.cardFirst6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosData.prototype, "CardLast4", {
        get: function () {
            return this.cardLast4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosData.prototype, "CardHash", {
        get: function () {
            return this.cardHash;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosData.prototype, "BkmTokenId", {
        get: function () {
            return this.bkmTokenId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosData.prototype, "PosResult", {
        get: function () {
            return this.posResult;
        },
        enumerable: true,
        configurable: true
    });
    return PosData;
}());
exports.PosData = PosData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudFJlc3VsdFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL3BheW1lbnRSZXN1bHRSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSw2Q0FBMEM7QUFHMUM7SUFBMkMseUNBQW9CO0lBQS9EOztJQXFDQSxDQUFDO0lBcENVLGtEQUFrQixHQUF6QjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHNCQUFJLHlDQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtREFBZ0I7YUFBcEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2Q0FBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2Q0FBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVMLDRCQUFDO0FBQUQsQ0FBQyxBQXJDRCxDQUEyQyx5QkFBVyxHQXFDckQ7QUFyQ1ksc0RBQXFCO0FBdUNsQztJQUFBO0lBOENBLENBQUM7SUFuQ0csc0JBQUksMkJBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRU0sb0NBQWtCLEdBQXpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQUkscUNBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZCQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNMLGNBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbi8vIHRzbGludDpkaXNhYmxlOm1heC1jbGFzc2VzLXBlci1maWxlXG5pbXBvcnQge0JleFJlc3BvbnNlfSBmcm9tIFwiLi9iZXhSZXNwb25zZVwiO1xuaW1wb3J0IHtQb3NSZXN1bHR9IGZyb20gXCIuL3Bvc1Jlc3VsdFwiO1xuXG5leHBvcnQgY2xhc3MgUGF5bWVudFJlc3VsdFJlc3BvbnNlIGV4dGVuZHMgQmV4UmVzcG9uc2U8UG9zRGF0YT4ge1xuICAgIHB1YmxpYyBpc1BheW1lbnRQdXJjaGFzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuaXNQYXltZW50UHVyY2hhc2VkKCk7XG4gICAgfVxuXG4gICAgZ2V0IFN0YXR1cygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLlN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgSW5zdGFsbG1lbnRDb3VudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLkluc3RhbGxtZW50Q291bnQ7XG4gICAgfVxuXG4gICAgZ2V0IFRvdGFsQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuVG90YWxBbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRGaXJzdDYoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5DYXJkRmlyc3Q2O1xuICAgIH1cblxuICAgIGdldCBDYXJkTGFzdDQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5DYXJkTGFzdDQ7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRIYXNoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuQ2FyZEhhc2g7XG4gICAgfVxuXG4gICAgZ2V0IEJrbVRva2VuSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5Ca21Ub2tlbklkO1xuICAgIH1cblxuICAgIGdldCBQb3NSZXN1bHQoKTogUG9zUmVzdWx0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5Qb3NSZXN1bHQ7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBQb3NEYXRhIHtcbiAgICBwcml2YXRlIHN0YXR1czogc3RyaW5nO1xuICAgIHByaXZhdGUgcGF5bWVudFB1cmNoYXNlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGluc3RhbGxtZW50Q291bnQ6IHN0cmluZztcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjYXJkRmlyc3Q2OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjYXJkTGFzdDQ6IHN0cmluZztcbiAgICBwcml2YXRlIGNhcmRIYXNoOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBia21Ub2tlbklkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb3NSZXN1bHQ6IFBvc1Jlc3VsdDtcblxuICAgIGdldCBTdGF0dXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1BheW1lbnRQdXJjaGFzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBheW1lbnRQdXJjaGFzZWQ7XG4gICAgfVxuXG4gICAgZ2V0IEluc3RhbGxtZW50Q291bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFsbG1lbnRDb3VudDtcbiAgICB9XG5cbiAgICBnZXQgVG90YWxBbW91bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxBbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRGaXJzdDYoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZEZpcnN0NjtcbiAgICB9XG5cbiAgICBnZXQgQ2FyZExhc3Q0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRMYXN0NDtcbiAgICB9XG5cbiAgICBnZXQgQ2FyZEhhc2goKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZEhhc2g7XG4gICAgfVxuXG4gICAgZ2V0IEJrbVRva2VuSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmttVG9rZW5JZDtcbiAgICB9XG5cbiAgICBnZXQgUG9zUmVzdWx0KCk6IFBvc1Jlc3VsdCB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc1Jlc3VsdDtcbiAgICB9XG59XG4iXX0=