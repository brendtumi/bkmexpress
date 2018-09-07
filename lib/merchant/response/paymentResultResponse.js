"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudFJlc3VsdFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL3BheW1lbnRSZXN1bHRSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFRQSw2Q0FBMEQ7QUFDMUQseUNBQXNDO0FBRXRDO0lBQTJDLHlDQUFvQjtJQUMzRCwrQkFBbUIsR0FBNkI7UUFBaEQsWUFDSSxrQkFBTSxHQUFHLENBQUMsU0FFYjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUN0QyxDQUFDO0lBRU0sa0RBQWtCLEdBQXpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHNCQUFJLHlDQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbURBQWdCO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOENBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2Q0FBVTthQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2Q0FBVTthQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUwsNEJBQUM7QUFBRCxDQUFDLEFBMUNELENBQTJDLHlCQUFXLEdBMENyRDtBQTFDWSxzREFBcUI7QUE0Q2xDO0lBV0ksaUJBQW1CLEdBQVM7UUFDeEIsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztZQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1lBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQztJQUVELHNCQUFJLDJCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFTSxvQ0FBa0IsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQUkscUNBQWdCO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnQ0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQVU7YUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQTVERCxJQTREQztBQTVEWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuaW1wb3J0IHtCZXhSZXNwb25zZSwgUmF3QmV4UmVzcG9uc2V9IGZyb20gXCIuL2JleFJlc3BvbnNlXCI7XG5pbXBvcnQge1Bvc1Jlc3VsdH0gZnJvbSBcIi4vcG9zUmVzdWx0XCI7XG5cbmV4cG9ydCBjbGFzcyBQYXltZW50UmVzdWx0UmVzcG9uc2UgZXh0ZW5kcyBCZXhSZXNwb25zZTxQb3NEYXRhPiB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IFJhd0JleFJlc3BvbnNlPFBvc0RhdGE+KSB7XG4gICAgICAgIHN1cGVyKG9iaik7XG4gICAgICAgIHRoaXMuRGF0YSA9IG5ldyBQb3NEYXRhKG9iai5kYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNQYXltZW50UHVyY2hhc2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLmlzUGF5bWVudFB1cmNoYXNlZCgpO1xuICAgIH1cblxuICAgIGdldCBTdGF0dXMoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5TdGF0dXM7XG4gICAgfVxuXG4gICAgZ2V0IEluc3RhbGxtZW50Q291bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YS5JbnN0YWxsbWVudENvdW50O1xuICAgIH1cblxuICAgIGdldCBUb3RhbEFtb3VudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLlRvdGFsQW1vdW50O1xuICAgIH1cblxuICAgIGdldCBDYXJkRmlyc3Q2KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuQ2FyZEZpcnN0NjtcbiAgICB9XG5cbiAgICBnZXQgQ2FyZExhc3Q0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuQ2FyZExhc3Q0O1xuICAgIH1cblxuICAgIGdldCBDYXJkSGFzaCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5EYXRhLkNhcmRIYXNoO1xuICAgIH1cblxuICAgIGdldCBCa21Ub2tlbklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuQmttVG9rZW5JZDtcbiAgICB9XG5cbiAgICBnZXQgUG9zUmVzdWx0KCk6IFBvc1Jlc3VsdCB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGEuUG9zUmVzdWx0O1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgUG9zRGF0YSB7XG4gICAgcHJpdmF0ZSBzdGF0dXM6IHN0cmluZztcbiAgICBwcml2YXRlIHBheW1lbnRQdXJjaGFzZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBpbnN0YWxsbWVudENvdW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0b3RhbEFtb3VudDogc3RyaW5nO1xuICAgIHByaXZhdGUgY2FyZEZpcnN0Njogc3RyaW5nO1xuICAgIHByaXZhdGUgY2FyZExhc3Q0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjYXJkSGFzaDogc3RyaW5nO1xuICAgIHByaXZhdGUgYmttVG9rZW5JZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcG9zUmVzdWx0OiBQb3NSZXN1bHQ7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqPzogYW55KSB7XG4gICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gb2JqLnN0YXR1cztcbiAgICAgICAgICAgIHRoaXMucGF5bWVudFB1cmNoYXNlZCA9IG9iai5wYXltZW50UHVyY2hhc2VkO1xuICAgICAgICAgICAgdGhpcy5pbnN0YWxsbWVudENvdW50ID0gb2JqLmluc3RhbGxtZW50Q291bnQ7XG4gICAgICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gb2JqLnRvdGFsQW1vdW50O1xuICAgICAgICAgICAgdGhpcy5jYXJkRmlyc3Q2ID0gb2JqLmNhcmRGaXJzdDY7XG4gICAgICAgICAgICB0aGlzLmNhcmRMYXN0NCA9IG9iai5jYXJkTGFzdDQ7XG4gICAgICAgICAgICB0aGlzLmNhcmRIYXNoID0gb2JqLmNhcmRIYXNoO1xuICAgICAgICAgICAgdGhpcy5ia21Ub2tlbklkID0gb2JqLmJrbVRva2VuSWQ7XG4gICAgICAgICAgICB0aGlzLnBvc1Jlc3VsdCA9IG5ldyBQb3NSZXN1bHQob2JqLnBvc1Jlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgU3RhdHVzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1cztcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNQYXltZW50UHVyY2hhc2VkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXltZW50UHVyY2hhc2VkO1xuICAgIH1cblxuICAgIGdldCBJbnN0YWxsbWVudENvdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbGxtZW50Q291bnQ7XG4gICAgfVxuXG4gICAgZ2V0IFRvdGFsQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsQW1vdW50O1xuICAgIH1cblxuICAgIGdldCBDYXJkRmlyc3Q2KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRGaXJzdDY7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRMYXN0NCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJkTGFzdDQ7XG4gICAgfVxuXG4gICAgZ2V0IENhcmRIYXNoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmRIYXNoO1xuICAgIH1cblxuICAgIGdldCBCa21Ub2tlbklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmJrbVRva2VuSWQ7XG4gICAgfVxuXG4gICAgZ2V0IFBvc1Jlc3VsdCgpOiBQb3NSZXN1bHQge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NSZXN1bHQ7XG4gICAgfVxufVxuIl19