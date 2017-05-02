"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binAndBank_1 = require("../binAndBank");
var InstallmentRequest = (function () {
    function InstallmentRequest() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbG1lbnRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lcmNoYW50L3JlcXVlc3QvaW5zdGFsbG1lbnRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBT0EsNENBQXlDO0FBRXpDO0lBQUE7SUE4Q0EsQ0FBQztJQXhDVSx3Q0FBVyxHQUFsQjtRQUNJLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN2QixHQUFHLENBQUMsQ0FBWSxVQUFRLEVBQVIsS0FBQSxJQUFJLENBQUMsR0FBRyxFQUFSLGNBQVEsRUFBUixJQUFRO1lBQW5CLElBQUksR0FBRyxTQUFBO1lBQ1IsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDdkIsQ0FBQztJQUVELHNCQUFJLG1DQUFHO2FBQVA7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixDQUFDO2FBRUQsVUFBUSxHQUFhO1lBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ25CLENBQUM7OztPQUpBO0lBTUQsc0JBQUksMkNBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFnQixXQUFtQjtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHdDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBYSxRQUFnQjtZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHlDQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBYyxTQUFpQjtZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQU1MLHlCQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQztBQTlDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAwMi4wNS4yMDE3XG4gKi9cblxuaW1wb3J0IHtCaW5BbmRCYW5rfSBmcm9tIFwiLi4vYmluQW5kQmFua1wiO1xuXG5leHBvcnQgY2xhc3MgSW5zdGFsbG1lbnRSZXF1ZXN0IHtcbiAgICBwcml2YXRlIGJpbjogc3RyaW5nW107XG4gICAgcHJpdmF0ZSB0b3RhbEFtb3VudDogc3RyaW5nO1xuICAgIHByaXZhdGUgdGlja2V0SWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHNpZ25hdHVyZTogc3RyaW5nO1xuXG4gICAgcHVibGljIGJpbkFuZEJhbmtzKCk6IEJpbkFuZEJhbmtbXSB7XG4gICAgICAgIGNvbnN0IGJpbkFuZEJhbmtzID0gW107XG4gICAgICAgIGZvciAobGV0IGJpbiBvZiB0aGlzLmJpbikge1xuICAgICAgICAgICAgYmluQW5kQmFua3MucHVzaChuZXcgQmluQW5kQmFuayhiaW4pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmluQW5kQmFua3M7XG4gICAgfVxuXG4gICAgZ2V0IEJpbigpOiBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJpbjtcbiAgICB9XG5cbiAgICBzZXQgQmluKGJpbjogc3RyaW5nW10pIHtcbiAgICAgICAgdGhpcy5iaW4gPSBiaW47XG4gICAgfVxuXG4gICAgZ2V0IFRvdGFsQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsQW1vdW50O1xuICAgIH1cblxuICAgIHNldCBUb3RhbEFtb3VudCh0b3RhbEFtb3VudDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSB0b3RhbEFtb3VudDtcbiAgICB9XG5cbiAgICBnZXQgVGlja2V0SWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlja2V0SWQ7XG4gICAgfVxuXG4gICAgc2V0IFRpY2tldElkKHRpY2tldElkOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aWNrZXRJZCA9IHRpY2tldElkO1xuICAgIH1cblxuICAgIGdldCBTaWduYXR1cmUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICAgIH1cblxuICAgIHNldCBTaWduYXR1cmUoc2lnbmF0dXJlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgfVxuXG59Il19