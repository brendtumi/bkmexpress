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
var paymentResultResponse_1 = require("../paymentResultResponse");
var NonceResultResponse = (function (_super) {
    __extends(NonceResultResponse, _super);
    function NonceResultResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Error = obj.error;
        return _this;
    }
    Object.defineProperty(NonceResultResponse.prototype, "Error", {
        get: function () {
            return this.error;
        },
        set: function (error) {
            this.error = error;
        },
        enumerable: true,
        configurable: true
    });
    return NonceResultResponse;
}(paymentResultResponse_1.PaymentResultResponse));
exports.NonceResultResponse = NonceResultResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uY2VSZXN1bHRSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tZXJjaGFudC9yZXNwb25zZS9ub25jZS9ub25jZVJlc3VsdFJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVFBLGtFQUF3RTtBQUV4RTtJQUF5Qyx1Q0FBcUI7SUFHMUQsNkJBQW1CLEdBQTZCO1FBQWhELFlBQ0ksa0JBQU0sR0FBRyxDQUFDLFNBRWI7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7O0lBQzNCLENBQUM7SUFFRCxzQkFBSSxzQ0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFLTCwwQkFBQztBQUFELENBQUMsQUFmRCxDQUF5Qyw2Q0FBcUIsR0FlN0Q7QUFmWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuaW1wb3J0IHtSYXdCZXhSZXNwb25zZX0gZnJvbSBcIi4uL2JleFJlc3BvbnNlXCI7XG5pbXBvcnQge1BheW1lbnRSZXN1bHRSZXNwb25zZSwgUG9zRGF0YX0gZnJvbSBcIi4uL3BheW1lbnRSZXN1bHRSZXNwb25zZVwiO1xuXG5leHBvcnQgY2xhc3MgTm9uY2VSZXN1bHRSZXNwb25zZSBleHRlbmRzIFBheW1lbnRSZXN1bHRSZXNwb25zZSB7XG4gICAgcHJpdmF0ZSBlcnJvcjogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IFJhd0JleFJlc3BvbnNlPFBvc0RhdGE+KSB7XG4gICAgICAgIHN1cGVyKG9iaik7XG4gICAgICAgIHRoaXMuRXJyb3IgPSBvYmouZXJyb3I7XG4gICAgfVxuXG4gICAgZ2V0IEVycm9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yO1xuICAgIH1cblxuICAgIHNldCBFcnJvcihlcnJvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9XG59XG4iXX0=