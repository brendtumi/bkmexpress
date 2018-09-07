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
var exceptions_1 = require("../exceptions");
var configuration_1 = require("./configuration");
var BexPayment = (function (_super) {
    __extends(BexPayment, _super);
    function BexPayment(environment, merchantId, merchantSecret) {
        var _this = this;
        if (!environment) {
            throw new exceptions_1.BexPaymentException("Environment can not be NULL or Empty.");
        }
        if (!merchantId) {
            throw new exceptions_1.BexPaymentException("Merchant id can not be NULL or Empty.");
        }
        if (!merchantSecret) {
            throw new exceptions_1.BexPaymentException("Merchant Private Key can not be NULL or Empty.");
        }
        _this = _super.call(this, environment, merchantId, merchantSecret) || this;
        return _this;
    }
    BexPayment.startBexPayment = function (environment, merchantId, merchantSecret) {
        if (!environment) {
            throw new exceptions_1.BexPaymentException("Environment can not be NULL or Empty.");
        }
        if (!merchantId) {
            throw new exceptions_1.BexPaymentException("Merchant id can not be NULL or Empty.");
        }
        if (!merchantSecret) {
            throw new exceptions_1.BexPaymentException("Merchant Private Key can not be NULL or Empty.");
        }
        return new configuration_1.Configuration(environment, merchantId, merchantSecret);
    };
    return BexPayment;
}(configuration_1.Configuration));
exports.BexPayment = BexPayment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV4UGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvYmV4UGF5bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFPQSw0Q0FBa0Q7QUFDbEQsaURBQThDO0FBRTlDO0lBQWdDLDhCQUFhO0lBZXpDLG9CQUFtQixXQUFtQixFQUFFLFVBQWtCLEVBQUUsY0FBc0I7UUFBbEYsaUJBV0M7UUFWRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsTUFBTSxJQUFJLGdDQUFtQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2IsTUFBTSxJQUFJLGdDQUFtQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1NBQ25GO1FBQ0QsUUFBQSxrQkFBTSxXQUFXLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxTQUFDOztJQUNuRCxDQUFDO0lBekJhLDBCQUFlLEdBQTdCLFVBQThCLFdBQW1CLEVBQUUsVUFBa0IsRUFBRSxjQUFzQjtRQUN6RixJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsTUFBTSxJQUFJLGdDQUFtQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2IsTUFBTSxJQUFJLGdDQUFtQixDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1NBQ25GO1FBRUQsT0FBTyxJQUFJLDZCQUFhLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBZUwsaUJBQUM7QUFBRCxDQUFDLEFBNUJELENBQWdDLDZCQUFhLEdBNEI1QztBQTVCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5pbXBvcnQge0JleFBheW1lbnRFeGNlcHRpb259IGZyb20gXCIuLi9leGNlcHRpb25zXCI7XG5pbXBvcnQge0NvbmZpZ3VyYXRpb259IGZyb20gXCIuL2NvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEJleFBheW1lbnQgZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0QmV4UGF5bWVudChlbnZpcm9ubWVudDogc3RyaW5nLCBtZXJjaGFudElkOiBzdHJpbmcsIG1lcmNoYW50U2VjcmV0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFlbnZpcm9ubWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJleFBheW1lbnRFeGNlcHRpb24oXCJFbnZpcm9ubWVudCBjYW4gbm90IGJlIE5VTEwgb3IgRW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVyY2hhbnRJZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJleFBheW1lbnRFeGNlcHRpb24oXCJNZXJjaGFudCBpZCBjYW4gbm90IGJlIE5VTEwgb3IgRW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVyY2hhbnRTZWNyZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCZXhQYXltZW50RXhjZXB0aW9uKFwiTWVyY2hhbnQgUHJpdmF0ZSBLZXkgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgQ29uZmlndXJhdGlvbihlbnZpcm9ubWVudCwgbWVyY2hhbnRJZCwgbWVyY2hhbnRTZWNyZXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogc3RyaW5nLCBtZXJjaGFudElkOiBzdHJpbmcsIG1lcmNoYW50U2VjcmV0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFlbnZpcm9ubWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJleFBheW1lbnRFeGNlcHRpb24oXCJFbnZpcm9ubWVudCBjYW4gbm90IGJlIE5VTEwgb3IgRW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVyY2hhbnRJZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJleFBheW1lbnRFeGNlcHRpb24oXCJNZXJjaGFudCBpZCBjYW4gbm90IGJlIE5VTEwgb3IgRW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVyY2hhbnRTZWNyZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCZXhQYXltZW50RXhjZXB0aW9uKFwiTWVyY2hhbnQgUHJpdmF0ZSBLZXkgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcihlbnZpcm9ubWVudCwgbWVyY2hhbnRJZCwgbWVyY2hhbnRTZWNyZXQpO1xuICAgIH1cblxufVxuIl19