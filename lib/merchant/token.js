/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 * @date 26.04.2017
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWVyY2hhbnQvdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0dBS0c7OztBQUVIO0lBS0ksZUFBbUIsT0FBZSxFQUFFLElBQVksRUFBRSxLQUFhO1FBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBSSwwQkFBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVksT0FBZTtZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHVCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBRUQsVUFBUyxJQUFZO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksd0JBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFLTCxZQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG5leHBvcnQgY2xhc3MgVG9rZW4ge1xuICAgIHByaXZhdGUgc2hvcnRJZDogbnVtYmVyO1xuICAgIHByaXZhdGUgcGF0aDogc3RyaW5nO1xuICAgIHByaXZhdGUgdG9rZW46IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzaG9ydElkOiBudW1iZXIsIHBhdGg6IHN0cmluZywgdG9rZW46IHN0cmluZykge1xuICAgICAgICB0aGlzLnNob3J0SWQgPSBzaG9ydElkO1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfVxuXG4gICAgZ2V0IFNob3J0SWQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvcnRJZDtcbiAgICB9XG5cbiAgICBzZXQgU2hvcnRJZChzaG9ydElkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zaG9ydElkID0gc2hvcnRJZDtcbiAgICB9XG5cbiAgICBnZXQgUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xuICAgIH1cblxuICAgIHNldCBQYXRoKHBhdGg6IHN0cmluZykge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIH1cblxuICAgIGdldCBUb2tlbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgICB9XG5cbiAgICBzZXQgVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfVxufVxuIl19