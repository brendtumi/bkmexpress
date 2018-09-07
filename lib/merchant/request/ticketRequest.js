"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TicketRequest = (function () {
    function TicketRequest(type) {
        this.installmentUrl = null;
        this.type = type;
    }
    Object.defineProperty(TicketRequest.prototype, "Type", {
        get: function () {
            return this.type;
        },
        set: function (type) {
            this.type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TicketRequest.prototype, "InstallmentUrl", {
        get: function () {
            return this.installmentUrl;
        },
        set: function (installmentUrl) {
            this.installmentUrl = installmentUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TicketRequest.prototype, "NonceUrl", {
        get: function () {
            return this.nonceUrl;
        },
        set: function (nonceUrl) {
            this.nonceUrl = nonceUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TicketRequest.prototype, "Amount", {
        get: function () {
            return this.amount;
        },
        set: function (amount) {
            this.amount = amount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TicketRequest.prototype, "OrderId", {
        get: function () {
            return this.orderId;
        },
        set: function (orderId) {
            this.orderId = orderId;
        },
        enumerable: true,
        configurable: true
    });
    return TicketRequest;
}());
exports.TicketRequest = TicketRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZXJjaGFudC9yZXF1ZXN0L3RpY2tldFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQU9JLHVCQUFtQixJQUFhO1FBTHhCLG1CQUFjLEdBQWtCLElBQUksQ0FBQztRQU16QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQUksK0JBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBRUQsVUFBUyxJQUFZO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUpBO0lBTUQsc0JBQUkseUNBQWM7YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzthQUVELFVBQW1CLGNBQXNCO1lBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksbUNBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBYSxRQUFnQjtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGlDQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVcsTUFBYztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGtDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVksT0FBZTtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQUtMLG9CQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWxEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5leHBvcnQgY2xhc3MgVGlja2V0UmVxdWVzdCB7XG4gICAgcHJpdmF0ZSB0eXBlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpbnN0YWxsbWVudFVybDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBub25jZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgYW1vdW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBvcmRlcklkOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IodHlwZT86IHN0cmluZykge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIGdldCBUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfVxuXG4gICAgc2V0IFR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IEluc3RhbGxtZW50VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbGxtZW50VXJsO1xuICAgIH1cblxuICAgIHNldCBJbnN0YWxsbWVudFVybChpbnN0YWxsbWVudFVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaW5zdGFsbG1lbnRVcmwgPSBpbnN0YWxsbWVudFVybDtcbiAgICB9XG5cbiAgICBnZXQgTm9uY2VVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9uY2VVcmw7XG4gICAgfVxuXG4gICAgc2V0IE5vbmNlVXJsKG5vbmNlVXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ub25jZVVybCA9IG5vbmNlVXJsO1xuICAgIH1cblxuICAgIGdldCBBbW91bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50O1xuICAgIH1cblxuICAgIHNldCBBbW91bnQoYW1vdW50OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IE9yZGVySWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJJZDtcbiAgICB9XG5cbiAgICBzZXQgT3JkZXJJZChvcmRlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgICB9XG59XG4iXX0=