"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
var BinAndBank = (function () {
    function BinAndBank() {
        var binAndBank = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            binAndBank[_i] = arguments[_i];
        }
        if (binAndBank.indexOf("@") > -1) {
            var split = binAndBank[0].split("@");
            this.bin = split[0];
            this.bankCode = split[1];
        }
        else {
            this.bin = binAndBank[0], this.bankCode = binAndBank[1];
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluQW5kQmFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXJjaGFudC9iaW5BbmRCYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0NBQStCO0FBUS9CO0lBSUk7UUFBbUIsb0JBQXVCO2FBQXZCLFVBQXVCLEVBQXZCLHFCQUF1QixFQUF2QixJQUF1QjtZQUF2QiwrQkFBdUI7O1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQU0sS0FBSyxHQUFhLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0Qsd0JBQVEsRUFBRSw2QkFBYSxDQUFlO1FBQzNDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUksMkJBQUc7YUFBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNEJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxhQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6QyxDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQztBQTNCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFua3N9IGZyb20gXCIuLi9lbnVtc1wiO1xuLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMDIuMDUuMjAxN1xuICovXG5cbmV4cG9ydCBjbGFzcyBCaW5BbmRCYW5rIHtcbiAgICBwcml2YXRlIGJpbjogc3RyaW5nO1xuICAgIHByaXZhdGUgYmFua0NvZGU6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciguLi5iaW5BbmRCYW5rOiBzdHJpbmdbXSkge1xuICAgICAgICBpZiAoYmluQW5kQmFuay5pbmRleE9mKFwiQFwiKSA+IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdDogc3RyaW5nW10gPSBiaW5BbmRCYW5rWzBdLnNwbGl0KFwiQFwiKTtcbiAgICAgICAgICAgIHRoaXMuYmluID0gc3BsaXRbMF07XG4gICAgICAgICAgICB0aGlzLmJhbmtDb2RlID0gc3BsaXRbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBbdGhpcy5iaW4sIHRoaXMuYmFua0NvZGVdID0gYmluQW5kQmFuaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBCaW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluO1xuICAgIH1cblxuICAgIGdldCBCYW5rQ29kZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5iYW5rQ29kZTtcbiAgICB9XG5cbiAgICBnZXQgQmFuaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gQmFua3MudmFsaWRhdGUodGhpcy5iYW5rQ29kZSk7XG4gICAgICAgIC8vIHJldHVybiBCYW5rcy5maW5kQnlJZCh0aGlzLmJhbmtDb2RlKTtcbiAgICB9XG59XG4iXX0=