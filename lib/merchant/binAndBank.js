"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
var BinAndBank = (function () {
    function BinAndBank(binAndBank) {
        if (binAndBank.indexOf("@") > -1) {
            _a = binAndBank.split("@"), this.bin = _a[0], this.bankCode = _a[1];
        }
        else {
            this.bin = binAndBank.substr(0, 6);
            this.bankCode = binAndBank.substr(6, 4);
        }
        var _a;
    }
    Object.defineProperty(BinAndBank.prototype, "Bin", {
        get: function () {
            return this.bin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinAndBank.prototype, "BankCode", {
        get: function () {
            return this.bankCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BinAndBank.prototype, "Bank", {
        get: function () {
            return enums_1.Banks.validate(this.bankCode);
        },
        enumerable: true,
        configurable: true
    });
    return BinAndBank;
}());
exports.BinAndBank = BinAndBank;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluQW5kQmFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXJjaGFudC9iaW5BbmRCYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQStCO0FBUS9CO0lBSUksb0JBQW1CLFVBQWtCO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLDBCQUFpRCxFQUFoRCxnQkFBUSxFQUFFLHFCQUFhLENBQTBCO1FBQ3RELENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDOztJQUNMLENBQUM7SUFFRCxzQkFBSSwyQkFBRzthQUFQO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnQ0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLGFBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpDLENBQUM7OztPQUFBO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDO0FBMUJZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYW5rc30gZnJvbSBcIi4uL2VudW1zXCI7XG4vKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAwMi4wNS4yMDE3XG4gKi9cblxuZXhwb3J0IGNsYXNzIEJpbkFuZEJhbmsge1xuICAgIHByaXZhdGUgYmluOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBiYW5rQ29kZTogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGJpbkFuZEJhbms6IHN0cmluZykge1xuICAgICAgICBpZiAoYmluQW5kQmFuay5pbmRleE9mKFwiQFwiKSA+IC0xKSB7XG4gICAgICAgICAgICBbdGhpcy5iaW4sIHRoaXMuYmFua0NvZGVdID0gYmluQW5kQmFuay5zcGxpdChcIkBcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJpbiA9IGJpbkFuZEJhbmsuc3Vic3RyKDAsIDYpO1xuICAgICAgICAgICAgdGhpcy5iYW5rQ29kZSA9IGJpbkFuZEJhbmsuc3Vic3RyKDYsIDQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IEJpbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5iaW47XG4gICAgfVxuXG4gICAgZ2V0IEJhbmtDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhbmtDb2RlO1xuICAgIH1cblxuICAgIGdldCBCYW5rKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBCYW5rcy52YWxpZGF0ZSh0aGlzLmJhbmtDb2RlKTtcbiAgICAgICAgLy8gcmV0dXJuIEJhbmtzLmZpbmRCeUlkKHRoaXMuYmFua0NvZGUpO1xuICAgIH1cbn1cbiJdfQ==