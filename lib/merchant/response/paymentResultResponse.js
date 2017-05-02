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
var posResult_1 = require("./posResult");
var PaymentResultResponse = (function (_super) {
    __extends(PaymentResultResponse, _super);
    function PaymentResultResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Data = new PosData(obj.data);
        return _this;
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
    function PosData(obj) {
        this.status = obj.status;
        this.paymentPurchased = obj.paymentPurchased;
        this.installmentCount = obj.installmentCount;
        this.totalAmount = obj.totalAmount;
        this.cardFirst6 = obj.cardFirst6;
        this.cardLast4 = obj.cardLast4;
        this.cardHash = obj.cardHash;
        this.bkmTokenId = obj.bkmTokenId;
        this.posResult = new posResult_1.PosResult(obj.posResult);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudFJlc3VsdFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL3BheW1lbnRSZXN1bHRSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSw2Q0FBMEQ7QUFDMUQseUNBQXNDO0FBRXRDO0lBQTJDLHlDQUFvQjtJQUMzRCwrQkFBbUIsR0FBNkI7UUFBaEQsWUFDSSxrQkFBTSxHQUFHLENBQUMsU0FFYjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUN0QyxDQUFDO0lBRU0sa0RBQWtCLEdBQXpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0JBQUkseUNBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1EQUFnQjthQUFwQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUwsNEJBQUM7QUFBRCxDQUFDLEFBMUNELENBQTJDLHlCQUFXLEdBMENyRDtBQTFDWSxzREFBcUI7QUE0Q2xDO0lBV0ksaUJBQW1CLEdBQVM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVsRCxDQUFDO0lBRUQsc0JBQUksMkJBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRU0sb0NBQWtCLEdBQXpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQUkscUNBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZCQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNMLGNBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDO0FBM0RZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbi8vIHRzbGludDpkaXNhYmxlOm1heC1jbGFzc2VzLXBlci1maWxlXG5pbXBvcnQge0JleFJlc3BvbnNlLCBSYXdCZXhSZXNwb25zZX0gZnJvbSBcIi4vYmV4UmVzcG9uc2VcIjtcbmltcG9ydCB7UG9zUmVzdWx0fSBmcm9tIFwiLi9wb3NSZXN1bHRcIjtcblxuZXhwb3J0IGNsYXNzIFBheW1lbnRSZXN1bHRSZXNwb25zZSBleHRlbmRzIEJleFJlc3BvbnNlPFBvc0RhdGE+IHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqPzogUmF3QmV4UmVzcG9uc2U8UG9zRGF0YT4pIHtcbiAgICAgICAgc3VwZXIob2JqKTtcbiAgICAgICAgdGhpcy5EYXRhID0gbmV3IFBvc0RhdGEob2JqLmRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1BheW1lbnRQdXJjaGFzZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuaXNQYXltZW50UHVyY2hhc2VkKCk7XG4gICAgfVxuXG4gICAgZ2V0IFN0YXR1cygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLlN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgSW5zdGFsbG1lbnRDb3VudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLkluc3RhbGxtZW50Q291bnQ7XG4gICAgfVxuXG4gICAgZ2V0IFRvdGFsQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuVG90YWxBbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRGaXJzdDYoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5DYXJkRmlyc3Q2O1xuICAgIH1cblxuICAgIGdldCBDYXJkTGFzdDQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5DYXJkTGFzdDQ7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRIYXNoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuQ2FyZEhhc2g7XG4gICAgfVxuXG4gICAgZ2V0IEJrbVRva2VuSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5Ca21Ub2tlbklkO1xuICAgIH1cblxuICAgIGdldCBQb3NSZXN1bHQoKTogUG9zUmVzdWx0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5Qb3NSZXN1bHQ7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBQb3NEYXRhIHtcbiAgICBwcml2YXRlIHN0YXR1czogc3RyaW5nO1xuICAgIHByaXZhdGUgcGF5bWVudFB1cmNoYXNlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGluc3RhbGxtZW50Q291bnQ6IHN0cmluZztcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjYXJkRmlyc3Q2OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjYXJkTGFzdDQ6IHN0cmluZztcbiAgICBwcml2YXRlIGNhcmRIYXNoOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBia21Ub2tlbklkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb3NSZXN1bHQ6IFBvc1Jlc3VsdDtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBvYmouc3RhdHVzO1xuICAgICAgICB0aGlzLnBheW1lbnRQdXJjaGFzZWQgPSBvYmoucGF5bWVudFB1cmNoYXNlZDtcbiAgICAgICAgdGhpcy5pbnN0YWxsbWVudENvdW50ID0gb2JqLmluc3RhbGxtZW50Q291bnQ7XG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSBvYmoudG90YWxBbW91bnQ7XG4gICAgICAgIHRoaXMuY2FyZEZpcnN0NiA9IG9iai5jYXJkRmlyc3Q2O1xuICAgICAgICB0aGlzLmNhcmRMYXN0NCA9IG9iai5jYXJkTGFzdDQ7XG4gICAgICAgIHRoaXMuY2FyZEhhc2ggPSBvYmouY2FyZEhhc2g7XG4gICAgICAgIHRoaXMuYmttVG9rZW5JZCA9IG9iai5ia21Ub2tlbklkO1xuICAgICAgICB0aGlzLnBvc1Jlc3VsdCA9IG5ldyBQb3NSZXN1bHQob2JqLnBvc1Jlc3VsdCk7XG5cbiAgICB9XG5cbiAgICBnZXQgU3RhdHVzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNQYXltZW50UHVyY2hhc2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXltZW50UHVyY2hhc2VkO1xuICAgIH1cblxuICAgIGdldCBJbnN0YWxsbWVudENvdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbGxtZW50Q291bnQ7XG4gICAgfVxuXG4gICAgZ2V0IFRvdGFsQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsQW1vdW50O1xuICAgIH1cblxuICAgIGdldCBDYXJkRmlyc3Q2KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRGaXJzdDY7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRMYXN0NCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJkTGFzdDQ7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRIYXNoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRIYXNoO1xuICAgIH1cblxuICAgIGdldCBCa21Ub2tlbklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmJrbVRva2VuSWQ7XG4gICAgfVxuXG4gICAgZ2V0IFBvc1Jlc3VsdCgpOiBQb3NSZXN1bHQge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NSZXN1bHQ7XG4gICAgfVxufVxuIl19