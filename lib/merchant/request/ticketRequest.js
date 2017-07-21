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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlja2V0UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZXJjaGFudC9yZXF1ZXN0L3RpY2tldFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQU9JLHVCQUFtQixJQUFhO1FBTHhCLG1CQUFjLEdBQWtCLElBQUksQ0FBQztRQU16QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQUksK0JBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFFRCxVQUFTLElBQVk7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx5Q0FBYzthQUFsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7YUFFRCxVQUFtQixjQUFzQjtZQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUN6QyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG1DQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBYSxRQUFnQjtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGlDQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBVyxNQUFjO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksa0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFZLE9BQWU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFLTCxvQkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUFsRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuZXhwb3J0IGNsYXNzIFRpY2tldFJlcXVlc3Qge1xuICAgIHByaXZhdGUgdHlwZTogc3RyaW5nO1xuICAgIHByaXZhdGUgaW5zdGFsbG1lbnRVcmw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgbm9uY2VVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIGFtb3VudDogc3RyaW5nO1xuICAgIHByaXZhdGUgb3JkZXJJZDogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHR5cGU/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBnZXQgVHlwZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xuICAgIH1cblxuICAgIHNldCBUeXBlKHR5cGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIGdldCBJbnN0YWxsbWVudFVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YWxsbWVudFVybDtcbiAgICB9XG5cbiAgICBzZXQgSW5zdGFsbG1lbnRVcmwoaW5zdGFsbG1lbnRVcmw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmluc3RhbGxtZW50VXJsID0gaW5zdGFsbG1lbnRVcmw7XG4gICAgfVxuXG4gICAgZ2V0IE5vbmNlVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vbmNlVXJsO1xuICAgIH1cblxuICAgIHNldCBOb25jZVVybChub25jZVVybDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubm9uY2VVcmwgPSBub25jZVVybDtcbiAgICB9XG5cbiAgICBnZXQgQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmFtb3VudDtcbiAgICB9XG5cbiAgICBzZXQgQW1vdW50KGFtb3VudDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xuICAgIH1cblxuICAgIGdldCBPcmRlcklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVySWQ7XG4gICAgfVxuXG4gICAgc2V0IE9yZGVySWQob3JkZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG4gICAgfVxufVxuIl19