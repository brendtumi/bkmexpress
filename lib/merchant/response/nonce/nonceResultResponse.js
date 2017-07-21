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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uY2VSZXN1bHRSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tZXJjaGFudC9yZXNwb25zZS9ub25jZS9ub25jZVJlc3VsdFJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLGtFQUF3RTtBQUV4RTtJQUF5Qyx1Q0FBcUI7SUFHMUQsNkJBQW1CLEdBQTZCO1FBQWhELFlBQ0ksa0JBQU0sR0FBRyxDQUFDLFNBRWI7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7O0lBQzNCLENBQUM7SUFFRCxzQkFBSSxzQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQUtMLDBCQUFDO0FBQUQsQ0FBQyxBQWZELENBQXlDLDZDQUFxQixHQWU3RDtBQWZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5pbXBvcnQge1Jhd0JleFJlc3BvbnNlfSBmcm9tIFwiLi4vYmV4UmVzcG9uc2VcIjtcbmltcG9ydCB7UGF5bWVudFJlc3VsdFJlc3BvbnNlLCBQb3NEYXRhfSBmcm9tIFwiLi4vcGF5bWVudFJlc3VsdFJlc3BvbnNlXCI7XG5cbmV4cG9ydCBjbGFzcyBOb25jZVJlc3VsdFJlc3BvbnNlIGV4dGVuZHMgUGF5bWVudFJlc3VsdFJlc3BvbnNlIHtcbiAgICBwcml2YXRlIGVycm9yOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqPzogUmF3QmV4UmVzcG9uc2U8UG9zRGF0YT4pIHtcbiAgICAgICAgc3VwZXIob2JqKTtcbiAgICAgICAgdGhpcy5FcnJvciA9IG9iai5lcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgRXJyb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3I7XG4gICAgfVxuXG4gICAgc2V0IEVycm9yKGVycm9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbn1cbiJdfQ==