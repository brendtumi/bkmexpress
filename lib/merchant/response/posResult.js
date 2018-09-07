"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PosResult = (function () {
    function PosResult(posResult) {
        this.orderId = posResult.orderId;
        this.authCode = posResult.authCode;
        this.posResponse = posResult.posResponse;
        this.posResultCode = posResult.posResultCode;
        this.posResultMessage = posResult.posResultMessage;
        this.referenceNumber = posResult.referenceNumber;
        this.posTransactionId = posResult.posTransactionId;
        this.posBank = posResult.posBank;
    }
    Object.defineProperty(PosResult.prototype, "OrderId", {
        get: function () {
            return this.orderId;
        },
        set: function (orderId) {
            this.orderId = orderId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosResult.prototype, "AuthCode", {
        get: function () {
            return this.authCode;
        },
        set: function (authCode) {
            this.authCode = authCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosResult.prototype, "PosResponse", {
        get: function () {
            return this.posResponse;
        },
        set: function (posResponse) {
            this.posResponse = posResponse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosResult.prototype, "PosResultCode", {
        get: function () {
            return this.posResultCode;
        },
        set: function (posResultCode) {
            this.posResultCode = posResultCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosResult.prototype, "PosResultMessage", {
        get: function () {
            return this.posResultMessage;
        },
        set: function (posResultMessage) {
            this.posResultMessage = posResultMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosResult.prototype, "ReferenceNumber", {
        get: function () {
            return this.referenceNumber;
        },
        set: function (referenceNumber) {
            this.referenceNumber = referenceNumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosResult.prototype, "PosTransactionId", {
        get: function () {
            return this.posTransactionId;
        },
        set: function (posTransactionId) {
            this.posTransactionId = posTransactionId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PosResult.prototype, "PosBank", {
        get: function () {
            return this.posBank;
        },
        set: function (posBank) {
            this.posBank = posBank;
        },
        enumerable: true,
        configurable: true
    });
    return PosResult;
}());
exports.PosResult = PosResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL3Bvc1Jlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWtCQTtJQVVJLG1CQUFtQixTQUFxQjtRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDckMsQ0FBQztJQUVELHNCQUFJLDhCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVksT0FBZTtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLCtCQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQWEsUUFBZ0I7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDN0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxrQ0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFnQixXQUFtQjtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG9DQUFhO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7YUFFRCxVQUFrQixhQUFxQjtZQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUN2QyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHVDQUFnQjthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7YUFFRCxVQUFxQixnQkFBd0I7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQzdDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksc0NBQWU7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzthQUVELFVBQW9CLGVBQXVCO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQzNDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksdUNBQWdCO2FBQXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzthQUVELFVBQXFCLGdCQUF3QjtZQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0MsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw4QkFBTzthQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFZLE9BQWU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNTCxnQkFBQztBQUFELENBQUMsQUFyRkQsSUFxRkM7QUFyRlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJUG9zUmVzdWx0IHtcbiAgICBvcmRlcklkPzogc3RyaW5nO1xuICAgIGF1dGhDb2RlPzogc3RyaW5nO1xuICAgIHBvc1Jlc3BvbnNlPzogc3RyaW5nO1xuICAgIHBvc1Jlc3VsdENvZGU/OiBzdHJpbmc7XG4gICAgcG9zUmVzdWx0TWVzc2FnZT86IHN0cmluZztcbiAgICByZWZlcmVuY2VOdW1iZXI/OiBzdHJpbmc7XG4gICAgcG9zVHJhbnNhY3Rpb25JZD86IHN0cmluZztcbiAgICBwb3NCYW5rPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUG9zUmVzdWx0IHtcbiAgICBwcml2YXRlIG9yZGVySWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGF1dGhDb2RlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb3NSZXNwb25zZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcG9zUmVzdWx0Q29kZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcG9zUmVzdWx0TWVzc2FnZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVmZXJlbmNlTnVtYmVyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb3NUcmFuc2FjdGlvbklkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb3NCYW5rOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocG9zUmVzdWx0OiBJUG9zUmVzdWx0KSB7XG4gICAgICAgIHRoaXMub3JkZXJJZCA9IHBvc1Jlc3VsdC5vcmRlcklkO1xuICAgICAgICB0aGlzLmF1dGhDb2RlID0gcG9zUmVzdWx0LmF1dGhDb2RlO1xuICAgICAgICB0aGlzLnBvc1Jlc3BvbnNlID0gcG9zUmVzdWx0LnBvc1Jlc3BvbnNlO1xuICAgICAgICB0aGlzLnBvc1Jlc3VsdENvZGUgPSBwb3NSZXN1bHQucG9zUmVzdWx0Q29kZTtcbiAgICAgICAgdGhpcy5wb3NSZXN1bHRNZXNzYWdlID0gcG9zUmVzdWx0LnBvc1Jlc3VsdE1lc3NhZ2U7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlTnVtYmVyID0gcG9zUmVzdWx0LnJlZmVyZW5jZU51bWJlcjtcbiAgICAgICAgdGhpcy5wb3NUcmFuc2FjdGlvbklkID0gcG9zUmVzdWx0LnBvc1RyYW5zYWN0aW9uSWQ7XG4gICAgICAgIHRoaXMucG9zQmFuayA9IHBvc1Jlc3VsdC5wb3NCYW5rO1xuICAgIH1cblxuICAgIGdldCBPcmRlcklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVySWQ7XG4gICAgfVxuXG4gICAgc2V0IE9yZGVySWQob3JkZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG4gICAgfVxuXG4gICAgZ2V0IEF1dGhDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhDb2RlO1xuICAgIH1cblxuICAgIHNldCBBdXRoQ29kZShhdXRoQ29kZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYXV0aENvZGUgPSBhdXRoQ29kZTtcbiAgICB9XG5cbiAgICBnZXQgUG9zUmVzcG9uc2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zUmVzcG9uc2U7XG4gICAgfVxuXG4gICAgc2V0IFBvc1Jlc3BvbnNlKHBvc1Jlc3BvbnNlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3NSZXNwb25zZSA9IHBvc1Jlc3BvbnNlO1xuICAgIH1cblxuICAgIGdldCBQb3NSZXN1bHRDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc1Jlc3VsdENvZGU7XG4gICAgfVxuXG4gICAgc2V0IFBvc1Jlc3VsdENvZGUocG9zUmVzdWx0Q29kZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9zUmVzdWx0Q29kZSA9IHBvc1Jlc3VsdENvZGU7XG4gICAgfVxuXG4gICAgZ2V0IFBvc1Jlc3VsdE1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zUmVzdWx0TWVzc2FnZTtcbiAgICB9XG5cbiAgICBzZXQgUG9zUmVzdWx0TWVzc2FnZShwb3NSZXN1bHRNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3NSZXN1bHRNZXNzYWdlID0gcG9zUmVzdWx0TWVzc2FnZTtcbiAgICB9XG5cbiAgICBnZXQgUmVmZXJlbmNlTnVtYmVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZU51bWJlcjtcbiAgICB9XG5cbiAgICBzZXQgUmVmZXJlbmNlTnVtYmVyKHJlZmVyZW5jZU51bWJlcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlTnVtYmVyID0gcmVmZXJlbmNlTnVtYmVyO1xuICAgIH1cblxuICAgIGdldCBQb3NUcmFuc2FjdGlvbklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc1RyYW5zYWN0aW9uSWQ7XG4gICAgfVxuXG4gICAgc2V0IFBvc1RyYW5zYWN0aW9uSWQocG9zVHJhbnNhY3Rpb25JZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9zVHJhbnNhY3Rpb25JZCA9IHBvc1RyYW5zYWN0aW9uSWQ7XG4gICAgfVxuXG4gICAgZ2V0IFBvc0JhbmsoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zQmFuaztcbiAgICB9XG5cbiAgICBzZXQgUG9zQmFuayhwb3NCYW5rOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3NCYW5rID0gcG9zQmFuaztcbiAgICB9XG5cbn1cbiJdfQ==