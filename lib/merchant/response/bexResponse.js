"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BexResponse = (function () {
    function BexResponse() {
    }
    Object.defineProperty(BexResponse.prototype, "Message", {
        get: function () {
            return this.message;
        },
        set: function (message) {
            this.message = message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BexResponse.prototype, "Result", {
        get: function () {
            return this.result;
        },
        set: function (result) {
            this.result = result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BexResponse.prototype, "Code", {
        get: function () {
            return this.code;
        },
        set: function (code) {
            this.code = code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BexResponse.prototype, "Call", {
        get: function () {
            return this.call;
        },
        set: function (call) {
            this.call = call;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BexResponse.prototype, "Description", {
        get: function () {
            return this.description;
        },
        set: function (description) {
            this.description = description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BexResponse.prototype, "Parameters", {
        get: function () {
            return this.parameters;
        },
        set: function (parameters) {
            this.parameters = parameters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BexResponse.prototype, "Data", {
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: true,
        configurable: true
    });
    return BexResponse;
}());
exports.BexResponse = BexResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV4UmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvYmV4UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQTtJQUFBO0lBa0VBLENBQUM7SUF2REcsc0JBQUksZ0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFZLE9BQWU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwrQkFBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVcsTUFBYztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDZCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBRUQsVUFBUyxJQUFZO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNkJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFFRCxVQUFTLElBQVk7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxvQ0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWdCLFdBQW1CO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBTUQsc0JBQUksbUNBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFlLFVBQWU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw2QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQVMsSUFBTztZQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUpBO0lBS0wsa0JBQUM7QUFBRCxDQUFDLEFBbEVELElBa0VDO0FBbEVZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbmV4cG9ydCBjbGFzcyBCZXhSZXNwb25zZTxUPiB7XG5cbiAgICBwcml2YXRlIG1lc3NhZ2U6IHN0cmluZztcbiAgICBwcml2YXRlIHJlc3VsdDogc3RyaW5nO1xuICAgIHByaXZhdGUgY29kZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY2FsbDogc3RyaW5nO1xuICAgIHByaXZhdGUgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAvLyBUT0RPOiB0eXBlIE1hcDxTdHJpbmcsIE9iamVjdD5cbiAgICBwcml2YXRlIHBhcmFtZXRlcnM6IGFueTtcbiAgICBwcml2YXRlIGRhdGE6IFQ7XG5cbiAgICBnZXQgTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cblxuICAgIHNldCBNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cblxuICAgIGdldCBSZXN1bHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgIH1cblxuICAgIHNldCBSZXN1bHQocmVzdWx0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0IENvZGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZTtcbiAgICB9XG5cbiAgICBzZXQgQ29kZShjb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB9XG5cbiAgICBnZXQgQ2FsbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxsO1xuICAgIH1cblxuICAgIHNldCBDYWxsKGNhbGw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhbGwgPSBjYWxsO1xuICAgIH1cblxuICAgIGdldCBEZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgRGVzY3JpcHRpb24oZGVzY3JpcHRpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IFBhcmFtZXRlcnMoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgICB9XG5cbiAgICBzZXQgUGFyYW1ldGVycyhwYXJhbWV0ZXJzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG5cbiAgICBnZXQgRGF0YSgpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG5cbiAgICBzZXQgRGF0YShkYXRhOiBUKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxufVxuIl19