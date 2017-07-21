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
        this.status = "";
        this.error = "";
        if (obj && obj.installments) {
            this.installments = obj.installments;
        }
        if (obj && obj.status) {
            this.status = obj.status;
        }
        if (obj && obj.error) {
            this.error = obj.error;
        }
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
        _this.Data = new InstallmentsResponseData((obj && obj.data) ? obj.data : null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbG1lbnRzUmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvaW5zdGFsbG1lbnRzUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsNkNBQTBEO0FBRzFEO0lBTUksa0NBQW1CLEdBQVM7UUFIcEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDekMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDM0IsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBSSxrREFBWTthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7YUFFRCxVQUFpQixZQUFxQztZQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNyQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDRDQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVyxNQUFjO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksMkNBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNTCwrQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksNERBQXdCO0FBNENyQztJQUEwQyx3Q0FBcUM7SUFDM0UsOEJBQW1CLEdBQThDO1FBQWpFLFlBQ0ksa0JBQU0sR0FBRyxDQUFDLFNBRWI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksd0JBQXdCLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7O0lBQ2xGLENBQUM7SUFFRCxzQkFBSSw4Q0FBWTthQUFoQixVQUFpQixZQUFxQztZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBTTthQUFWLFVBQVcsTUFBYztZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBSzthQUFULFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFDTCwyQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBMEMseUJBQVcsR0FpQnBEO0FBakJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDIyLjA1LjIwMTdcbiAqL1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuXG5pbXBvcnQge0JleFJlc3BvbnNlLCBSYXdCZXhSZXNwb25zZX0gZnJvbSBcIi4vYmV4UmVzcG9uc2VcIjtcbmltcG9ydCB7SW5zdGFsbG1lbnR9IGZyb20gXCIuL2luc3RhbGxtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBJbnN0YWxsbWVudHNSZXNwb25zZURhdGEge1xuXG4gICAgcHJpdmF0ZSBpbnN0YWxsbWVudHM6IFtzdHJpbmcsIEluc3RhbGxtZW50W11dO1xuICAgIHByaXZhdGUgc3RhdHVzOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgZXJyb3I6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqPzogYW55KSB7XG4gICAgICAgIGlmIChvYmogJiYgb2JqLmluc3RhbGxtZW50cykge1xuICAgICAgICAgICAgdGhpcy5pbnN0YWxsbWVudHMgPSBvYmouaW5zdGFsbG1lbnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmogJiYgb2JqLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBvYmouc3RhdHVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmogJiYgb2JqLmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gb2JqLmVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IEluc3RhbGxtZW50cygpOiBbc3RyaW5nLCBJbnN0YWxsbWVudFtdXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbGxtZW50cztcbiAgICB9XG5cbiAgICBzZXQgSW5zdGFsbG1lbnRzKGluc3RhbGxtZW50czogW3N0cmluZywgSW5zdGFsbG1lbnRbXV0pIHtcbiAgICAgICAgdGhpcy5pbnN0YWxsbWVudHMgPSBpbnN0YWxsbWVudHM7XG4gICAgfVxuXG4gICAgZ2V0IFN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIHNldCBTdGF0dXMoc3RhdHVzOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgZ2V0IEVycm9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yO1xuICAgIH1cblxuICAgIHNldCBFcnJvcihlcnJvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbGxtZW50c1Jlc3BvbnNlIGV4dGVuZHMgQmV4UmVzcG9uc2U8SW5zdGFsbG1lbnRzUmVzcG9uc2VEYXRhPiB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IFJhd0JleFJlc3BvbnNlPEluc3RhbGxtZW50c1Jlc3BvbnNlRGF0YT4pIHtcbiAgICAgICAgc3VwZXIob2JqKTtcbiAgICAgICAgdGhpcy5EYXRhID0gbmV3IEluc3RhbGxtZW50c1Jlc3BvbnNlRGF0YSgob2JqICYmIG9iai5kYXRhKSA/IG9iai5kYXRhIDogbnVsbCk7XG4gICAgfVxuXG4gICAgc2V0IEluc3RhbGxtZW50cyhpbnN0YWxsbWVudHM6IFtzdHJpbmcsIEluc3RhbGxtZW50W11dKSB7XG4gICAgICAgIHRoaXMuRGF0YS5JbnN0YWxsbWVudHMgPSBpbnN0YWxsbWVudHM7XG4gICAgfVxuXG4gICAgc2V0IFN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLkRhdGEuU3RhdHVzID0gc3RhdHVzO1xuICAgIH1cblxuICAgIHNldCBFcnJvcihlcnJvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuRGF0YS5FcnJvciA9IGVycm9yO1xuICAgIH1cbn1cbiJdfQ==