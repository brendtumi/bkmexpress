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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL3Bvc1Jlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWtCQTtJQVVJLG1CQUFtQixTQUFxQjtRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7SUFDckMsQ0FBQztJQUVELHNCQUFJLDhCQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBWSxPQUFlO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksK0JBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFhLFFBQWdCO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksa0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFnQixXQUFtQjtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG9DQUFhO2FBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQUVELFVBQWtCLGFBQXFCO1lBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ3ZDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksdUNBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO2FBRUQsVUFBcUIsZ0JBQXdCO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUM3QyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHNDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzthQUVELFVBQW9CLGVBQXVCO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQzNDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksdUNBQWdCO2FBQXBCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO2FBRUQsVUFBcUIsZ0JBQXdCO1lBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUM3QyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDhCQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBWSxPQUFlO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUwsZ0JBQUM7QUFBRCxDQUFDLEFBckZELElBcUZDO0FBckZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBvc1Jlc3VsdCB7XG4gICAgb3JkZXJJZDogc3RyaW5nO1xuICAgIGF1dGhDb2RlOiBzdHJpbmc7XG4gICAgcG9zUmVzcG9uc2U6IHN0cmluZztcbiAgICBwb3NSZXN1bHRDb2RlOiBzdHJpbmc7XG4gICAgcG9zUmVzdWx0TWVzc2FnZTogc3RyaW5nO1xuICAgIHJlZmVyZW5jZU51bWJlcjogc3RyaW5nO1xuICAgIHBvc1RyYW5zYWN0aW9uSWQ6IHN0cmluZztcbiAgICBwb3NCYW5rOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NSZXN1bHQge1xuICAgIHByaXZhdGUgb3JkZXJJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgYXV0aENvZGU6IHN0cmluZztcbiAgICBwcml2YXRlIHBvc1Jlc3BvbnNlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb3NSZXN1bHRDb2RlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwb3NSZXN1bHRNZXNzYWdlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWZlcmVuY2VOdW1iZXI6IHN0cmluZztcbiAgICBwcml2YXRlIHBvc1RyYW5zYWN0aW9uSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHBvc0Jhbms6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwb3NSZXN1bHQ6IElQb3NSZXN1bHQpIHtcbiAgICAgICAgdGhpcy5vcmRlcklkID0gcG9zUmVzdWx0Lm9yZGVySWQ7XG4gICAgICAgIHRoaXMuYXV0aENvZGUgPSBwb3NSZXN1bHQuYXV0aENvZGU7XG4gICAgICAgIHRoaXMucG9zUmVzcG9uc2UgPSBwb3NSZXN1bHQucG9zUmVzcG9uc2U7XG4gICAgICAgIHRoaXMucG9zUmVzdWx0Q29kZSA9IHBvc1Jlc3VsdC5wb3NSZXN1bHRDb2RlO1xuICAgICAgICB0aGlzLnBvc1Jlc3VsdE1lc3NhZ2UgPSBwb3NSZXN1bHQucG9zUmVzdWx0TWVzc2FnZTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VOdW1iZXIgPSBwb3NSZXN1bHQucmVmZXJlbmNlTnVtYmVyO1xuICAgICAgICB0aGlzLnBvc1RyYW5zYWN0aW9uSWQgPSBwb3NSZXN1bHQucG9zVHJhbnNhY3Rpb25JZDtcbiAgICAgICAgdGhpcy5wb3NCYW5rID0gcG9zUmVzdWx0LnBvc0Jhbms7XG4gICAgfVxuXG4gICAgZ2V0IE9yZGVySWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJJZDtcbiAgICB9XG5cbiAgICBzZXQgT3JkZXJJZChvcmRlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgICB9XG5cbiAgICBnZXQgQXV0aENvZGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aENvZGU7XG4gICAgfVxuXG4gICAgc2V0IEF1dGhDb2RlKGF1dGhDb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hdXRoQ29kZSA9IGF1dGhDb2RlO1xuICAgIH1cblxuICAgIGdldCBQb3NSZXNwb25zZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NSZXNwb25zZTtcbiAgICB9XG5cbiAgICBzZXQgUG9zUmVzcG9uc2UocG9zUmVzcG9uc2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBvc1Jlc3BvbnNlID0gcG9zUmVzcG9uc2U7XG4gICAgfVxuXG4gICAgZ2V0IFBvc1Jlc3VsdENvZGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zUmVzdWx0Q29kZTtcbiAgICB9XG5cbiAgICBzZXQgUG9zUmVzdWx0Q29kZShwb3NSZXN1bHRDb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3NSZXN1bHRDb2RlID0gcG9zUmVzdWx0Q29kZTtcbiAgICB9XG5cbiAgICBnZXQgUG9zUmVzdWx0TWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NSZXN1bHRNZXNzYWdlO1xuICAgIH1cblxuICAgIHNldCBQb3NSZXN1bHRNZXNzYWdlKHBvc1Jlc3VsdE1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBvc1Jlc3VsdE1lc3NhZ2UgPSBwb3NSZXN1bHRNZXNzYWdlO1xuICAgIH1cblxuICAgIGdldCBSZWZlcmVuY2VOdW1iZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlTnVtYmVyO1xuICAgIH1cblxuICAgIHNldCBSZWZlcmVuY2VOdW1iZXIocmVmZXJlbmNlTnVtYmVyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VOdW1iZXIgPSByZWZlcmVuY2VOdW1iZXI7XG4gICAgfVxuXG4gICAgZ2V0IFBvc1RyYW5zYWN0aW9uSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zVHJhbnNhY3Rpb25JZDtcbiAgICB9XG5cbiAgICBzZXQgUG9zVHJhbnNhY3Rpb25JZChwb3NUcmFuc2FjdGlvbklkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wb3NUcmFuc2FjdGlvbklkID0gcG9zVHJhbnNhY3Rpb25JZDtcbiAgICB9XG5cbiAgICBnZXQgUG9zQmFuaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NCYW5rO1xuICAgIH1cblxuICAgIHNldCBQb3NCYW5rKHBvc0Jhbms6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBvc0JhbmsgPSBwb3NCYW5rO1xuICAgIH1cblxufSJdfQ==