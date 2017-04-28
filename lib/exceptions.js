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
var BexException = (function (_super) {
    __extends(BexException, _super);
    function BexException(message) {
        var _this = this;
        if (typeof message === "string") {
            _this = _super.call(this, message) || this;
        }
        else {
            _this = _super.call(this, message.toString()) || this;
        }
        _this.name = "BexException";
        return _this;
    }
    return BexException;
}(Error));
exports.BexException = BexException;
var BexPaymentException = (function (_super) {
    __extends(BexPaymentException, _super);
    function BexPaymentException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "BexPaymentException";
        return _this;
    }
    return BexPaymentException;
}(BexException));
exports.BexPaymentException = BexPaymentException;
var ConfigurationException = (function (_super) {
    __extends(ConfigurationException, _super);
    function ConfigurationException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ConfigurationException";
        return _this;
    }
    return ConfigurationException;
}(BexException));
exports.ConfigurationException = ConfigurationException;
var EncryptionException = (function (_super) {
    __extends(EncryptionException, _super);
    function EncryptionException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "EncryptionException";
        return _this;
    }
    return EncryptionException;
}(BexException));
exports.EncryptionException = EncryptionException;
var MerchantServiceException = (function (_super) {
    __extends(MerchantServiceException, _super);
    function MerchantServiceException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "MerchantServiceException";
        return _this;
    }
    return MerchantServiceException;
}(BexException));
exports.MerchantServiceException = MerchantServiceException;
var MoneyUtilException = (function (_super) {
    __extends(MoneyUtilException, _super);
    function MoneyUtilException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "MoneyUtilException";
        return _this;
    }
    return MoneyUtilException;
}(BexException));
exports.MoneyUtilException = MoneyUtilException;
var BexApiConfigurationException = (function (_super) {
    __extends(BexApiConfigurationException, _super);
    function BexApiConfigurationException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "BexApiConfigurationException";
        return _this;
    }
    return BexApiConfigurationException;
}(BexException));
exports.BexApiConfigurationException = BexApiConfigurationException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9leGNlcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU9BO0lBQWtDLGdDQUFLO0lBQ25DLHNCQUFZLE9BQXVCO1FBQW5DLGlCQVFDO1FBUEcsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUM5QixRQUFBLGtCQUFNLE9BQU8sQ0FBQyxTQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLFFBQUEsa0JBQU0sT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQUM7UUFDOUIsQ0FBQztRQUNELEtBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDOztJQUMvQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBa0MsS0FBSyxHQVV0QztBQVZZLG9DQUFZO0FBV3pCO0lBQXlDLHVDQUFZO0lBQ2pELDZCQUFZLE9BQXVCO1FBQW5DLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBRWpCO1FBREcsS0FBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFDdEMsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLFlBQVksR0FLcEQ7QUFMWSxrREFBbUI7QUFNaEM7SUFBNEMsMENBQVk7SUFDcEQsZ0NBQVksT0FBdUI7UUFBbkMsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FFakI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLHdCQUF3QixDQUFDOztJQUN6QyxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBNEMsWUFBWSxHQUt2RDtBQUxZLHdEQUFzQjtBQU1uQztJQUF5Qyx1Q0FBWTtJQUNqRCw2QkFBWSxPQUF1QjtRQUFuQyxZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUVqQjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7O0lBQ3RDLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxZQUFZLEdBS3BEO0FBTFksa0RBQW1CO0FBTWhDO0lBQThDLDRDQUFZO0lBQ3RELGtDQUFZLE9BQXVCO1FBQW5DLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBRWpCO1FBREcsS0FBSSxDQUFDLElBQUksR0FBRywwQkFBMEIsQ0FBQzs7SUFDM0MsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLFlBQVksR0FLekQ7QUFMWSw0REFBd0I7QUFNckM7SUFBd0Msc0NBQVk7SUFDaEQsNEJBQVksT0FBdUI7UUFBbkMsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FFakI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDOztJQUNyQyxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBd0MsWUFBWSxHQUtuRDtBQUxZLGdEQUFrQjtBQU0vQjtJQUFrRCxnREFBWTtJQUMxRCxzQ0FBWSxPQUF1QjtRQUFuQyxZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUVqQjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsOEJBQThCLENBQUM7O0lBQy9DLENBQUM7SUFDTCxtQ0FBQztBQUFELENBQUMsQUFMRCxDQUFrRCxZQUFZLEdBSzdEO0FBTFksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1jbGFzc2VzLXBlci1maWxlICovXG5leHBvcnQgY2xhc3MgQmV4RXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZyB8IEVycm9yKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdXBlcihtZXNzYWdlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQmV4RXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJleFBheW1lbnRFeGNlcHRpb24gZXh0ZW5kcyBCZXhFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZyB8IEVycm9yKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkJleFBheW1lbnRFeGNlcHRpb25cIjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbkV4Y2VwdGlvbiBleHRlbmRzIEJleEV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nIHwgRXJyb3IpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ29uZmlndXJhdGlvbkV4Y2VwdGlvblwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFbmNyeXB0aW9uRXhjZXB0aW9uIGV4dGVuZHMgQmV4RXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcgfCBFcnJvcikge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJFbmNyeXB0aW9uRXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbiBleHRlbmRzIEJleEV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nIHwgRXJyb3IpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1vbmV5VXRpbEV4Y2VwdGlvbiBleHRlbmRzIEJleEV4Y2VwdGlvbiB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nIHwgRXJyb3IpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiTW9uZXlVdGlsRXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJleEFwaUNvbmZpZ3VyYXRpb25FeGNlcHRpb24gZXh0ZW5kcyBCZXhFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZyB8IEVycm9yKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkJleEFwaUNvbmZpZ3VyYXRpb25FeGNlcHRpb25cIjtcbiAgICB9XG59XG4iXX0=