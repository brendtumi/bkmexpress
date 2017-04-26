"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VposConfig = (function () {
    function VposConfig() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBvc0NvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZXJjaGFudC9yZXF1ZXN0L3Zwb3NDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQUFBO0lBdUVBLENBQUM7SUEvRFUsNkJBQVEsR0FBZixVQUFnQixHQUFXLEVBQUUsS0FBYTtRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRU0sbUNBQWMsR0FBckIsVUFBc0IsSUFBWTtRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVNLDRDQUF1QixHQUE5QixVQUErQixJQUFZLEVBQUUsRUFBVSxFQUFFLFVBQWtCLEVBQUUsSUFBWSxFQUFFLE9BQWU7UUFDdEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixHQUFHLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUM7SUFDNUMsQ0FBQztJQUVELHNCQUFJLDZCQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBVSxLQUFVO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksa0NBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFlLFVBQWtCO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksb0NBQVk7YUFBaEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO2FBRUQsVUFBaUIsWUFBb0I7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDckMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxQ0FBYTthQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7YUFFRCxVQUFrQixhQUFxQjtZQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUN2QyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGtDQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBZSxVQUFrQjtZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxDQUFDOzs7T0FKQTtJQU1NLDhCQUFTLEdBQWhCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELHNCQUFJLCtCQUFPO2FBQVgsVUFBWSxPQUFnQjtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQXZFRCxJQXVFQztBQXZFWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5leHBvcnQgY2xhc3MgVnBvc0NvbmZpZyB7XG4gICAgcHJpdmF0ZSB2cG9zVXNlcklkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB2cG9zUGFzc3dvcmQ6IHN0cmluZztcbiAgICBwcml2YXRlIGV4dHJhOiBhbnk7XG4gICAgcHJpdmF0ZSBiYW5rSW5kaWNhdG9yOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzZXJ2aWNlVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwcmVBdXRoOiBib29sZWFuO1xuXG4gICAgcHVibGljIGFkZEV4dHJhKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZXh0cmFba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRTdWJNZXJjaGFudChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHRyYS5zdWJNZXJjaGFudE5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRTdWJNZXJjaGFudEZvckZpbmFucyhuYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIHBvc3RhbENvZGU6IHN0cmluZywgY2l0eTogc3RyaW5nLCBjb3VudHJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHRyYS5zdWJNZXJjaGFudE5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmV4dHJhLnN1Yk1lcmNoYW50SWQgPSBpZDtcbiAgICAgICAgdGhpcy5leHRyYS5zdWJNZXJjaGFudFBvc3RhbENvZGUgPSBwb3N0YWxDb2RlO1xuICAgICAgICB0aGlzLmV4dHJhLnN1Yk1lcmNoYW50Q2l0eSA9IGNpdHk7XG4gICAgICAgIHRoaXMuZXh0cmEuc3ViTWVyY2hhbnRDb3VudHJ5ID0gY291bnRyeTtcbiAgICB9XG5cbiAgICBnZXQgRXh0cmEoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmE7XG4gICAgfVxuXG4gICAgc2V0IEV4dHJhKGV4dHJhOiBhbnkpIHtcbiAgICAgICAgdGhpcy5leHRyYSA9IGV4dHJhO1xuICAgIH1cblxuICAgIGdldCBWcG9zVXNlcklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnZwb3NVc2VySWQ7XG4gICAgfVxuXG4gICAgc2V0IFZwb3NVc2VySWQodnBvc1VzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudnBvc1VzZXJJZCA9IHZwb3NVc2VySWQ7XG4gICAgfVxuXG4gICAgZ2V0IFZwb3NQYXNzd29yZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy52cG9zUGFzc3dvcmQ7XG4gICAgfVxuXG4gICAgc2V0IFZwb3NQYXNzd29yZCh2cG9zUGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZwb3NQYXNzd29yZCA9IHZwb3NQYXNzd29yZDtcbiAgICB9XG5cbiAgICBnZXQgQmFua0luZGljYXRvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5iYW5rSW5kaWNhdG9yO1xuICAgIH1cblxuICAgIHNldCBCYW5rSW5kaWNhdG9yKGJhbmtJbmRpY2F0b3I6IHN0cmluZykge1xuICAgICAgICB0aGlzLmJhbmtJbmRpY2F0b3IgPSBiYW5rSW5kaWNhdG9yO1xuICAgIH1cblxuICAgIGdldCBTZXJ2aWNlVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2VVcmw7XG4gICAgfVxuXG4gICAgc2V0IFNlcnZpY2VVcmwoc2VydmljZVVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VydmljZVVybCA9IHNlcnZpY2VVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIGlzUHJlQXV0aCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlQXV0aDtcbiAgICB9XG5cbiAgICBzZXQgUHJlQXV0aChwcmVBdXRoOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMucHJlQXV0aCA9IHByZUF1dGg7XG4gICAgfVxufSJdfQ==