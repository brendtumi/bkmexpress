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
var paymentResultResponse_1 = require("../paymentResultResponse");
var NonceResultResponse = (function (_super) {
    __extends(NonceResultResponse, _super);
    function NonceResultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uY2VSZXN1bHRSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tZXJjaGFudC9yZXNwb25zZS9ub25jZS9ub25jZVJlc3VsdFJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU9BLGtFQUErRDtBQUUvRDtJQUF5Qyx1Q0FBcUI7SUFBOUQ7O0lBVUEsQ0FBQztJQVBHLHNCQUFJLHNDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBO0lBS0wsMEJBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBeUMsNkNBQXFCLEdBVTdEO0FBVlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmltcG9ydCB7UGF5bWVudFJlc3VsdFJlc3BvbnNlfSBmcm9tIFwiLi4vcGF5bWVudFJlc3VsdFJlc3BvbnNlXCI7XG5cbmV4cG9ydCBjbGFzcyBOb25jZVJlc3VsdFJlc3BvbnNlIGV4dGVuZHMgUGF5bWVudFJlc3VsdFJlc3BvbnNlIHtcbiAgICBwcml2YXRlIGVycm9yOiBzdHJpbmc7XG5cbiAgICBnZXQgRXJyb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3I7XG4gICAgfVxuXG4gICAgc2V0IEVycm9yKGVycm9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbn0iXX0=