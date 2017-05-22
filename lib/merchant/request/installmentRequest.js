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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbG1lbnRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3JlcXVlc3QvaW5zdGFsbG1lbnRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsNENBQXlDO0FBRXpDO0lBTUksNEJBQW1CLEdBQWEsRUFBRSxXQUFtQixFQUFFLFFBQWdCLEVBQUUsU0FBaUI7UUFDdEYsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRU0sd0NBQVcsR0FBbEI7UUFDSSxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdkIsR0FBRyxDQUFDLENBQWMsVUFBUSxFQUFSLEtBQUEsSUFBSSxDQUFDLEdBQUcsRUFBUixjQUFRLEVBQVIsSUFBUTtZQUFyQixJQUFNLEdBQUcsU0FBQTtZQUNWLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekM7UUFDRCxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSSxtQ0FBRzthQUFQO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzthQUVELFVBQVEsR0FBYTtZQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNuQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDJDQUFXO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBZ0IsV0FBbUI7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbkMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx3Q0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQWEsUUFBZ0I7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDN0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx5Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWMsU0FBaUI7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDL0IsQ0FBQzs7O09BSkE7SUFNTCx5QkFBQztBQUFELENBQUMsQUFyREQsSUFxREM7QUFyRFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMDIuMDUuMjAxN1xuICovXG5cbmltcG9ydCB7QmluQW5kQmFua30gZnJvbSBcIi4uL2JpbkFuZEJhbmtcIjtcblxuZXhwb3J0IGNsYXNzIEluc3RhbGxtZW50UmVxdWVzdCB7XG4gICAgcHJpdmF0ZSBiaW46IHN0cmluZ1tdO1xuICAgIHByaXZhdGUgdG90YWxBbW91bnQ6IHN0cmluZztcbiAgICBwcml2YXRlIHRpY2tldElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBzaWduYXR1cmU6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihiaW46IHN0cmluZ1tdLCB0b3RhbEFtb3VudDogc3RyaW5nLCB0aWNrZXRJZDogc3RyaW5nLCBzaWduYXR1cmU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmJpbiA9IGJpbjtcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRvdGFsQW1vdW50O1xuICAgICAgICB0aGlzLnRpY2tldElkID0gdGlja2V0SWQ7XG4gICAgICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIH1cblxuICAgIHB1YmxpYyBiaW5BbmRCYW5rcygpOiBCaW5BbmRCYW5rW10ge1xuICAgICAgICBjb25zdCBiaW5BbmRCYW5rcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGJpbiBvZiB0aGlzLmJpbikge1xuICAgICAgICAgICAgYmluQW5kQmFua3MucHVzaChuZXcgQmluQW5kQmFuayhiaW4pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmluQW5kQmFua3M7XG4gICAgfVxuXG4gICAgZ2V0IEJpbigpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpbjtcbiAgICB9XG5cbiAgICBzZXQgQmluKGJpbjogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5iaW4gPSBiaW47XG4gICAgfVxuXG4gICAgZ2V0IFRvdGFsQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsQW1vdW50O1xuICAgIH1cblxuICAgIHNldCBUb3RhbEFtb3VudCh0b3RhbEFtb3VudDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSB0b3RhbEFtb3VudDtcbiAgICB9XG5cbiAgICBnZXQgVGlja2V0SWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlja2V0SWQ7XG4gICAgfVxuXG4gICAgc2V0IFRpY2tldElkKHRpY2tldElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aWNrZXRJZCA9IHRpY2tldElkO1xuICAgIH1cblxuICAgIGdldCBTaWduYXR1cmUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICAgIH1cblxuICAgIHNldCBTaWduYXR1cmUoc2lnbmF0dXJlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgfVxuXG59Il19