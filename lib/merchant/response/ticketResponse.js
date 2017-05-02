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
var TicketResponse = (function (_super) {
    __extends(TicketResponse, _super);
    function TicketResponse(obj) {
        return _super.call(this, obj) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0UmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvdGlja2V0UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsNkNBQTBEO0FBRTFEO0lBQW9DLGtDQUFrQjtJQUNsRCx3QkFBbUIsR0FBMkI7ZUFDMUMsa0JBQU0sR0FBRyxDQUFDO0lBQ2QsQ0FBQztJQUVELHNCQUFJLGlDQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQVJELENBQW9DLHlCQUFXLEdBUTlDO0FBUlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuaW1wb3J0IHtUb2tlbn0gZnJvbSBcIi4uL3Rva2VuXCI7XG5pbXBvcnQge0JleFJlc3BvbnNlLCBSYXdCZXhSZXNwb25zZX0gZnJvbSBcIi4vYmV4UmVzcG9uc2VcIjtcblxuZXhwb3J0IGNsYXNzIFRpY2tldFJlc3BvbnNlIGV4dGVuZHMgQmV4UmVzcG9uc2U8VG9rZW4+IHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqPzogUmF3QmV4UmVzcG9uc2U8VG9rZW4+KSB7XG4gICAgICAgIHN1cGVyKG9iaik7XG4gICAgfVxuXG4gICAgZ2V0IFRva2VuKCk6IFRva2VuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YTtcbiAgICB9XG59XG4iXX0=