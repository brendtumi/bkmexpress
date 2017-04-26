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
        var _this = _super.call(this, message) || this;
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
}(Error));
exports.BexPaymentException = BexPaymentException;
var ConfigurationException = (function (_super) {
    __extends(ConfigurationException, _super);
    function ConfigurationException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ConfigurationException";
        return _this;
    }
    return ConfigurationException;
}(Error));
exports.ConfigurationException = ConfigurationException;
var EncryptionException = (function (_super) {
    __extends(EncryptionException, _super);
    function EncryptionException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "EncryptionException";
        return _this;
    }
    return EncryptionException;
}(Error));
exports.EncryptionException = EncryptionException;
var MerchantServiceException = (function (_super) {
    __extends(MerchantServiceException, _super);
    function MerchantServiceException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "MerchantServiceException";
        return _this;
    }
    return MerchantServiceException;
}(Error));
exports.MerchantServiceException = MerchantServiceException;
var MoneyUtilException = (function (_super) {
    __extends(MoneyUtilException, _super);
    function MoneyUtilException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "MoneyUtilException";
        return _this;
    }
    return MoneyUtilException;
}(Error));
exports.MoneyUtilException = MoneyUtilException;
var BexApiConfigurationException = (function (_super) {
    __extends(BexApiConfigurationException, _super);
    function BexApiConfigurationException(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "BexApiConfigurationException";
        return _this;
    }
    return BexApiConfigurationException;
}(Error));
exports.BexApiConfigurationException = BexApiConfigurationException;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9leGNlcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU9BO0lBQWtDLGdDQUFLO0lBQ25DLHNCQUFZLE9BQWU7UUFBM0IsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FFakI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsQ0FBQzs7SUFDL0IsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQUxELENBQWtDLEtBQUssR0FLdEM7QUFMWSxvQ0FBWTtBQU16QjtJQUF5Qyx1Q0FBSztJQUMxQyw2QkFBWSxPQUFlO1FBQTNCLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBRWpCO1FBREcsS0FBSSxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQzs7SUFDdEMsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXlDLEtBQUssR0FLN0M7QUFMWSxrREFBbUI7QUFNaEM7SUFBNEMsMENBQUs7SUFDN0MsZ0NBQVksT0FBZTtRQUEzQixZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUVqQjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsd0JBQXdCLENBQUM7O0lBQ3pDLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQUFMRCxDQUE0QyxLQUFLLEdBS2hEO0FBTFksd0RBQXNCO0FBTW5DO0lBQXlDLHVDQUFLO0lBQzFDLDZCQUFZLE9BQWU7UUFBM0IsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FFakI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUN0QyxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsS0FBSyxHQUs3QztBQUxZLGtEQUFtQjtBQU1oQztJQUE4Qyw0Q0FBSztJQUMvQyxrQ0FBWSxPQUFlO1FBQTNCLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBRWpCO1FBREcsS0FBSSxDQUFDLElBQUksR0FBRywwQkFBMEIsQ0FBQzs7SUFDM0MsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxBQUxELENBQThDLEtBQUssR0FLbEQ7QUFMWSw0REFBd0I7QUFNckM7SUFBd0Msc0NBQUs7SUFDekMsNEJBQVksT0FBZTtRQUEzQixZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUVqQjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUM7O0lBQ3JDLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFMRCxDQUF3QyxLQUFLLEdBSzVDO0FBTFksZ0RBQWtCO0FBTS9CO0lBQWtELGdEQUFLO0lBQ25ELHNDQUFZLE9BQWU7UUFBM0IsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FFakI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLDhCQUE4QixDQUFDOztJQUMvQyxDQUFDO0lBQ0wsbUNBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBa0QsS0FBSyxHQUt0RDtBQUxZLG9FQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuZXhwb3J0IGNsYXNzIEJleEV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQmV4RXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJleFBheW1lbnRFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkJleFBheW1lbnRFeGNlcHRpb25cIjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvbkV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ29uZmlndXJhdGlvbkV4Y2VwdGlvblwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFbmNyeXB0aW9uRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJFbmNyeXB0aW9uRXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiTWVyY2hhbnRTZXJ2aWNlRXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1vbmV5VXRpbEV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiTW9uZXlVdGlsRXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJleEFwaUNvbmZpZ3VyYXRpb25FeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkJleEFwaUNvbmZpZ3VyYXRpb25FeGNlcHRpb25cIjtcbiAgICB9XG59XG4iXX0=