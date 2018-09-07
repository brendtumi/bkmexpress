"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Token = (function () {
    function Token(obj) {
        if (obj && (obj.id || obj.shortId)) {
            this.shortId = obj.id || obj.shortId;
        }
        if (obj && obj.path) {
            this.path = obj.path;
        }
        if (obj && obj.token) {
            this.token = obj.token;
        }
    }
    Object.defineProperty(Token.prototype, "ShortId", {
        get: function () {
            return this.shortId;
        },
        set: function (shortId) {
            this.shortId = shortId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "Path", {
        get: function () {
            return this.path;
        },
        set: function (path) {
            this.path = path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Token.prototype, "Token", {
        get: function () {
            return this.token;
        },
        set: function (token) {
            this.token = token;
        },
        enumerable: true,
        configurable: true
    });
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWVyY2hhbnQvdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQUtJLGVBQW1CLEdBQXdFO1FBQ3ZGLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDeEM7UUFDRCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztTQUN4QjtRQUNELElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELHNCQUFJLDBCQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVksT0FBZTtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHVCQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQVMsSUFBWTtZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHdCQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQUtMLFlBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gICAgcHJpdmF0ZSBzaG9ydElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXRoOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IHsgaWQ6IHN0cmluZywgc2hvcnRJZDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcgfSB8IGFueSkge1xuICAgICAgICBpZiAob2JqICYmIChvYmouaWQgfHwgb2JqLnNob3J0SWQpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3J0SWQgPSBvYmouaWQgfHwgb2JqLnNob3J0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmoucGF0aCkge1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gb2JqLnBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmoudG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSBvYmoudG9rZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgU2hvcnRJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zaG9ydElkO1xuICAgIH1cblxuICAgIHNldCBTaG9ydElkKHNob3J0SWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNob3J0SWQgPSBzaG9ydElkO1xuICAgIH1cblxuICAgIGdldCBQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XG4gICAgfVxuXG4gICAgc2V0IFBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgfVxuXG4gICAgZ2V0IFRva2VuKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuO1xuICAgIH1cblxuICAgIHNldCBUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICB9XG59XG4iXX0=