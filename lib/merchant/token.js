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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWVyY2hhbnQvdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQUtJLGVBQW1CLEdBQXdFO1FBQ3ZGLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUN6QyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN6QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFJLDBCQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBWSxPQUFlO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksdUJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFFRCxVQUFTLElBQVk7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx3QkFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQUtMLFlBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmV4cG9ydCBjbGFzcyBUb2tlbiB7XG4gICAgcHJpdmF0ZSBzaG9ydElkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXRoOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IHsgaWQ6IHN0cmluZywgc2hvcnRJZDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcgfSB8IGFueSkge1xuICAgICAgICBpZiAob2JqICYmIChvYmouaWQgfHwgb2JqLnNob3J0SWQpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3J0SWQgPSBvYmouaWQgfHwgb2JqLnNob3J0SWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmoucGF0aCkge1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gb2JqLnBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmoudG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSBvYmoudG9rZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgU2hvcnRJZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5zaG9ydElkO1xuICAgIH1cblxuICAgIHNldCBTaG9ydElkKHNob3J0SWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNob3J0SWQgPSBzaG9ydElkO1xuICAgIH1cblxuICAgIGdldCBQYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XG4gICAgfVxuXG4gICAgc2V0IFBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgfVxuXG4gICAgZ2V0IFRva2VuKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuO1xuICAgIH1cblxuICAgIHNldCBUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICB9XG59XG4iXX0=