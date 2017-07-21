"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VposConfig = (function () {
    function VposConfig() {
        this.extra = {};
    }
    VposConfig.prototype.addExtra = function (key, value) {
        this.extra[key] = value;
    };
    VposConfig.prototype.addSubMerchant = function (name) {
        this.extra.subMerchantName = name;
    };
    VposConfig.prototype.addSubMerchantForFinans = function (name, id, postalCode, city, country) {
        this.extra.subMerchantName = name;
        this.extra.subMerchantId = id;
        this.extra.subMerchantPostalCode = postalCode;
        this.extra.subMerchantCity = city;
        this.extra.subMerchantCountry = country;
    };
    Object.defineProperty(VposConfig.prototype, "Extra", {
        get: function () {
            return this.extra;
        },
        set: function (extra) {
            this.extra = extra;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VposConfig.prototype, "VposUserId", {
        get: function () {
            return this.vposUserId;
        },
        set: function (vposUserId) {
            this.vposUserId = vposUserId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VposConfig.prototype, "VposPassword", {
        get: function () {
            return this.vposPassword;
        },
        set: function (vposPassword) {
            this.vposPassword = vposPassword;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VposConfig.prototype, "BankIndicator", {
        get: function () {
            return this.bankIndicator;
        },
        set: function (bankIndicator) {
            this.bankIndicator = bankIndicator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VposConfig.prototype, "ServiceUrl", {
        get: function () {
            return this.serviceUrl;
        },
        set: function (serviceUrl) {
            this.serviceUrl = serviceUrl;
        },
        enumerable: true,
        configurable: true
    });
    VposConfig.prototype.isPreAuth = function () {
        return this.preAuth;
    };
    Object.defineProperty(VposConfig.prototype, "PreAuth", {
        set: function (preAuth) {
            this.preAuth = preAuth;
        },
        enumerable: true,
        configurable: true
    });
    return VposConfig;
}());
exports.VposConfig = VposConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBvc0NvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZXJjaGFudC9yZXF1ZXN0L3Zwb3NDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQVFJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLDZCQUFRLEdBQWYsVUFBZ0IsR0FBVyxFQUFFLEtBQWE7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVNLG1DQUFjLEdBQXJCLFVBQXNCLElBQVk7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFTSw0Q0FBdUIsR0FBOUIsVUFBK0IsSUFBWSxFQUFFLEVBQVUsRUFBRSxVQUFrQixFQUFFLElBQVksRUFBRSxPQUFlO1FBQ3RHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDO0lBQzVDLENBQUM7SUFFRCxzQkFBSSw2QkFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVUsS0FBVTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGtDQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBZSxVQUFrQjtZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG9DQUFZO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWlCLFlBQW9CO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLENBQUM7OztPQUpBO0lBTUQsc0JBQUkscUNBQWE7YUFBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBRUQsVUFBa0IsYUFBcUI7WUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDdkMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxrQ0FBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWUsVUFBa0I7WUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakMsQ0FBQzs7O09BSkE7SUFNTSw4QkFBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBSSwrQkFBTzthQUFYLFVBQVksT0FBZ0I7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFDTCxpQkFBQztBQUFELENBQUMsQUEzRUQsSUEyRUM7QUEzRVksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuZXhwb3J0IGNsYXNzIFZwb3NDb25maWcge1xuICAgIHByaXZhdGUgdnBvc1VzZXJJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgdnBvc1Bhc3N3b3JkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBleHRyYTogYW55O1xuICAgIHByaXZhdGUgYmFua0luZGljYXRvcjogc3RyaW5nO1xuICAgIHByaXZhdGUgc2VydmljZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgcHJlQXV0aDogYm9vbGVhbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5leHRyYSA9IHt9O1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRFeHRyYShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmV4dHJhW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkU3ViTWVyY2hhbnQobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXh0cmEuc3ViTWVyY2hhbnROYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkU3ViTWVyY2hhbnRGb3JGaW5hbnMobmFtZTogc3RyaW5nLCBpZDogc3RyaW5nLCBwb3N0YWxDb2RlOiBzdHJpbmcsIGNpdHk6IHN0cmluZywgY291bnRyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXh0cmEuc3ViTWVyY2hhbnROYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5leHRyYS5zdWJNZXJjaGFudElkID0gaWQ7XG4gICAgICAgIHRoaXMuZXh0cmEuc3ViTWVyY2hhbnRQb3N0YWxDb2RlID0gcG9zdGFsQ29kZTtcbiAgICAgICAgdGhpcy5leHRyYS5zdWJNZXJjaGFudENpdHkgPSBjaXR5O1xuICAgICAgICB0aGlzLmV4dHJhLnN1Yk1lcmNoYW50Q291bnRyeSA9IGNvdW50cnk7XG4gICAgfVxuXG4gICAgZ2V0IEV4dHJhKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4dHJhO1xuICAgIH1cblxuICAgIHNldCBFeHRyYShleHRyYTogYW55KSB7XG4gICAgICAgIHRoaXMuZXh0cmEgPSBleHRyYTtcbiAgICB9XG5cbiAgICBnZXQgVnBvc1VzZXJJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy52cG9zVXNlcklkO1xuICAgIH1cblxuICAgIHNldCBWcG9zVXNlcklkKHZwb3NVc2VySWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZwb3NVc2VySWQgPSB2cG9zVXNlcklkO1xuICAgIH1cblxuICAgIGdldCBWcG9zUGFzc3dvcmQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudnBvc1Bhc3N3b3JkO1xuICAgIH1cblxuICAgIHNldCBWcG9zUGFzc3dvcmQodnBvc1Bhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52cG9zUGFzc3dvcmQgPSB2cG9zUGFzc3dvcmQ7XG4gICAgfVxuXG4gICAgZ2V0IEJhbmtJbmRpY2F0b3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFua0luZGljYXRvcjtcbiAgICB9XG5cbiAgICBzZXQgQmFua0luZGljYXRvcihiYW5rSW5kaWNhdG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5iYW5rSW5kaWNhdG9yID0gYmFua0luZGljYXRvcjtcbiAgICB9XG5cbiAgICBnZXQgU2VydmljZVVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlVXJsO1xuICAgIH1cblxuICAgIHNldCBTZXJ2aWNlVXJsKHNlcnZpY2VVcmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlcnZpY2VVcmwgPSBzZXJ2aWNlVXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1ByZUF1dGgoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZUF1dGg7XG4gICAgfVxuXG4gICAgc2V0IFByZUF1dGgocHJlQXV0aDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnByZUF1dGggPSBwcmVBdXRoO1xuICAgIH1cbn1cbiJdfQ==