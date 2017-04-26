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
    function TicketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0UmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvdGlja2V0UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsNkNBQTBDO0FBRTFDO0lBQW9DLGtDQUFrQjtJQUF0RDs7SUFJQSxDQUFDO0lBSEcsc0JBQUksaUNBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBb0MseUJBQVcsR0FJOUM7QUFKWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5pbXBvcnQge1Rva2VufSBmcm9tIFwiLi4vdG9rZW5cIjtcbmltcG9ydCB7QmV4UmVzcG9uc2V9IGZyb20gXCIuL2JleFJlc3BvbnNlXCI7XG5cbmV4cG9ydCBjbGFzcyBUaWNrZXRSZXNwb25zZSBleHRlbmRzIEJleFJlc3BvbnNlPFRva2VuPiB7XG4gICAgZ2V0IFRva2VuKCk6IFRva2VuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRGF0YTtcbiAgICB9XG59XG4iXX0=