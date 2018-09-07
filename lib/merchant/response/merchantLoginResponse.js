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
var token_1 = require("../token");
var bexResponse_1 = require("./bexResponse");
var MerchantLoginResponse = (function (_super) {
    __extends(MerchantLoginResponse, _super);
    function MerchantLoginResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Data = new token_1.Token(obj.data);
        return _this;
    }
    Object.defineProperty(MerchantLoginResponse.prototype, "Token", {
        get: function () {
            return this.Data;
        },
        enumerable: true,
        configurable: true
    });
    return MerchantLoginResponse;
}(bexResponse_1.BexResponse));
exports.MerchantLoginResponse = MerchantLoginResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRMb2dpblJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL21lcmNoYW50TG9naW5SZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPQSxrQ0FBK0I7QUFDL0IsNkNBQTBEO0FBRTFEO0lBQTJDLHlDQUFrQjtJQUV6RCwrQkFBbUIsR0FBMkI7UUFBOUMsWUFDSSxrQkFBTSxHQUFHLENBQUMsU0FFYjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxhQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUNwQyxDQUFDO0lBRUQsc0JBQUksd0NBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQVZELENBQTJDLHlCQUFXLEdBVXJEO0FBVlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmltcG9ydCB7VG9rZW59IGZyb20gXCIuLi90b2tlblwiO1xuaW1wb3J0IHtCZXhSZXNwb25zZSwgUmF3QmV4UmVzcG9uc2V9IGZyb20gXCIuL2JleFJlc3BvbnNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXJjaGFudExvZ2luUmVzcG9uc2UgZXh0ZW5kcyBCZXhSZXNwb25zZTxUb2tlbj4ge1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IFJhd0JleFJlc3BvbnNlPFRva2VuPikge1xuICAgICAgICBzdXBlcihvYmopO1xuICAgICAgICB0aGlzLkRhdGEgPSBuZXcgVG9rZW4ob2JqLmRhdGEpO1xuICAgIH1cblxuICAgIGdldCBUb2tlbigpOiBUb2tlbiB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGE7XG4gICAgfVxufVxuIl19