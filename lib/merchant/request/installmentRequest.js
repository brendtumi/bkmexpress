"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binAndBank_1 = require("../binAndBank");
var InstallmentRequest = (function () {
    function InstallmentRequest(bin, totalAmount, ticketId, signature) {
        this.bin = bin;
        this.totalAmount = totalAmount;
        this.ticketId = ticketId;
        this.signature = signature;
    }
    InstallmentRequest.prototype.binAndBanks = function () {
        var binAndBanks = [];
        for (var _i = 0, _a = this.bin; _i < _a.length; _i++) {
            var bin = _a[_i];
            binAndBanks.push(new binAndBank_1.BinAndBank(bin));
        }
        return binAndBanks;
    };
    Object.defineProperty(InstallmentRequest.prototype, "Bin", {
        get: function () {
            return this.bin;
        },
        set: function (bin) {
            this.bin = bin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstallmentRequest.prototype, "TotalAmount", {
        get: function () {
            return this.totalAmount;
        },
        set: function (totalAmount) {
            this.totalAmount = totalAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstallmentRequest.prototype, "TicketId", {
        get: function () {
            return this.ticketId;
        },
        set: function (ticketId) {
            this.ticketId = ticketId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstallmentRequest.prototype, "Signature", {
        get: function () {
            return this.signature;
        },
        set: function (signature) {
            this.signature = signature;
        },
        enumerable: true,
        configurable: true
    });
    return InstallmentRequest;
}());
exports.InstallmentRequest = InstallmentRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbG1lbnRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3JlcXVlc3QvaW5zdGFsbG1lbnRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsNENBQXlDO0FBRXpDO0lBTUksNEJBQW1CLEdBQWEsRUFBRSxXQUFtQixFQUFFLFFBQWdCLEVBQUUsU0FBaUI7UUFDdEYsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDSSxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdkIsS0FBa0IsVUFBUSxFQUFSLEtBQUEsSUFBSSxDQUFDLEdBQUcsRUFBUixjQUFRLEVBQVIsSUFBUSxFQUFFO1lBQXZCLElBQU0sR0FBRyxTQUFBO1lBQ1YsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSSxtQ0FBRzthQUFQO1lBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUM7YUFFRCxVQUFRLEdBQWE7WUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDbkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwyQ0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFnQixXQUFtQjtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHdDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQWEsUUFBZ0I7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDN0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx5Q0FBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFjLFNBQWlCO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQy9CLENBQUM7OztPQUpBO0lBTUwseUJBQUM7QUFBRCxDQUFDLEFBckRELElBcURDO0FBckRZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDAyLjA1LjIwMTdcbiAqL1xuXG5pbXBvcnQge0JpbkFuZEJhbmt9IGZyb20gXCIuLi9iaW5BbmRCYW5rXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnN0YWxsbWVudFJlcXVlc3Qge1xuICAgIHByaXZhdGUgYmluOiBzdHJpbmdbXTtcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0aWNrZXRJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgc2lnbmF0dXJlOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoYmluOiBzdHJpbmdbXSwgdG90YWxBbW91bnQ6IHN0cmluZywgdGlja2V0SWQ6IHN0cmluZywgc2lnbmF0dXJlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5iaW4gPSBiaW47XG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSB0b3RhbEFtb3VudDtcbiAgICAgICAgdGhpcy50aWNrZXRJZCA9IHRpY2tldElkO1xuICAgICAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYmluQW5kQmFua3MoKTogQmluQW5kQmFua1tdIHtcbiAgICAgICAgY29uc3QgYmluQW5kQmFua3MgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBiaW4gb2YgdGhpcy5iaW4pIHtcbiAgICAgICAgICAgIGJpbkFuZEJhbmtzLnB1c2gobmV3IEJpbkFuZEJhbmsoYmluKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJpbkFuZEJhbmtzO1xuICAgIH1cblxuICAgIGdldCBCaW4oKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5iaW47XG4gICAgfVxuXG4gICAgc2V0IEJpbihiaW46IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMuYmluID0gYmluO1xuICAgIH1cblxuICAgIGdldCBUb3RhbEFtb3VudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50b3RhbEFtb3VudDtcbiAgICB9XG5cbiAgICBzZXQgVG90YWxBbW91bnQodG90YWxBbW91bnQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdG90YWxBbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IFRpY2tldElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpY2tldElkO1xuICAgIH1cblxuICAgIHNldCBUaWNrZXRJZCh0aWNrZXRJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGlja2V0SWQgPSB0aWNrZXRJZDtcbiAgICB9XG5cbiAgICBnZXQgU2lnbmF0dXJlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgICB9XG5cbiAgICBzZXQgU2lnbmF0dXJlKHNpZ25hdHVyZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIH1cblxufVxuIl19