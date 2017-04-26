"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TicketRequest = (function () {
    function TicketRequest() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZXJjaGFudC9yZXF1ZXN0L3RpY2tldFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQUFBO0lBOENBLENBQUM7SUF2Q0csc0JBQUksK0JBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFFRCxVQUFTLElBQVk7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx5Q0FBYzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7YUFFRCxVQUFtQixjQUFzQjtZQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUN6QyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG1DQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBYSxRQUFnQjtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGlDQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVyxNQUFjO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksa0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFZLE9BQWU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFLTCxvQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuZXhwb3J0IGNsYXNzIFRpY2tldFJlcXVlc3Qge1xuICAgIHByaXZhdGUgdHlwZTogc3RyaW5nO1xuICAgIHByaXZhdGUgaW5zdGFsbG1lbnRVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIG5vbmNlVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhbW91bnQ6IHN0cmluZztcbiAgICBwcml2YXRlIG9yZGVySWQ6IHN0cmluZztcblxuICAgIGdldCBUeXBlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfVxuXG4gICAgc2V0IFR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IEluc3RhbGxtZW50VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbGxtZW50VXJsO1xuICAgIH1cblxuICAgIHNldCBJbnN0YWxsbWVudFVybChpbnN0YWxsbWVudFVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaW5zdGFsbG1lbnRVcmwgPSBpbnN0YWxsbWVudFVybDtcbiAgICB9XG5cbiAgICBnZXQgTm9uY2VVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9uY2VVcmw7XG4gICAgfVxuXG4gICAgc2V0IE5vbmNlVXJsKG5vbmNlVXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5ub25jZVVybCA9IG5vbmNlVXJsO1xuICAgIH1cblxuICAgIGdldCBBbW91bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW1vdW50O1xuICAgIH1cblxuICAgIHNldCBBbW91bnQoYW1vdW50OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IE9yZGVySWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJJZDtcbiAgICB9XG5cbiAgICBzZXQgT3JkZXJJZChvcmRlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgICB9XG59Il19