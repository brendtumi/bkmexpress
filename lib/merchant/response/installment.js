"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Installment = (function () {
    function Installment(numberOfInstallment, installmentAmount, totalAmount, vposConfig) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFsbG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvaW5zdGFsbG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQU9JLHFCQUFtQixtQkFBMkIsRUFBRSxpQkFBeUIsRUFBRSxXQUFtQixFQUFFLFVBQWtCO1FBQzlHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFJLDRDQUFtQjthQUF2QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDcEMsQ0FBQzthQUVELFVBQXdCLG1CQUEyQjtZQUMvQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDbkQsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwwQ0FBaUI7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUFzQixpQkFBeUI7WUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQy9DLENBQUM7OztPQUpBO0lBTUQsc0JBQUksb0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFnQixXQUFXO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBTUQsc0JBQUksbUNBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFlLFVBQWtCO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksOEJBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNTCxrQkFBQztBQUFELENBQUMsQUF0REQsSUFzREM7QUF0RFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyMi4wNS4yMDE3XG4gKi9cblxuZXhwb3J0IGNsYXNzIEluc3RhbGxtZW50IHtcbiAgICBwcml2YXRlIG51bWJlck9mSW5zdGFsbG1lbnQ6IHN0cmluZztcbiAgICBwcml2YXRlIGluc3RhbGxtZW50QW1vdW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0b3RhbEFtb3VudDogc3RyaW5nO1xuICAgIHByaXZhdGUgbGFiZWw6IHN0cmluZztcbiAgICBwcml2YXRlIHZwb3NDb25maWc6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihudW1iZXJPZkluc3RhbGxtZW50OiBzdHJpbmcsIGluc3RhbGxtZW50QW1vdW50OiBzdHJpbmcsIHRvdGFsQW1vdW50OiBzdHJpbmcsIHZwb3NDb25maWc6IHN0cmluZykge1xuICAgICAgICB0aGlzLm51bWJlck9mSW5zdGFsbG1lbnQgPSBudW1iZXJPZkluc3RhbGxtZW50O1xuICAgICAgICB0aGlzLmluc3RhbGxtZW50QW1vdW50ID0gaW5zdGFsbG1lbnRBbW91bnQ7XG4gICAgICAgIHRoaXMudG90YWxBbW91bnQgPSB0b3RhbEFtb3VudDtcbiAgICAgICAgdGhpcy52cG9zQ29uZmlnID0gdnBvc0NvbmZpZztcbiAgICB9XG5cbiAgICBnZXQgTnVtYmVyT2ZJbnN0YWxsbWVudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJPZkluc3RhbGxtZW50O1xuICAgIH1cblxuICAgIHNldCBOdW1iZXJPZkluc3RhbGxtZW50KG51bWJlck9mSW5zdGFsbG1lbnQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLm51bWJlck9mSW5zdGFsbG1lbnQgPSBudW1iZXJPZkluc3RhbGxtZW50O1xuICAgIH1cblxuICAgIGdldCBJbnN0YWxsbWVudEFtb3VudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YWxsbWVudEFtb3VudDtcbiAgICB9XG5cbiAgICBzZXQgSW5zdGFsbG1lbnRBbW91bnQoaW5zdGFsbG1lbnRBbW91bnQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmluc3RhbGxtZW50QW1vdW50ID0gaW5zdGFsbG1lbnRBbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IFRvdGFsQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsQW1vdW50O1xuICAgIH1cblxuICAgIHNldCBUb3RhbEFtb3VudCh0b3RhbEFtb3VudCkge1xuICAgICAgICB0aGlzLnRvdGFsQW1vdW50ID0gdG90YWxBbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0IFZwb3NDb25maWcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudnBvc0NvbmZpZztcbiAgICB9XG5cbiAgICBzZXQgVnBvc0NvbmZpZyh2cG9zQ29uZmlnOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy52cG9zQ29uZmlnID0gdnBvc0NvbmZpZztcbiAgICB9XG5cbiAgICBnZXQgTGFiZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gICAgfVxuXG4gICAgc2V0IExhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIH1cblxufSJdfQ==