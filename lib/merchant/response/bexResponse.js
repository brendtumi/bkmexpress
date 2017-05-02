"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RawBexResponse = (function () {
    function RawBexResponse() {
    }
    return RawBexResponse;
}());
exports.RawBexResponse = RawBexResponse;
var BexResponse = (function () {
    function BexResponse(obj) {
        this.Message = obj.message;
        this.Result = obj.result;
        this.Code = obj.code;
        this.Call = obj.call;
        this.Description = obj.description;
        this.Parameters = obj.parameters;
        this.Data = obj.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV4UmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvYmV4UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQTtJQUFBO0lBVUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSx3Q0FBYztBQVkzQjtJQVVJLHFCQUFtQixHQUF1QjtRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELHNCQUFJLGdDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBWSxPQUFlO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksK0JBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFXLE1BQWM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw2QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQVMsSUFBWTtZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDZCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBRUQsVUFBUyxJQUFZO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksb0NBQVc7YUFBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFnQixXQUFtQjtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG1DQUFVO2FBQWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBZSxVQUFlO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNkJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFFRCxVQUFTLElBQU87WUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FKQTtJQUtMLGtCQUFDO0FBQUQsQ0FBQyxBQTNFRCxJQTJFQztBQTNFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGF1dGhvciAgVMO8bWF5IMOHZWJlciA8dHVtYXljZWJlckBnbWFpbC5jb20+XG4gKiBAbGluayAgICBodHRwczovL2dpdGh1Yi5jb20vYnJlbmR0dW1pL2JrbWV4cHJlc3NcbiAqIEBsaWNlbnNlIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqIEBkYXRlIDI2LjA0LjIwMTdcbiAqL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuZXhwb3J0IGNsYXNzIFJhd0JleFJlc3BvbnNlPFQ+IHtcbiAgICBwdWJsaWMgY2FsbD86IHN0cmluZztcbiAgICBwdWJsaWMgcmVzdWx0Pzogc3RyaW5nO1xuICAgIHB1YmxpYyBjb2RlPzogc3RyaW5nO1xuICAgIHB1YmxpYyBtZXNzYWdlPzogc3RyaW5nO1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvLyBUT0RPOiB0eXBlIE1hcDxTdHJpbmcsIE9iamVjdD5cbiAgICBwdWJsaWMgcGFyYW1ldGVycz86IGFueTtcbiAgICBwdWJsaWMgZGF0YT86IFQ7XG4gICAgcHVibGljIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQmV4UmVzcG9uc2U8VD4ge1xuICAgIHByb3RlY3RlZCBjYWxsPzogc3RyaW5nO1xuICAgIHByb3RlY3RlZCByZXN1bHQ/OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGNvZGU/OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8vIFRPRE86IHR5cGUgTWFwPFN0cmluZywgT2JqZWN0PlxuICAgIHByb3RlY3RlZCBwYXJhbWV0ZXJzPzogYW55O1xuICAgIHByb3RlY3RlZCBkYXRhPzogVDtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvYmo/OiBSYXdCZXhSZXNwb25zZTxUPikge1xuICAgICAgICB0aGlzLk1lc3NhZ2UgPSBvYmoubWVzc2FnZTtcbiAgICAgICAgdGhpcy5SZXN1bHQgPSBvYmoucmVzdWx0O1xuICAgICAgICB0aGlzLkNvZGUgPSBvYmouY29kZTtcbiAgICAgICAgdGhpcy5DYWxsID0gb2JqLmNhbGw7XG4gICAgICAgIHRoaXMuRGVzY3JpcHRpb24gPSBvYmouZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuUGFyYW1ldGVycyA9IG9iai5wYXJhbWV0ZXJzO1xuICAgICAgICB0aGlzLkRhdGEgPSBvYmouZGF0YTtcbiAgICB9XG5cbiAgICBnZXQgTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cblxuICAgIHNldCBNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cblxuICAgIGdldCBSZXN1bHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgIH1cblxuICAgIHNldCBSZXN1bHQocmVzdWx0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0IENvZGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZTtcbiAgICB9XG5cbiAgICBzZXQgQ29kZShjb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB9XG5cbiAgICBnZXQgQ2FsbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxsO1xuICAgIH1cblxuICAgIHNldCBDYWxsKGNhbGw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhbGwgPSBjYWxsO1xuICAgIH1cblxuICAgIGdldCBEZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgRGVzY3JpcHRpb24oZGVzY3JpcHRpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IFBhcmFtZXRlcnMoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgICB9XG5cbiAgICBzZXQgUGFyYW1ldGVycyhwYXJhbWV0ZXJzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG5cbiAgICBnZXQgRGF0YSgpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG5cbiAgICBzZXQgRGF0YShkYXRhOiBUKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxufVxuIl19