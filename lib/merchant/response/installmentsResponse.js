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
            this.status = "fail";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbG1lbnRzUmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvaW5zdGFsbG1lbnRzUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsNkNBQTBEO0FBRzFEO0lBTUksa0NBQW1CLEdBQVM7UUFDeEIsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUN6QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM3QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFJLGtEQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWlCLFlBQXFDO1lBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNENBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFXLE1BQWM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwyQ0FBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FMQTtJQU9MLCtCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDWSw0REFBd0I7QUE2Q3JDO0lBQTBDLHdDQUFxQztJQUMzRSw4QkFBbUIsR0FBOEM7UUFBakUsWUFDSSxrQkFBTSxHQUFHLENBQUMsU0FFYjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQzs7SUFDbEYsQ0FBQztJQUVELHNCQUFJLDhDQUFZO2FBQWhCLFVBQWlCLFlBQXFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFNO2FBQVYsVUFBVyxNQUFjO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFLO2FBQVQsVUFBVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUEwQyx5QkFBVyxHQWlCcEQ7QUFqQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjIuMDUuMjAxN1xuICovXG5cbi8vIHRzbGludDpkaXNhYmxlOm1heC1jbGFzc2VzLXBlci1maWxlXG5cbmltcG9ydCB7QmV4UmVzcG9uc2UsIFJhd0JleFJlc3BvbnNlfSBmcm9tIFwiLi9iZXhSZXNwb25zZVwiO1xuaW1wb3J0IHtJbnN0YWxsbWVudH0gZnJvbSBcIi4vaW5zdGFsbG1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEluc3RhbGxtZW50c1Jlc3BvbnNlRGF0YSB7XG5cbiAgICBwcml2YXRlIGluc3RhbGxtZW50czogW3N0cmluZywgSW5zdGFsbG1lbnRbXV07XG4gICAgcHJpdmF0ZSBzdGF0dXM6IHN0cmluZztcbiAgICBwcml2YXRlIGVycm9yOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqPzogYW55KSB7XG4gICAgICAgIGlmIChvYmogJiYgb2JqLmluc3RhbGxtZW50cykge1xuICAgICAgICAgICAgdGhpcy5pbnN0YWxsbWVudHMgPSBvYmouaW5zdGFsbG1lbnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmogJiYgb2JqLnN0YXR1cykge1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBvYmouc3RhdHVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmogJiYgb2JqLmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gb2JqLmVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IEluc3RhbGxtZW50cygpOiBbc3RyaW5nLCBJbnN0YWxsbWVudFtdXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbGxtZW50cztcbiAgICB9XG5cbiAgICBzZXQgSW5zdGFsbG1lbnRzKGluc3RhbGxtZW50czogW3N0cmluZywgSW5zdGFsbG1lbnRbXV0pIHtcbiAgICAgICAgdGhpcy5pbnN0YWxsbWVudHMgPSBpbnN0YWxsbWVudHM7XG4gICAgfVxuXG4gICAgZ2V0IFN0YXR1cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgIH1cblxuICAgIHNldCBTdGF0dXMoc3RhdHVzOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgZ2V0IEVycm9yKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yO1xuICAgIH1cblxuICAgIHNldCBFcnJvcihlcnJvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gXCJmYWlsXCI7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEluc3RhbGxtZW50c1Jlc3BvbnNlIGV4dGVuZHMgQmV4UmVzcG9uc2U8SW5zdGFsbG1lbnRzUmVzcG9uc2VEYXRhPiB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IFJhd0JleFJlc3BvbnNlPEluc3RhbGxtZW50c1Jlc3BvbnNlRGF0YT4pIHtcbiAgICAgICAgc3VwZXIob2JqKTtcbiAgICAgICAgdGhpcy5EYXRhID0gbmV3IEluc3RhbGxtZW50c1Jlc3BvbnNlRGF0YSgob2JqICYmIG9iai5kYXRhKSA/IG9iai5kYXRhIDogbnVsbCk7XG4gICAgfVxuXG4gICAgc2V0IEluc3RhbGxtZW50cyhpbnN0YWxsbWVudHM6IFtzdHJpbmcsIEluc3RhbGxtZW50W11dKSB7XG4gICAgICAgIHRoaXMuRGF0YS5JbnN0YWxsbWVudHMgPSBpbnN0YWxsbWVudHM7XG4gICAgfVxuXG4gICAgc2V0IFN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLkRhdGEuU3RhdHVzID0gc3RhdHVzO1xuICAgIH1cblxuICAgIHNldCBFcnJvcihlcnJvcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuRGF0YS5FcnJvciA9IGVycm9yO1xuICAgIH1cbn0iXX0=