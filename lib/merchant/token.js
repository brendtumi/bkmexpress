"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Token = (function () {
    function Token(shortId, path, token) {
        this.shortId = shortId;
        this.path = path;
        this.token = token;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWVyY2hhbnQvdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQUtJLGVBQW1CLE9BQWUsRUFBRSxJQUFZLEVBQUUsS0FBYTtRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsc0JBQUksMEJBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFZLE9BQWU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx1QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQVMsSUFBWTtZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHdCQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBO0lBS0wsWUFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBhdXRob3IgIFTDvG1heSDDh2ViZXIgPHR1bWF5Y2ViZXJAZ21haWwuY29tPlxuICogQGxpbmsgICAgaHR0cHM6Ly9naXRodWIuY29tL2JyZW5kdHVtaS9ia21leHByZXNzXG4gKiBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKiBAZGF0ZSAyNi4wNC4yMDE3XG4gKi9cblxuZXhwb3J0IGNsYXNzIFRva2VuIHtcbiAgICBwcml2YXRlIHNob3J0SWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHBhdGg6IHN0cmluZztcbiAgICBwcml2YXRlIHRva2VuOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc2hvcnRJZDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zaG9ydElkID0gc2hvcnRJZDtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIH1cblxuICAgIGdldCBTaG9ydElkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3J0SWQ7XG4gICAgfVxuXG4gICAgc2V0IFNob3J0SWQoc2hvcnRJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2hvcnRJZCA9IHNob3J0SWQ7XG4gICAgfVxuXG4gICAgZ2V0IFBhdGgoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcbiAgICB9XG5cbiAgICBzZXQgUGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB9XG5cbiAgICBnZXQgVG9rZW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW47XG4gICAgfVxuXG4gICAgc2V0IFRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICAgIH1cbn1cbiJdfQ==