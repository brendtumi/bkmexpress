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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL3Bvc1Jlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWtCQTtJQVVJLG1CQUFtQixTQUFxQjtRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDckMsQ0FBQztJQUVELHNCQUFJLDhCQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBWSxPQUFlO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksK0JBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFhLFFBQWdCO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksa0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFnQixXQUFtQjtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG9DQUFhO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQUVELFVBQWtCLGFBQXFCO1lBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksdUNBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO2FBRUQsVUFBcUIsZ0JBQXdCO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUM3QyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHNDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzthQUVELFVBQW9CLGVBQXVCO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQzNDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksdUNBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO2FBRUQsVUFBcUIsZ0JBQXdCO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUM3QyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDhCQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBWSxPQUFlO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUwsZ0JBQUM7QUFBRCxDQUFDLEFBckZELElBcUZDO0FBckZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvc1Jlc3VsdCB7XG4gICAgb3JkZXJJZD86IHN0cmluZztcbiAgICBhdXRoQ29kZT86IHN0cmluZztcbiAgICBwb3NSZXNwb25zZT86IHN0cmluZztcbiAgICBwb3NSZXN1bHRDb2RlPzogc3RyaW5nO1xuICAgIHBvc1Jlc3VsdE1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgcmVmZXJlbmNlTnVtYmVyPzogc3RyaW5nO1xuICAgIHBvc1RyYW5zYWN0aW9uSWQ/OiBzdHJpbmc7XG4gICAgcG9zQmFuaz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBvc1Jlc3VsdCB7XG4gICAgcHJpdmF0ZSBvcmRlcklkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhdXRoQ29kZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcG9zUmVzcG9uc2U6IHN0cmluZztcbiAgICBwcml2YXRlIHBvc1Jlc3VsdENvZGU6IHN0cmluZztcbiAgICBwcml2YXRlIHBvc1Jlc3VsdE1lc3NhZ2U6IHN0cmluZztcbiAgICBwcml2YXRlIHJlZmVyZW5jZU51bWJlcjogc3RyaW5nO1xuICAgIHByaXZhdGUgcG9zVHJhbnNhY3Rpb25JZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcG9zQmFuazogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHBvc1Jlc3VsdDogSVBvc1Jlc3VsdCkge1xuICAgICAgICB0aGlzLm9yZGVySWQgPSBwb3NSZXN1bHQub3JkZXJJZDtcbiAgICAgICAgdGhpcy5hdXRoQ29kZSA9IHBvc1Jlc3VsdC5hdXRoQ29kZTtcbiAgICAgICAgdGhpcy5wb3NSZXNwb25zZSA9IHBvc1Jlc3VsdC5wb3NSZXNwb25zZTtcbiAgICAgICAgdGhpcy5wb3NSZXN1bHRDb2RlID0gcG9zUmVzdWx0LnBvc1Jlc3VsdENvZGU7XG4gICAgICAgIHRoaXMucG9zUmVzdWx0TWVzc2FnZSA9IHBvc1Jlc3VsdC5wb3NSZXN1bHRNZXNzYWdlO1xuICAgICAgICB0aGlzLnJlZmVyZW5jZU51bWJlciA9IHBvc1Jlc3VsdC5yZWZlcmVuY2VOdW1iZXI7XG4gICAgICAgIHRoaXMucG9zVHJhbnNhY3Rpb25JZCA9IHBvc1Jlc3VsdC5wb3NUcmFuc2FjdGlvbklkO1xuICAgICAgICB0aGlzLnBvc0JhbmsgPSBwb3NSZXN1bHQucG9zQmFuaztcbiAgICB9XG5cbiAgICBnZXQgT3JkZXJJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5vcmRlcklkO1xuICAgIH1cblxuICAgIHNldCBPcmRlcklkKG9yZGVySWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xuICAgIH1cblxuICAgIGdldCBBdXRoQ29kZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoQ29kZTtcbiAgICB9XG5cbiAgICBzZXQgQXV0aENvZGUoYXV0aENvZGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmF1dGhDb2RlID0gYXV0aENvZGU7XG4gICAgfVxuXG4gICAgZ2V0IFBvc1Jlc3BvbnNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc1Jlc3BvbnNlO1xuICAgIH1cblxuICAgIHNldCBQb3NSZXNwb25zZShwb3NSZXNwb25zZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9zUmVzcG9uc2UgPSBwb3NSZXNwb25zZTtcbiAgICB9XG5cbiAgICBnZXQgUG9zUmVzdWx0Q29kZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NSZXN1bHRDb2RlO1xuICAgIH1cblxuICAgIHNldCBQb3NSZXN1bHRDb2RlKHBvc1Jlc3VsdENvZGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBvc1Jlc3VsdENvZGUgPSBwb3NSZXN1bHRDb2RlO1xuICAgIH1cblxuICAgIGdldCBQb3NSZXN1bHRNZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc1Jlc3VsdE1lc3NhZ2U7XG4gICAgfVxuXG4gICAgc2V0IFBvc1Jlc3VsdE1lc3NhZ2UocG9zUmVzdWx0TWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9zUmVzdWx0TWVzc2FnZSA9IHBvc1Jlc3VsdE1lc3NhZ2U7XG4gICAgfVxuXG4gICAgZ2V0IFJlZmVyZW5jZU51bWJlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VOdW1iZXI7XG4gICAgfVxuXG4gICAgc2V0IFJlZmVyZW5jZU51bWJlcihyZWZlcmVuY2VOdW1iZXI6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZU51bWJlciA9IHJlZmVyZW5jZU51bWJlcjtcbiAgICB9XG5cbiAgICBnZXQgUG9zVHJhbnNhY3Rpb25JZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NUcmFuc2FjdGlvbklkO1xuICAgIH1cblxuICAgIHNldCBQb3NUcmFuc2FjdGlvbklkKHBvc1RyYW5zYWN0aW9uSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBvc1RyYW5zYWN0aW9uSWQgPSBwb3NUcmFuc2FjdGlvbklkO1xuICAgIH1cblxuICAgIGdldCBQb3NCYW5rKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc0Jhbms7XG4gICAgfVxuXG4gICAgc2V0IFBvc0JhbmsocG9zQmFuazogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucG9zQmFuayA9IHBvc0Jhbms7XG4gICAgfVxuXG59Il19