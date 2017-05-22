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
var bexResponse_1 = require("../bexResponse");
var NonceReceivedResponse = (function (_super) {
    __extends(NonceReceivedResponse, _super);
    function NonceReceivedResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.status = "ok";
        _this.Data = _this.status;
        return _this;
    }
    return NonceReceivedResponse;
}(bexResponse_1.BexResponse));
exports.NonceReceivedResponse = NonceReceivedResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9uY2VSZWNlaXZlZFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21lcmNoYW50L3Jlc3BvbnNlL25vbmNlL25vbmNlUmVjZWl2ZWRSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFNQSw4Q0FBMkQ7QUFFM0Q7SUFBMkMseUNBQW1CO0lBRzFELCtCQUFtQixHQUE0QjtRQUEvQyxZQUNJLGtCQUFNLEdBQUcsQ0FBQyxTQUViO1FBTE0sWUFBTSxHQUFXLElBQUksQ0FBQztRQUl6QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUM7O0lBQzVCLENBQUM7SUFDTCw0QkFBQztBQUFELENBQUMsQUFQRCxDQUEyQyx5QkFBVyxHQU9yRDtBQVBZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuaW1wb3J0IHtCZXhSZXNwb25zZSwgUmF3QmV4UmVzcG9uc2V9IGZyb20gXCIuLi9iZXhSZXNwb25zZVwiO1xuXG5leHBvcnQgY2xhc3MgTm9uY2VSZWNlaXZlZFJlc3BvbnNlIGV4dGVuZHMgQmV4UmVzcG9uc2U8c3RyaW5nPiB7XG4gICAgcHVibGljIHN0YXR1czogc3RyaW5nID0gXCJva1wiO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IFJhd0JleFJlc3BvbnNlPHN0cmluZz4pIHtcbiAgICAgICAgc3VwZXIob2JqKTtcbiAgICAgICAgdGhpcy5EYXRhID0gdGhpcy5zdGF0dXM7XG4gICAgfVxufVxuIl19