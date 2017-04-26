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
var MerchantLoginResponse = (function (_super) {
    __extends(MerchantLoginResponse, _super);
    function MerchantLoginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRMb2dpblJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL21lcmNoYW50TG9naW5SZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSw2Q0FBMEM7QUFFMUM7SUFBMkMseUNBQWtCO0lBQTdEOztJQUlBLENBQUM7SUFIRyxzQkFBSSx3Q0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFDTCw0QkFBQztBQUFELENBQUMsQUFKRCxDQUEyQyx5QkFBVyxHQUlyRDtBQUpZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5pbXBvcnQge1Rva2VufSBmcm9tIFwiLi4vdG9rZW5cIjtcbmltcG9ydCB7QmV4UmVzcG9uc2V9IGZyb20gXCIuL2JleFJlc3BvbnNlXCI7XG5cbmV4cG9ydCBjbGFzcyBNZXJjaGFudExvZ2luUmVzcG9uc2UgZXh0ZW5kcyBCZXhSZXNwb25zZTxUb2tlbj4ge1xuICAgIGdldCBUb2tlbigpOiBUb2tlbiB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGE7XG4gICAgfVxufVxuIl19