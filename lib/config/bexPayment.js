/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exceptions_1 = require("../exceptions");
var configuration_1 = require("./configuration");
var BexPayment = (function (_super) {
    __extends(BexPayment, _super);
    function BexPayment(environment, merchantId, merchantSecret) {
        var _this = this;
        if (!environment) {
            throw new exceptions_1.BexPaymentException("Enviroment can not be NULL or Empty.");
        }
        if (!merchantId) {
            throw new exceptions_1.BexPaymentException("Merchant id can not be NULL or Empty.");
        }
        if (!merchantSecret) {
            throw new exceptions_1.BexPaymentException("Merchant Private Key can not be NULL or Empty.");
        }
        _this = _super.call(this, environment, merchantId, merchantSecret) || this;
        return _this;
    }
    BexPayment.startBexPayment = function (environment, merchantId, merchantSecret) {
        if (!environment) {
            throw new exceptions_1.BexPaymentException("Enviroment can not be NULL or Empty.");
        }
        if (!merchantId) {
            throw new exceptions_1.BexPaymentException("Merchant id can not be NULL or Empty.");
        }
        if (!merchantSecret) {
            throw new exceptions_1.BexPaymentException("Merchant Private Key can not be NULL or Empty.");
        }
        return new configuration_1.Configuration(environment, merchantId, merchantSecret);
    };
    return BexPayment;
}(configuration_1.Configuration));
exports.BexPayment = BexPayment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV4UGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWcvYmV4UGF5bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRzs7Ozs7Ozs7Ozs7OztBQUVILDRDQUFrRDtBQUNsRCxpREFBOEM7QUFFOUM7SUFBZ0MsOEJBQWE7SUFlekMsb0JBQW1CLFdBQW1CLEVBQUUsVUFBa0IsRUFBRSxjQUFzQjtRQUFsRixpQkFXQztRQVZHLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLElBQUksZ0NBQW1CLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUMzRSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7UUFDRCxRQUFBLGtCQUFNLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDLFNBQUM7O0lBQ25ELENBQUM7SUF6QmEsMEJBQWUsR0FBN0IsVUFBOEIsV0FBbUIsRUFBRSxVQUFrQixFQUFFLGNBQXNCO1FBQ3pGLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDZCxNQUFNLElBQUksZ0NBQW1CLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUMzRSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sSUFBSSxnQ0FBbUIsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQ3BGLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSw2QkFBYSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQWVMLGlCQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFnQyw2QkFBYSxHQTRCNUM7QUE1QlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuaW1wb3J0IHtCZXhQYXltZW50RXhjZXB0aW9ufSBmcm9tIFwiLi4vZXhjZXB0aW9uc1wiO1xuaW1wb3J0IHtDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9jb25maWd1cmF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBCZXhQYXltZW50IGV4dGVuZHMgQ29uZmlndXJhdGlvbiB7XG4gICAgcHVibGljIHN0YXRpYyBzdGFydEJleFBheW1lbnQoZW52aXJvbm1lbnQ6IHN0cmluZywgbWVyY2hhbnRJZDogc3RyaW5nLCBtZXJjaGFudFNlY3JldDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghZW52aXJvbm1lbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCZXhQYXltZW50RXhjZXB0aW9uKFwiRW52aXJvbWVudCBjYW4gbm90IGJlIE5VTEwgb3IgRW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVyY2hhbnRJZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJleFBheW1lbnRFeGNlcHRpb24oXCJNZXJjaGFudCBpZCBjYW4gbm90IGJlIE5VTEwgb3IgRW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWVyY2hhbnRTZWNyZXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCZXhQYXltZW50RXhjZXB0aW9uKFwiTWVyY2hhbnQgUHJpdmF0ZSBLZXkgY2FuIG5vdCBiZSBOVUxMIG9yIEVtcHR5LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgQ29uZmlndXJhdGlvbihlbnZpcm9ubWVudCwgbWVyY2hhbnRJZCwgbWVyY2hhbnRTZWNyZXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbnZpcm9ubWVudDogc3RyaW5nLCBtZXJjaGFudElkOiBzdHJpbmcsIG1lcmNoYW50U2VjcmV0OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFlbnZpcm9ubWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJleFBheW1lbnRFeGNlcHRpb24oXCJFbnZpcm9tZW50IGNhbiBub3QgYmUgTlVMTCBvciBFbXB0eS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtZXJjaGFudElkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmV4UGF5bWVudEV4Y2VwdGlvbihcIk1lcmNoYW50IGlkIGNhbiBub3QgYmUgTlVMTCBvciBFbXB0eS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtZXJjaGFudFNlY3JldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJleFBheW1lbnRFeGNlcHRpb24oXCJNZXJjaGFudCBQcml2YXRlIEtleSBjYW4gbm90IGJlIE5VTEwgb3IgRW1wdHkuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKGVudmlyb25tZW50LCBtZXJjaGFudElkLCBtZXJjaGFudFNlY3JldCk7XG4gICAgfVxuXG59Il19