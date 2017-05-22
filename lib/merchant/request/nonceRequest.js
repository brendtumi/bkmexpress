"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NonceRequest = (function () {
    function NonceRequest(id, path, issuer, approver, token, signature, reply) {
        this.id = id;
        this.path = path;
        this.issuer = issuer;
        this.approver = approver;
        this.token = token;
        this.signature = signature;
        this.reply = reply;
    }
    Object.defineProperty(NonceRequest.prototype, "Id", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceRequest.prototype, "Path", {
        get: function () {
            return this.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceRequest.prototype, "Issuer", {
        get: function () {
            return this.issuer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceRequest.prototype, "Approver", {
        get: function () {
            return this.approver;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceRequest.prototype, "Token", {
        get: function () {
            return this.token;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceRequest.prototype, "Reply", {
        get: function () {
            return this.reply;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceRequest.prototype, "TicketId", {
        get: function () {
            return this.reply.TicketId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceRequest.prototype, "OrderId", {
        get: function () {
            return this.reply.OrderId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceRequest.prototype, "Signature", {
        get: function () {
            return this.signature;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceRequest.prototype, "TotalAmount", {
        get: function () {
            return this.reply.TotalAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceRequest.prototype, "TotalAmountWithInstallmentCharge", {
        get: function () {
            return this.reply.TotalAmountWithInstallmentCharge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceRequest.prototype, "NumberOfInstallments", {
        get: function () {
            return this.reply.NumberOfInstallments;
        },
        enumerable: true,
        configurable: true
    });
    return NonceRequest;
}());
exports.NonceRequest = NonceRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uY2VSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3JlcXVlc3Qvbm9uY2VSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBa0JBO0lBU0ksc0JBQW1CLEVBQVUsRUFBRSxJQUFZLEVBQUUsTUFBYyxFQUFFLFFBQWdCLEVBQUUsS0FBYSxFQUFFLFNBQWlCLEVBQUUsS0FBaUI7UUFDOUgsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsc0JBQUksNEJBQUU7YUFBTjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxQ0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMERBQWdDO2FBQXBDO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4Q0FBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQUVMLG1CQUFDO0FBQUQsQ0FBQyxBQW5FRCxJQW1FQztBQW5FWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDIyLjA1LjIwMTdcbiAqL1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuXG5leHBvcnQgaW50ZXJmYWNlIElOb25jZURhdGEge1xuICAgIFRpY2tldElkOiBzdHJpbmc7XG4gICAgT3JkZXJJZDogc3RyaW5nO1xuICAgIFRvdGFsQW1vdW50OiBzdHJpbmc7XG4gICAgVG90YWxBbW91bnRXaXRoSW5zdGFsbG1lbnRDaGFyZ2U6IHN0cmluZztcbiAgICBOdW1iZXJPZkluc3RhbGxtZW50czogbnVtYmVyO1xuICAgIEhhc2g6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIE5vbmNlUmVxdWVzdCB7XG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuICAgIHByaXZhdGUgcGF0aDogc3RyaW5nO1xuICAgIHByaXZhdGUgaXNzdWVyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhcHByb3Zlcjogc3RyaW5nO1xuICAgIHByaXZhdGUgdG9rZW46IHN0cmluZztcbiAgICBwcml2YXRlIHNpZ25hdHVyZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVwbHk6IElOb25jZURhdGE7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgcGF0aDogc3RyaW5nLCBpc3N1ZXI6IHN0cmluZywgYXBwcm92ZXI6IHN0cmluZywgdG9rZW46IHN0cmluZywgc2lnbmF0dXJlOiBzdHJpbmcsIHJlcGx5OiBJTm9uY2VEYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5pc3N1ZXIgPSBpc3N1ZXI7XG4gICAgICAgIHRoaXMuYXBwcm92ZXIgPSBhcHByb3ZlcjtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgICAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICAgICAgdGhpcy5yZXBseSA9IHJlcGx5O1xuICAgIH1cblxuICAgIGdldCBJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgZ2V0IFBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XG4gICAgfVxuXG4gICAgZ2V0IElzc3VlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzdWVyO1xuICAgIH1cblxuICAgIGdldCBBcHByb3ZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwcm92ZXI7XG4gICAgfVxuXG4gICAgZ2V0IFRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgICB9XG5cbiAgICBnZXQgUmVwbHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGx5O1xuICAgIH1cblxuICAgIGdldCBUaWNrZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbHkuVGlja2V0SWQ7XG4gICAgfVxuXG4gICAgZ2V0IE9yZGVySWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGx5Lk9yZGVySWQ7XG4gICAgfVxuXG4gICAgZ2V0IFNpZ25hdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICAgIH1cblxuICAgIGdldCBUb3RhbEFtb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbHkuVG90YWxBbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IFRvdGFsQW1vdW50V2l0aEluc3RhbGxtZW50Q2hhcmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBseS5Ub3RhbEFtb3VudFdpdGhJbnN0YWxsbWVudENoYXJnZTtcbiAgICB9XG5cbiAgICBnZXQgTnVtYmVyT2ZJbnN0YWxsbWVudHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbHkuTnVtYmVyT2ZJbnN0YWxsbWVudHM7XG4gICAgfVxuXG59Il19