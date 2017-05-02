"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Token = (function () {
    function Token(obj) {
        this.shortId = obj.id || obj.shortId;
        this.path = obj.path;
        this.token = obj.token;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWVyY2hhbnQvdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQUtJLGVBQW1CLEdBQXdFO1FBQ3ZGLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELHNCQUFJLDBCQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBWSxPQUFlO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksdUJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFFRCxVQUFTLElBQVk7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx3QkFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQUtMLFlBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gICAgcHJpdmF0ZSBzaG9ydElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXRoOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IHsgaWQ6IHN0cmluZywgc2hvcnRJZDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcgfSB8IGFueSkge1xuICAgICAgICB0aGlzLnNob3J0SWQgPSBvYmouaWQgfHwgb2JqLnNob3J0SWQ7XG4gICAgICAgIHRoaXMucGF0aCA9IG9iai5wYXRoO1xuICAgICAgICB0aGlzLnRva2VuID0gb2JqLnRva2VuO1xuICAgIH1cblxuICAgIGdldCBTaG9ydElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3J0SWQ7XG4gICAgfVxuXG4gICAgc2V0IFNob3J0SWQoc2hvcnRJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2hvcnRJZCA9IHNob3J0SWQ7XG4gICAgfVxuXG4gICAgZ2V0IFBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgICB9XG5cbiAgICBzZXQgUGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB9XG5cbiAgICBnZXQgVG9rZW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW47XG4gICAgfVxuXG4gICAgc2V0IFRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIH1cbn1cbiJdfQ==