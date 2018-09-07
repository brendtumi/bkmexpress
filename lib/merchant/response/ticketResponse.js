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
var TicketResponse = (function (_super) {
    __extends(TicketResponse, _super);
    function TicketResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Data = new token_1.Token(obj.data);
        return _this;
    }
    Object.defineProperty(TicketResponse.prototype, "Token", {
        get: function () {
            return this.Data;
        },
        enumerable: true,
        configurable: true
    });
    return TicketResponse;
}(bexResponse_1.BexResponse));
exports.TicketResponse = TicketResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0UmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvdGlja2V0UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBT0Esa0NBQStCO0FBQy9CLDZDQUEwRDtBQUUxRDtJQUFvQyxrQ0FBa0I7SUFDbEQsd0JBQW1CLEdBQTJCO1FBQTlDLFlBQ0ksa0JBQU0sR0FBRyxDQUFDLFNBRWI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksYUFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFDcEMsQ0FBQztJQUVELHNCQUFJLGlDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFDTCxxQkFBQztBQUFELENBQUMsQUFURCxDQUFvQyx5QkFBVyxHQVM5QztBQVRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmltcG9ydCB7VG9rZW59IGZyb20gXCIuLi90b2tlblwiO1xuaW1wb3J0IHtCZXhSZXNwb25zZSwgUmF3QmV4UmVzcG9uc2V9IGZyb20gXCIuL2JleFJlc3BvbnNlXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWNrZXRSZXNwb25zZSBleHRlbmRzIEJleFJlc3BvbnNlPFRva2VuPiB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IFJhd0JleFJlc3BvbnNlPFRva2VuPikge1xuICAgICAgICBzdXBlcihvYmopO1xuICAgICAgICB0aGlzLkRhdGEgPSBuZXcgVG9rZW4ob2JqLmRhdGEpO1xuICAgIH1cblxuICAgIGdldCBUb2tlbigpOiBUb2tlbiB7XG4gICAgICAgIHJldHVybiB0aGlzLkRhdGE7XG4gICAgfVxufVxuIl19