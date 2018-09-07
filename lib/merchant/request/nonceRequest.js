"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NonceData = (function () {
    function NonceData(reply) {
        if (reply && reply.ticketId) {
            this.ticketId = reply.ticketId;
        }
        if (reply && reply.orderId) {
            this.orderId = reply.orderId;
        }
        if (reply && reply.totalAmount) {
            this.totalAmount = reply.totalAmount;
        }
        if (reply && reply.totalAmountWithInstallmentCharge) {
            this.totalAmountWithInstallmentCharge = reply.totalAmountWithInstallmentCharge;
        }
        if (reply && reply.numberOfInstallments) {
            this.numberOfInstallments = reply.numberOfInstallments;
        }
        if (reply && reply.hash) {
            this.hash = reply.hash;
        }
    }
    Object.defineProperty(NonceData.prototype, "TicketId", {
        get: function () {
            return this.ticketId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceData.prototype, "OrderId", {
        get: function () {
            return this.orderId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceData.prototype, "TotalAmount", {
        get: function () {
            return this.totalAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceData.prototype, "TotalAmountWithInstallmentCharge", {
        get: function () {
            return this.totalAmountWithInstallmentCharge;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceData.prototype, "NumberOfInstallments", {
        get: function () {
            return this.numberOfInstallments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NonceData.prototype, "Hash", {
        get: function () {
            return this.hash;
        },
        enumerable: true,
        configurable: true
    });
    return NonceData;
}());
exports.NonceData = NonceData;
var NonceRequest = (function () {
    function NonceRequest(id, path, issuer, approver, token, signature, reply) {
        this.id = id;
        this.path = path;
        this.issuer = issuer;
        this.approver = approver;
        this.token = token;
        this.signature = signature;
        this.reply = new NonceData(reply);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uY2VSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3JlcXVlc3Qvbm9uY2VSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBaUJBO0lBUUksbUJBQW1CLEtBQWtCO1FBQ2pDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDaEM7UUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztTQUN4QztRQUNELElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRTtZQUNqRCxJQUFJLENBQUMsZ0NBQWdDLEdBQUcsS0FBSyxDQUFDLGdDQUFnQyxDQUFDO1NBQ2xGO1FBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLG9CQUFvQixFQUFFO1lBQ3JDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsb0JBQW9CLENBQUM7U0FDMUQ7UUFDRCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCxzQkFBSSwrQkFBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1REFBZ0M7YUFBcEM7WUFDSSxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFvQjthQUF4QjtZQUNJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkJBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQztBQXBEWSw4QkFBUztBQXNEdEI7SUFTSSxzQkFBbUIsRUFBVSxFQUFFLElBQVksRUFBRSxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsU0FBaUIsRUFBRSxLQUFpQjtRQUM5SCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHNCQUFJLDRCQUFFO2FBQU47WUFDSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4QkFBSTthQUFSO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksaUNBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwREFBZ0M7YUFBcEM7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw4Q0FBb0I7YUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7UUFDM0MsQ0FBQzs7O09BQUE7SUFFTCxtQkFBQztBQUFELENBQUMsQUFuRUQsSUFtRUM7QUFuRVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyMi4wNS4yMDE3XG4gKi9cblxuLy8gdHNsaW50OmRpc2FibGU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBpbnRlcmZhY2UgSU5vbmNlRGF0YSB7XG4gICAgdGlja2V0SWQ6IHN0cmluZztcbiAgICBvcmRlcklkOiBzdHJpbmc7XG4gICAgdG90YWxBbW91bnQ6IHN0cmluZztcbiAgICB0b3RhbEFtb3VudFdpdGhJbnN0YWxsbWVudENoYXJnZTogc3RyaW5nO1xuICAgIG51bWJlck9mSW5zdGFsbG1lbnRzOiBudW1iZXI7XG4gICAgaGFzaDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTm9uY2VEYXRhIHtcbiAgICBwcml2YXRlIHRpY2tldElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBvcmRlcklkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0b3RhbEFtb3VudDogc3RyaW5nO1xuICAgIHByaXZhdGUgdG90YWxBbW91bnRXaXRoSW5zdGFsbG1lbnRDaGFyZ2U6IHN0cmluZztcbiAgICBwcml2YXRlIG51bWJlck9mSW5zdGFsbG1lbnRzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBoYXNoOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocmVwbHk/OiBJTm9uY2VEYXRhKSB7XG4gICAgICAgIGlmIChyZXBseSAmJiByZXBseS50aWNrZXRJZCkge1xuICAgICAgICAgICAgdGhpcy50aWNrZXRJZCA9IHJlcGx5LnRpY2tldElkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBseSAmJiByZXBseS5vcmRlcklkKSB7XG4gICAgICAgICAgICB0aGlzLm9yZGVySWQgPSByZXBseS5vcmRlcklkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBseSAmJiByZXBseS50b3RhbEFtb3VudCkge1xuICAgICAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHJlcGx5LnRvdGFsQW1vdW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBseSAmJiByZXBseS50b3RhbEFtb3VudFdpdGhJbnN0YWxsbWVudENoYXJnZSkge1xuICAgICAgICAgICAgdGhpcy50b3RhbEFtb3VudFdpdGhJbnN0YWxsbWVudENoYXJnZSA9IHJlcGx5LnRvdGFsQW1vdW50V2l0aEluc3RhbGxtZW50Q2hhcmdlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBseSAmJiByZXBseS5udW1iZXJPZkluc3RhbGxtZW50cykge1xuICAgICAgICAgICAgdGhpcy5udW1iZXJPZkluc3RhbGxtZW50cyA9IHJlcGx5Lm51bWJlck9mSW5zdGFsbG1lbnRzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBseSAmJiByZXBseS5oYXNoKSB7XG4gICAgICAgICAgICB0aGlzLmhhc2ggPSByZXBseS5oYXNoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IFRpY2tldElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpY2tldElkO1xuICAgIH1cblxuICAgIGdldCBPcmRlcklkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVySWQ7XG4gICAgfVxuXG4gICAgZ2V0IFRvdGFsQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsQW1vdW50O1xuICAgIH1cblxuICAgIGdldCBUb3RhbEFtb3VudFdpdGhJbnN0YWxsbWVudENoYXJnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50b3RhbEFtb3VudFdpdGhJbnN0YWxsbWVudENoYXJnZTtcbiAgICB9XG5cbiAgICBnZXQgTnVtYmVyT2ZJbnN0YWxsbWVudHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZJbnN0YWxsbWVudHM7XG4gICAgfVxuXG4gICAgZ2V0IEhhc2goKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzaDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb25jZVJlcXVlc3Qge1xuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHBhdGg6IHN0cmluZztcbiAgICBwcml2YXRlIGlzc3Vlcjogc3RyaW5nO1xuICAgIHByaXZhdGUgYXBwcm92ZXI6IHN0cmluZztcbiAgICBwcml2YXRlIHRva2VuOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzaWduYXR1cmU6IHN0cmluZztcbiAgICBwcml2YXRlIHJlcGx5OiBOb25jZURhdGE7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgcGF0aDogc3RyaW5nLCBpc3N1ZXI6IHN0cmluZywgYXBwcm92ZXI6IHN0cmluZywgdG9rZW46IHN0cmluZywgc2lnbmF0dXJlOiBzdHJpbmcsIHJlcGx5OiBJTm9uY2VEYXRhKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5pc3N1ZXIgPSBpc3N1ZXI7XG4gICAgICAgIHRoaXMuYXBwcm92ZXIgPSBhcHByb3ZlcjtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgICAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICAgICAgdGhpcy5yZXBseSA9IG5ldyBOb25jZURhdGEocmVwbHkpO1xuICAgIH1cblxuICAgIGdldCBJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgZ2V0IFBhdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XG4gICAgfVxuXG4gICAgZ2V0IElzc3VlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNzdWVyO1xuICAgIH1cblxuICAgIGdldCBBcHByb3ZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwcm92ZXI7XG4gICAgfVxuXG4gICAgZ2V0IFRva2VuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgICB9XG5cbiAgICBnZXQgUmVwbHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGx5O1xuICAgIH1cblxuICAgIGdldCBUaWNrZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbHkuVGlja2V0SWQ7XG4gICAgfVxuXG4gICAgZ2V0IE9yZGVySWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGx5Lk9yZGVySWQ7XG4gICAgfVxuXG4gICAgZ2V0IFNpZ25hdHVyZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICAgIH1cblxuICAgIGdldCBUb3RhbEFtb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbHkuVG90YWxBbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IFRvdGFsQW1vdW50V2l0aEluc3RhbGxtZW50Q2hhcmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBseS5Ub3RhbEFtb3VudFdpdGhJbnN0YWxsbWVudENoYXJnZTtcbiAgICB9XG5cbiAgICBnZXQgTnVtYmVyT2ZJbnN0YWxsbWVudHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwbHkuTnVtYmVyT2ZJbnN0YWxsbWVudHM7XG4gICAgfVxuXG59XG4iXX0=