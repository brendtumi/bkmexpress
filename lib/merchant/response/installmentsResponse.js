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
var InstallmentsResponseData = (function () {
    function InstallmentsResponseData(obj) {
        this.installments = obj.installments;
        this.status = obj.status;
        this.error = obj.error;
    }
    Object.defineProperty(InstallmentsResponseData.prototype, "Installments", {
        get: function () {
            return this.installments;
        },
        set: function (installments) {
            this.installments = installments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstallmentsResponseData.prototype, "Status", {
        get: function () {
            return this.status;
        },
        set: function (status) {
            this.status = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstallmentsResponseData.prototype, "Error", {
        get: function () {
            return this.error;
        },
        set: function (error) {
            this.error = error;
        },
        enumerable: true,
        configurable: true
    });
    return InstallmentsResponseData;
}());
exports.InstallmentsResponseData = InstallmentsResponseData;
var InstallmentsResponse = (function (_super) {
    __extends(InstallmentsResponse, _super);
    function InstallmentsResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Data = new InstallmentsResponseData(obj.data);
        return _this;
    }
    Object.defineProperty(InstallmentsResponse.prototype, "Installments", {
        set: function (installments) {
            this.Data.Installments = installments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstallmentsResponse.prototype, "Status", {
        set: function (status) {
            this.Data.Status = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstallmentsResponse.prototype, "Error", {
        set: function (error) {
            this.Data.Error = error;
        },
        enumerable: true,
        configurable: true
    });
    return InstallmentsResponse;
}(bexResponse_1.BexResponse));
exports.InstallmentsResponse = InstallmentsResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbG1lbnRzUmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvaW5zdGFsbG1lbnRzUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsNkNBQTBEO0FBRzFEO0lBTUksa0NBQW1CLEdBQVM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELHNCQUFJLGtEQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWlCLFlBQXFDO1lBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNENBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFXLE1BQWM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwyQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1MLCtCQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQztBQXBDWSw0REFBd0I7QUFzQ3JDO0lBQTBDLHdDQUFxQztJQUMzRSw4QkFBbUIsR0FBOEM7UUFBakUsWUFDSSxrQkFBTSxHQUFHLENBQUMsU0FFYjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBQ3ZELENBQUM7SUFFRCxzQkFBSSw4Q0FBWTthQUFoQixVQUFpQixZQUFxQztZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBTTthQUFWLFVBQVcsTUFBYztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBSzthQUFULFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFDTCwyQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBMEMseUJBQVcsR0FpQnBEO0FBakJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDIyLjA1LjIwMTdcbiAqL1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuXG5pbXBvcnQge0JleFJlc3BvbnNlLCBSYXdCZXhSZXNwb25zZX0gZnJvbSBcIi4vYmV4UmVzcG9uc2VcIjtcbmltcG9ydCB7SW5zdGFsbG1lbnR9IGZyb20gXCIuL2luc3RhbGxtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBJbnN0YWxsbWVudHNSZXNwb25zZURhdGEge1xuXG4gICAgcHJpdmF0ZSBpbnN0YWxsbWVudHM6IFtzdHJpbmcsIEluc3RhbGxtZW50W11dO1xuICAgIHByaXZhdGUgc3RhdHVzOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBlcnJvcjogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IGFueSkge1xuICAgICAgICB0aGlzLmluc3RhbGxtZW50cyA9IG9iai5pbnN0YWxsbWVudHM7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gb2JqLnN0YXR1cztcbiAgICAgICAgdGhpcy5lcnJvciA9IG9iai5lcnJvcjtcbiAgICB9XG5cbiAgICBnZXQgSW5zdGFsbG1lbnRzKCk6IFtzdHJpbmcsIEluc3RhbGxtZW50W11dIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFsbG1lbnRzO1xuICAgIH1cblxuICAgIHNldCBJbnN0YWxsbWVudHMoaW5zdGFsbG1lbnRzOiBbc3RyaW5nLCBJbnN0YWxsbWVudFtdXSkge1xuICAgICAgICB0aGlzLmluc3RhbGxtZW50cyA9IGluc3RhbGxtZW50cztcbiAgICB9XG5cbiAgICBnZXQgU3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gICAgfVxuXG4gICAgc2V0IFN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgRXJyb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3I7XG4gICAgfVxuXG4gICAgc2V0IEVycm9yKGVycm9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgSW5zdGFsbG1lbnRzUmVzcG9uc2UgZXh0ZW5kcyBCZXhSZXNwb25zZTxJbnN0YWxsbWVudHNSZXNwb25zZURhdGE+IHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqPzogUmF3QmV4UmVzcG9uc2U8SW5zdGFsbG1lbnRzUmVzcG9uc2VEYXRhPikge1xuICAgICAgICBzdXBlcihvYmopO1xuICAgICAgICB0aGlzLkRhdGEgPSBuZXcgSW5zdGFsbG1lbnRzUmVzcG9uc2VEYXRhKG9iai5kYXRhKTtcbiAgICB9XG5cbiAgICBzZXQgSW5zdGFsbG1lbnRzKGluc3RhbGxtZW50czogW3N0cmluZywgSW5zdGFsbG1lbnRbXV0pIHtcbiAgICAgICAgdGhpcy5EYXRhLkluc3RhbGxtZW50cyA9IGluc3RhbGxtZW50cztcbiAgICB9XG5cbiAgICBzZXQgU3RhdHVzKHN0YXR1czogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuRGF0YS5TdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgc2V0IEVycm9yKGVycm9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5EYXRhLkVycm9yID0gZXJyb3I7XG4gICAgfVxufSJdfQ==