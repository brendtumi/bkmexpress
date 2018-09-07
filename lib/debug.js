"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Debug = require("debug");
var err = Debug("bkmexpress:error");
var deb = Debug("bkmexpress:debug");
var info = Debug("bkmexpress:info");
info.log = console.log.bind(console);
deb.log = console.log.bind(console);
var Log = (function () {
    function Log() {
    }
    Log.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        deb.apply(null, args);
    };
    Log.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        info.apply(null, args);
    };
    Log.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        err.apply(null, args);
    };
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVidWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGVidWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSw2QkFBK0I7QUFFL0IsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDdEMsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDdEMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFHdEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUdyQyxHQUFHLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXBDO0lBQUE7SUFZQSxDQUFDO0lBWGlCLFNBQUssR0FBbkI7UUFBb0IsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVhLFFBQUksR0FBbEI7UUFBbUIsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVhLFNBQUssR0FBbkI7UUFBb0IsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDOUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGtCQUFHIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMDMuMDUuMjAxN1xuICovXG5cbmltcG9ydCAqIGFzIERlYnVnIGZyb20gXCJkZWJ1Z1wiO1xuXG5jb25zdCBlcnIgPSBEZWJ1ZyhcImJrbWV4cHJlc3M6ZXJyb3JcIik7XG5jb25zdCBkZWIgPSBEZWJ1ZyhcImJrbWV4cHJlc3M6ZGVidWdcIik7XG5jb25zdCBpbmZvID0gRGVidWcoXCJia21leHByZXNzOmluZm9cIik7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW5mby5sb2cgPSBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuLy8gZGViLmxvZyA9IGNvbnNvbGUuZGVidWcuYmluZChjb25zb2xlKTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuZGViLmxvZyA9IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG5cbmV4cG9ydCBjbGFzcyBMb2cge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVidWcoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgZGViLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaW5mbyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBpbmZvLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZXJyb3IoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgZXJyLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbn1cbiJdfQ==