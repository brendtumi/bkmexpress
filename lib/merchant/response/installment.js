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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvaW5zdGFsbG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQU9JLHFCQUFtQixtQkFBMkIsRUFBRSxpQkFBeUIsRUFBRSxXQUFtQixFQUFFLFVBQWtCO1FBSDFHLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBSWhDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFJLDRDQUFtQjthQUF2QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDcEMsQ0FBQzthQUVELFVBQXdCLG1CQUEyQjtZQUMvQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDbkQsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwwQ0FBaUI7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUFzQixpQkFBeUI7WUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQy9DLENBQUM7OztPQUpBO0lBTUQsc0JBQUksb0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFnQixXQUFXO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBTUQsc0JBQUksbUNBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFlLFVBQWtCO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksOEJBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNTCxrQkFBQztBQUFELENBQUMsQUF0REQsSUFzREM7QUF0RFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyMi4wNS4yMDE3XG4gKi9cblxuZXhwb3J0IGNsYXNzIEluc3RhbGxtZW50IHtcbiAgICBwcml2YXRlIG51bWJlck9mSW5zdGFsbG1lbnQ6IHN0cmluZztcbiAgICBwcml2YXRlIGluc3RhbGxtZW50QW1vdW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0b3RhbEFtb3VudDogc3RyaW5nO1xuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgdnBvc0NvbmZpZzogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG51bWJlck9mSW5zdGFsbG1lbnQ6IHN0cmluZywgaW5zdGFsbG1lbnRBbW91bnQ6IHN0cmluZywgdG90YWxBbW91bnQ6IHN0cmluZywgdnBvc0NvbmZpZzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZJbnN0YWxsbWVudCA9IG51bWJlck9mSW5zdGFsbG1lbnQ7XG4gICAgICAgIHRoaXMuaW5zdGFsbG1lbnRBbW91bnQgPSBpbnN0YWxsbWVudEFtb3VudDtcbiAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IHRvdGFsQW1vdW50O1xuICAgICAgICB0aGlzLnZwb3NDb25maWcgPSB2cG9zQ29uZmlnO1xuICAgIH1cblxuICAgIGdldCBOdW1iZXJPZkluc3RhbGxtZW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlck9mSW5zdGFsbG1lbnQ7XG4gICAgfVxuXG4gICAgc2V0IE51bWJlck9mSW5zdGFsbG1lbnQobnVtYmVyT2ZJbnN0YWxsbWVudDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZJbnN0YWxsbWVudCA9IG51bWJlck9mSW5zdGFsbG1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IEluc3RhbGxtZW50QW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbGxtZW50QW1vdW50O1xuICAgIH1cblxuICAgIHNldCBJbnN0YWxsbWVudEFtb3VudChpbnN0YWxsbWVudEFtb3VudDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaW5zdGFsbG1lbnRBbW91bnQgPSBpbnN0YWxsbWVudEFtb3VudDtcbiAgICB9XG5cbiAgICBnZXQgVG90YWxBbW91bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG90YWxBbW91bnQ7XG4gICAgfVxuXG4gICAgc2V0IFRvdGFsQW1vdW50KHRvdGFsQW1vdW50KSB7XG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSB0b3RhbEFtb3VudDtcbiAgICB9XG5cbiAgICBnZXQgVnBvc0NvbmZpZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy52cG9zQ29uZmlnO1xuICAgIH1cblxuICAgIHNldCBWcG9zQ29uZmlnKHZwb3NDb25maWc6IHN0cmluZykge1xuICAgICAgICB0aGlzLnZwb3NDb25maWcgPSB2cG9zQ29uZmlnO1xuICAgIH1cblxuICAgIGdldCBMYWJlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgICB9XG5cbiAgICBzZXQgTGFiZWwobGFiZWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgfVxuXG59XG4iXX0=