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
    function PaymentResultResponse(obj) {
        return _super.call(this, obj) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudFJlc3VsdFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL3BheW1lbnRSZXN1bHRSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSw2Q0FBMEQ7QUFHMUQ7SUFBMkMseUNBQW9CO0lBQzNELCtCQUFtQixHQUE2QjtlQUM1QyxrQkFBTSxHQUFHLENBQUM7SUFDZCxDQUFDO0lBRU0sa0RBQWtCLEdBQXpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0JBQUkseUNBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1EQUFnQjthQUFwQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUwsNEJBQUM7QUFBRCxDQUFDLEFBekNELENBQTJDLHlCQUFXLEdBeUNyRDtBQXpDWSxzREFBcUI7QUEyQ2xDO0lBQUE7SUE4Q0EsQ0FBQztJQW5DRyxzQkFBSSwyQkFBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFTSxvQ0FBa0IsR0FBekI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7SUFFRCxzQkFBSSxxQ0FBZ0I7YUFBcEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkJBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0wsY0FBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuLy8gdHNsaW50OmRpc2FibGU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmltcG9ydCB7QmV4UmVzcG9uc2UsIFJhd0JleFJlc3BvbnNlfSBmcm9tIFwiLi9iZXhSZXNwb25zZVwiO1xuaW1wb3J0IHtQb3NSZXN1bHR9IGZyb20gXCIuL3Bvc1Jlc3VsdFwiO1xuXG5leHBvcnQgY2xhc3MgUGF5bWVudFJlc3VsdFJlc3BvbnNlIGV4dGVuZHMgQmV4UmVzcG9uc2U8UG9zRGF0YT4ge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo/OiBSYXdCZXhSZXNwb25zZTxQb3NEYXRhPikge1xuICAgICAgICBzdXBlcihvYmopO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1BheW1lbnRQdXJjaGFzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuaXNQYXltZW50UHVyY2hhc2VkKCk7XG4gICAgfVxuXG4gICAgZ2V0IFN0YXR1cygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLlN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgSW5zdGFsbG1lbnRDb3VudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLkluc3RhbGxtZW50Q291bnQ7XG4gICAgfVxuXG4gICAgZ2V0IFRvdGFsQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuVG90YWxBbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRGaXJzdDYoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5DYXJkRmlyc3Q2O1xuICAgIH1cblxuICAgIGdldCBDYXJkTGFzdDQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5DYXJkTGFzdDQ7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRIYXNoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuQ2FyZEhhc2g7XG4gICAgfVxuXG4gICAgZ2V0IEJrbVRva2VuSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5Ca21Ub2tlbklkO1xuICAgIH1cblxuICAgIGdldCBQb3NSZXN1bHQoKTogUG9zUmVzdWx0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5Qb3NSZXN1bHQ7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBQb3NEYXRhIHtcbiAgICBwcml2YXRlIHN0YXR1czogc3RyaW5nO1xuICAgIHByaXZhdGUgcGF5bWVudFB1cmNoYXNlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGluc3RhbGxtZW50Q291bnQ6IHN0cmluZztcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjYXJkRmlyc3Q2OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjYXJkTGFzdDQ6IHN0cmluZztcbiAgICBwcml2YXRlIGNhcmRIYXNoOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBia21Ub2tlbklkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb3NSZXN1bHQ6IFBvc1Jlc3VsdDtcblxuICAgIGdldCBTdGF0dXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1BheW1lbnRQdXJjaGFzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBheW1lbnRQdXJjaGFzZWQ7XG4gICAgfVxuXG4gICAgZ2V0IEluc3RhbGxtZW50Q291bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFsbG1lbnRDb3VudDtcbiAgICB9XG5cbiAgICBnZXQgVG90YWxBbW91bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxBbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRGaXJzdDYoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZEZpcnN0NjtcbiAgICB9XG5cbiAgICBnZXQgQ2FyZExhc3Q0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRMYXN0NDtcbiAgICB9XG5cbiAgICBnZXQgQ2FyZEhhc2goKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZEhhc2g7XG4gICAgfVxuXG4gICAgZ2V0IEJrbVRva2VuSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmttVG9rZW5JZDtcbiAgICB9XG5cbiAgICBnZXQgUG9zUmVzdWx0KCk6IFBvc1Jlc3VsdCB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc1Jlc3VsdDtcbiAgICB9XG59XG4iXX0=