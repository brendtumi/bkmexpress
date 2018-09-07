"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Installment = (function () {
    function Installment(numberOfInstallment, installmentAmount, totalAmount, vposConfig) {
        this.label = null;
        this.numberOfInstallment = numberOfInstallment;
        this.installmentAmount = installmentAmount;
        this.totalAmount = totalAmount;
        this.vposConfig = vposConfig;
    }
    Object.defineProperty(Installment.prototype, "NumberOfInstallment", {
        get: function () {
            return this.numberOfInstallment;
        },
        set: function (numberOfInstallment) {
            this.numberOfInstallment = numberOfInstallment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Installment.prototype, "InstallmentAmount", {
        get: function () {
            return this.installmentAmount;
        },
        set: function (installmentAmount) {
            this.installmentAmount = installmentAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Installment.prototype, "TotalAmount", {
        get: function () {
            return this.totalAmount;
        },
        set: function (totalAmount) {
            this.totalAmount = totalAmount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Installment.prototype, "VposConfig", {
        get: function () {
            return this.vposConfig;
        },
        set: function (vposConfig) {
            this.vposConfig = vposConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Installment.prototype, "Label", {
        get: function () {
            return this.label;
        },
        set: function (label) {
            this.label = label;
        },
        enumerable: true,
        configurable: true
    });
    return Installment;
}());
exports.Installment = Installment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvaW5zdGFsbG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQU9JLHFCQUFtQixtQkFBMkIsRUFBRSxpQkFBeUIsRUFBRSxXQUFtQixFQUFFLFVBQWtCO1FBSDFHLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBSWhDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFJLDRDQUFtQjthQUF2QjtZQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BDLENBQUM7YUFFRCxVQUF3QixtQkFBMkI7WUFDL0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQ25ELENBQUM7OztPQUpBO0lBTUQsc0JBQUksMENBQWlCO2FBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDbEMsQ0FBQzthQUVELFVBQXNCLGlCQUF5QjtZQUMzQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDL0MsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxvQ0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFnQixXQUFXO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBTUQsc0JBQUksbUNBQVU7YUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBZSxVQUFrQjtZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDhCQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1MLGtCQUFDO0FBQUQsQ0FBQyxBQXRERCxJQXNEQztBQXREWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDIyLjA1LjIwMTdcbiAqL1xuXG5leHBvcnQgY2xhc3MgSW5zdGFsbG1lbnQge1xuICAgIHByaXZhdGUgbnVtYmVyT2ZJbnN0YWxsbWVudDogc3RyaW5nO1xuICAgIHByaXZhdGUgaW5zdGFsbG1lbnRBbW91bnQ6IHN0cmluZztcbiAgICBwcml2YXRlIHRvdGFsQW1vdW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgcHJpdmF0ZSB2cG9zQ29uZmlnOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IobnVtYmVyT2ZJbnN0YWxsbWVudDogc3RyaW5nLCBpbnN0YWxsbWVudEFtb3VudDogc3RyaW5nLCB0b3RhbEFtb3VudDogc3RyaW5nLCB2cG9zQ29uZmlnOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5udW1iZXJPZkluc3RhbGxtZW50ID0gbnVtYmVyT2ZJbnN0YWxsbWVudDtcbiAgICAgICAgdGhpcy5pbnN0YWxsbWVudEFtb3VudCA9IGluc3RhbGxtZW50QW1vdW50O1xuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdG90YWxBbW91bnQ7XG4gICAgICAgIHRoaXMudnBvc0NvbmZpZyA9IHZwb3NDb25maWc7XG4gICAgfVxuXG4gICAgZ2V0IE51bWJlck9mSW5zdGFsbG1lbnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZJbnN0YWxsbWVudDtcbiAgICB9XG5cbiAgICBzZXQgTnVtYmVyT2ZJbnN0YWxsbWVudChudW1iZXJPZkluc3RhbGxtZW50OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5udW1iZXJPZkluc3RhbGxtZW50ID0gbnVtYmVyT2ZJbnN0YWxsbWVudDtcbiAgICB9XG5cbiAgICBnZXQgSW5zdGFsbG1lbnRBbW91bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFsbG1lbnRBbW91bnQ7XG4gICAgfVxuXG4gICAgc2V0IEluc3RhbGxtZW50QW1vdW50KGluc3RhbGxtZW50QW1vdW50OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pbnN0YWxsbWVudEFtb3VudCA9IGluc3RhbGxtZW50QW1vdW50O1xuICAgIH1cblxuICAgIGdldCBUb3RhbEFtb3VudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50b3RhbEFtb3VudDtcbiAgICB9XG5cbiAgICBzZXQgVG90YWxBbW91bnQodG90YWxBbW91bnQpIHtcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRvdGFsQW1vdW50O1xuICAgIH1cblxuICAgIGdldCBWcG9zQ29uZmlnKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnZwb3NDb25maWc7XG4gICAgfVxuXG4gICAgc2V0IFZwb3NDb25maWcodnBvc0NvbmZpZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudnBvc0NvbmZpZyA9IHZwb3NDb25maWc7XG4gICAgfVxuXG4gICAgZ2V0IExhYmVsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICAgIH1cblxuICAgIHNldCBMYWJlbChsYWJlbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB9XG5cbn1cbiJdfQ==