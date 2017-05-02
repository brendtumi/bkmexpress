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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbnRMb2dpblJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL21lcmNoYW50TG9naW5SZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxrQ0FBK0I7QUFDL0IsNkNBQTBEO0FBRTFEO0lBQTJDLHlDQUFrQjtJQUV6RCwrQkFBbUIsR0FBMkI7UUFBOUMsWUFDSSxrQkFBTSxHQUFHLENBQUMsU0FFYjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxhQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUNwQyxDQUFDO0lBRUQsc0JBQUksd0NBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBMkMseUJBQVcsR0FVckQ7QUFWWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuaW1wb3J0IHtUb2tlbn0gZnJvbSBcIi4uL3Rva2VuXCI7XG5pbXBvcnQge0JleFJlc3BvbnNlLCBSYXdCZXhSZXNwb25zZX0gZnJvbSBcIi4vYmV4UmVzcG9uc2VcIjtcblxuZXhwb3J0IGNsYXNzIE1lcmNoYW50TG9naW5SZXNwb25zZSBleHRlbmRzIEJleFJlc3BvbnNlPFRva2VuPiB7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqPzogUmF3QmV4UmVzcG9uc2U8VG9rZW4+KSB7XG4gICAgICAgIHN1cGVyKG9iaik7XG4gICAgICAgIHRoaXMuRGF0YSA9IG5ldyBUb2tlbihvYmouZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0IFRva2VuKCk6IFRva2VuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YTtcbiAgICB9XG59XG4iXX0=