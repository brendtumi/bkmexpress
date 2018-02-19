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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbG1lbnRzUmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvaW5zdGFsbG1lbnRzUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsNkNBQTBEO0FBRzFEO0lBTUksa0NBQW1CLEdBQVM7UUFIcEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBR3ZCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7UUFDekMsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDM0IsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBSSxrREFBWTthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7YUFFRCxVQUFpQixZQUFxQztZQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNyQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDRDQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVyxNQUFjO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksMkNBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNTCwrQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksNERBQXdCO0FBNENyQztJQUEwQyx3Q0FBcUM7SUFDM0UsOEJBQW1CLEdBQThDO1FBQWpFLFlBQ0ksa0JBQU0sR0FBRyxDQUFDLFNBRWI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksd0JBQXdCLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFDbEYsQ0FBQztJQUVELHNCQUFJLDhDQUFZO2FBQWhCLFVBQWlCLFlBQXFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFNO2FBQVYsVUFBVyxNQUFjO1lBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFLO2FBQVQsVUFBVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUEwQyx5QkFBVyxHQWlCcEQ7QUFqQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjIuMDUuMjAxN1xuICovXG5cbi8vIHRzbGludDpkaXNhYmxlOm1heC1jbGFzc2VzLXBlci1maWxlXG5cbmltcG9ydCB7QmV4UmVzcG9uc2UsIFJhd0JleFJlc3BvbnNlfSBmcm9tIFwiLi9iZXhSZXNwb25zZVwiO1xuaW1wb3J0IHtJbnN0YWxsbWVudH0gZnJvbSBcIi4vaW5zdGFsbG1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEluc3RhbGxtZW50c1Jlc3BvbnNlRGF0YSB7XG5cbiAgICBwcml2YXRlIGluc3RhbGxtZW50czogW3N0cmluZywgSW5zdGFsbG1lbnRbXV07XG4gICAgcHJpdmF0ZSBzdGF0dXM6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBlcnJvcjogc3RyaW5nID0gXCJcIjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo/OiBhbnkpIHtcbiAgICAgICAgaWYgKG9iaiAmJiBvYmouaW5zdGFsbG1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbGxtZW50cyA9IG9iai5pbnN0YWxsbWVudHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmouc3RhdHVzKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IG9iai5zdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmouZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBvYmouZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgSW5zdGFsbG1lbnRzKCk6IFtzdHJpbmcsIEluc3RhbGxtZW50W11dIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFsbG1lbnRzO1xuICAgIH1cblxuICAgIHNldCBJbnN0YWxsbWVudHMoaW5zdGFsbG1lbnRzOiBbc3RyaW5nLCBJbnN0YWxsbWVudFtdXSkge1xuICAgICAgICB0aGlzLmluc3RhbGxtZW50cyA9IGluc3RhbGxtZW50cztcbiAgICB9XG5cbiAgICBnZXQgU3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gICAgfVxuXG4gICAgc2V0IFN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG5cbiAgICBnZXQgRXJyb3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3I7XG4gICAgfVxuXG4gICAgc2V0IEVycm9yKGVycm9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgSW5zdGFsbG1lbnRzUmVzcG9uc2UgZXh0ZW5kcyBCZXhSZXNwb25zZTxJbnN0YWxsbWVudHNSZXNwb25zZURhdGE+IHtcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqPzogUmF3QmV4UmVzcG9uc2U8SW5zdGFsbG1lbnRzUmVzcG9uc2VEYXRhPikge1xuICAgICAgICBzdXBlcihvYmopO1xuICAgICAgICB0aGlzLkRhdGEgPSBuZXcgSW5zdGFsbG1lbnRzUmVzcG9uc2VEYXRhKChvYmogJiYgb2JqLmRhdGEpID8gb2JqLmRhdGEgOiBudWxsKTtcbiAgICB9XG5cbiAgICBzZXQgSW5zdGFsbG1lbnRzKGluc3RhbGxtZW50czogW3N0cmluZywgSW5zdGFsbG1lbnRbXV0pIHtcbiAgICAgICAgdGhpcy5EYXRhLkluc3RhbGxtZW50cyA9IGluc3RhbGxtZW50cztcbiAgICB9XG5cbiAgICBzZXQgU3RhdHVzKHN0YXR1czogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuRGF0YS5TdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG4gICAgc2V0IEVycm9yKGVycm9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5EYXRhLkVycm9yID0gZXJyb3I7XG4gICAgfVxufVxuIl19