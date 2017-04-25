/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 */
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
/* tslint:disable:max-classes-per-file */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9leGNlcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7Ozs7Ozs7Ozs7Ozs7QUFFSCx5Q0FBeUM7QUFDekM7SUFBa0MsZ0NBQUs7SUFDbkMsc0JBQVksT0FBTztRQUFuQixZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUVqQjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDOztJQUMvQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBa0MsS0FBSyxHQUt0QztBQUxZLG9DQUFZO0FBTXpCO0lBQXlDLHVDQUFLO0lBQzFDLDZCQUFZLE9BQU87UUFBbkIsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FFakI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDOztJQUN0QyxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBeUMsS0FBSyxHQUs3QztBQUxZLGtEQUFtQjtBQU1oQztJQUE0QywwQ0FBSztJQUM3QyxnQ0FBWSxPQUFPO1FBQW5CLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBRWpCO1FBREcsS0FBSSxDQUFDLElBQUksR0FBRyx3QkFBd0IsQ0FBQzs7SUFDekMsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxBQUxELENBQTRDLEtBQUssR0FLaEQ7QUFMWSx3REFBc0I7QUFNbkM7SUFBeUMsdUNBQUs7SUFDMUMsNkJBQVksT0FBTztRQUFuQixZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUVqQjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7O0lBQ3RDLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQUFMRCxDQUF5QyxLQUFLLEdBSzdDO0FBTFksa0RBQW1CO0FBTWhDO0lBQThDLDRDQUFLO0lBQy9DLGtDQUFZLE9BQU87UUFBbkIsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FFakI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLDBCQUEwQixDQUFDOztJQUMzQyxDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBOEMsS0FBSyxHQUtsRDtBQUxZLDREQUF3QjtBQU1yQztJQUF3QyxzQ0FBSztJQUN6Qyw0QkFBWSxPQUFPO1FBQW5CLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBRWpCO1FBREcsS0FBSSxDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQzs7SUFDckMsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXdDLEtBQUssR0FLNUM7QUFMWSxnREFBa0I7QUFNL0I7SUFBa0QsZ0RBQUs7SUFDbkQsc0NBQVksT0FBTztRQUFuQixZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUVqQjtRQURHLEtBQUksQ0FBQyxJQUFJLEdBQUcsOEJBQThCLENBQUM7O0lBQy9DLENBQUM7SUFDTCxtQ0FBQztBQUFELENBQUMsQUFMRCxDQUFrRCxLQUFLLEdBS3REO0FBTFksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1jbGFzc2VzLXBlci1maWxlICovXG5leHBvcnQgY2xhc3MgQmV4RXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiQmV4RXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJleFBheW1lbnRFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJCZXhQYXltZW50RXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25FeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDb25maWd1cmF0aW9uRXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEVuY3J5cHRpb25FeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJFbmNyeXB0aW9uRXhjZXB0aW9uXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lcmNoYW50U2VydmljZUV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIk1lcmNoYW50U2VydmljZUV4Y2VwdGlvblwiO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNb25leVV0aWxFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJNb25leVV0aWxFeGNlcHRpb25cIjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmV4QXBpQ29uZmlndXJhdGlvbkV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkJleEFwaUNvbmZpZ3VyYXRpb25FeGNlcHRpb25cIjtcbiAgICB9XG59XG4iXX0=