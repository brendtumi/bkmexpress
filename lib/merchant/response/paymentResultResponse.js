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
        if (obj) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudFJlc3VsdFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL3BheW1lbnRSZXN1bHRSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSw2Q0FBMEQ7QUFDMUQseUNBQXNDO0FBRXRDO0lBQTJDLHlDQUFvQjtJQUMzRCwrQkFBbUIsR0FBNkI7UUFBaEQsWUFDSSxrQkFBTSxHQUFHLENBQUMsU0FFYjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUN0QyxDQUFDO0lBRU0sa0RBQWtCLEdBQXpCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0JBQUkseUNBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1EQUFnQjthQUFwQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUwsNEJBQUM7QUFBRCxDQUFDLEFBMUNELENBQTJDLHlCQUFXLEdBMENyRDtBQTFDWSxzREFBcUI7QUE0Q2xDO0lBV0ksaUJBQW1CLEdBQVM7UUFDeEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1lBQzdDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7WUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBSSwyQkFBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFTSxvQ0FBa0IsR0FBekI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7SUFFRCxzQkFBSSxxQ0FBZ0I7YUFBcEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkJBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBQ0wsY0FBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUE1RFksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuLy8gdHNsaW50OmRpc2FibGU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmltcG9ydCB7QmV4UmVzcG9uc2UsIFJhd0JleFJlc3BvbnNlfSBmcm9tIFwiLi9iZXhSZXNwb25zZVwiO1xuaW1wb3J0IHtQb3NSZXN1bHR9IGZyb20gXCIuL3Bvc1Jlc3VsdFwiO1xuXG5leHBvcnQgY2xhc3MgUGF5bWVudFJlc3VsdFJlc3BvbnNlIGV4dGVuZHMgQmV4UmVzcG9uc2U8UG9zRGF0YT4ge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo/OiBSYXdCZXhSZXNwb25zZTxQb3NEYXRhPikge1xuICAgICAgICBzdXBlcihvYmopO1xuICAgICAgICB0aGlzLkRhdGEgPSBuZXcgUG9zRGF0YShvYmouZGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzUGF5bWVudFB1cmNoYXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5pc1BheW1lbnRQdXJjaGFzZWQoKTtcbiAgICB9XG5cbiAgICBnZXQgU3RhdHVzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuU3RhdHVzO1xuICAgIH1cblxuICAgIGdldCBJbnN0YWxsbWVudENvdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuSW5zdGFsbG1lbnRDb3VudDtcbiAgICB9XG5cbiAgICBnZXQgVG90YWxBbW91bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5Ub3RhbEFtb3VudDtcbiAgICB9XG5cbiAgICBnZXQgQ2FyZEZpcnN0NigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLkNhcmRGaXJzdDY7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRMYXN0NCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLkNhcmRMYXN0NDtcbiAgICB9XG5cbiAgICBnZXQgQ2FyZEhhc2goKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5DYXJkSGFzaDtcbiAgICB9XG5cbiAgICBnZXQgQmttVG9rZW5JZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLkJrbVRva2VuSWQ7XG4gICAgfVxuXG4gICAgZ2V0IFBvc1Jlc3VsdCgpOiBQb3NSZXN1bHQge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLlBvc1Jlc3VsdDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFBvc0RhdGEge1xuICAgIHByaXZhdGUgc3RhdHVzOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXltZW50UHVyY2hhc2VkOiBib29sZWFuO1xuICAgIHByaXZhdGUgaW5zdGFsbG1lbnRDb3VudDogc3RyaW5nO1xuICAgIHByaXZhdGUgdG90YWxBbW91bnQ6IHN0cmluZztcbiAgICBwcml2YXRlIGNhcmRGaXJzdDY6IHN0cmluZztcbiAgICBwcml2YXRlIGNhcmRMYXN0NDogc3RyaW5nO1xuICAgIHByaXZhdGUgY2FyZEhhc2g6IHN0cmluZztcbiAgICBwcml2YXRlIGJrbVRva2VuSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHBvc1Jlc3VsdDogUG9zUmVzdWx0O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IGFueSkge1xuICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IG9iai5zdGF0dXM7XG4gICAgICAgICAgICB0aGlzLnBheW1lbnRQdXJjaGFzZWQgPSBvYmoucGF5bWVudFB1cmNoYXNlZDtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFsbG1lbnRDb3VudCA9IG9iai5pbnN0YWxsbWVudENvdW50O1xuICAgICAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IG9iai50b3RhbEFtb3VudDtcbiAgICAgICAgICAgIHRoaXMuY2FyZEZpcnN0NiA9IG9iai5jYXJkRmlyc3Q2O1xuICAgICAgICAgICAgdGhpcy5jYXJkTGFzdDQgPSBvYmouY2FyZExhc3Q0O1xuICAgICAgICAgICAgdGhpcy5jYXJkSGFzaCA9IG9iai5jYXJkSGFzaDtcbiAgICAgICAgICAgIHRoaXMuYmttVG9rZW5JZCA9IG9iai5ia21Ub2tlbklkO1xuICAgICAgICAgICAgdGhpcy5wb3NSZXN1bHQgPSBuZXcgUG9zUmVzdWx0KG9iai5wb3NSZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IFN0YXR1cygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gICAgfVxuXG4gICAgcHVibGljIGlzUGF5bWVudFB1cmNoYXNlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF5bWVudFB1cmNoYXNlZDtcbiAgICB9XG5cbiAgICBnZXQgSW5zdGFsbG1lbnRDb3VudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YWxsbWVudENvdW50O1xuICAgIH1cblxuICAgIGdldCBUb3RhbEFtb3VudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50b3RhbEFtb3VudDtcbiAgICB9XG5cbiAgICBnZXQgQ2FyZEZpcnN0NigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJkRmlyc3Q2O1xuICAgIH1cblxuICAgIGdldCBDYXJkTGFzdDQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZExhc3Q0O1xuICAgIH1cblxuICAgIGdldCBDYXJkSGFzaCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJkSGFzaDtcbiAgICB9XG5cbiAgICBnZXQgQmttVG9rZW5JZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5ia21Ub2tlbklkO1xuICAgIH1cblxuICAgIGdldCBQb3NSZXN1bHQoKTogUG9zUmVzdWx0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zUmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==