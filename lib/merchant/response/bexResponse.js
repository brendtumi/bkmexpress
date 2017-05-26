"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RawBexResponse = (function () {
    function RawBexResponse() {
        this.call = null;
        this.result = null;
        this.code = null;
        this.description = null;
        this.parameters = null;
        this.data = null;
        this.error = "";
    }
    return RawBexResponse;
}());
exports.RawBexResponse = RawBexResponse;
var BexResponse = (function () {
    function BexResponse(obj) {
        this.call = null;
        this.result = null;
        this.code = null;
        this.description = null;
        this.parameters = null;
        if (obj && obj.message) {
            this.message = obj.message;
        }
        if (obj && obj.result) {
            this.result = obj.result;
        }
        if (obj && obj.code) {
            this.code = obj.code;
        }
        if (obj && obj.call) {
            this.call = obj.call;
        }
        if (obj && obj.description) {
            this.description = obj.description;
        }
        if (obj && obj.parameters) {
            this.parameters = obj.parameters;
        }
        if (obj && obj.data) {
            this.data = obj.data;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV4UmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvYmV4UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQTtJQUFBO1FBQ1csU0FBSSxHQUFtQixJQUFJLENBQUM7UUFDNUIsV0FBTSxHQUFtQixJQUFJLENBQUM7UUFDOUIsU0FBSSxHQUFtQixJQUFJLENBQUM7UUFFNUIsZ0JBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLGVBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBQy9CLFNBQUksR0FBYyxJQUFJLENBQUM7UUFDdkIsVUFBSyxHQUFZLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLHdDQUFjO0FBWTNCO0lBVUkscUJBQW1CLEdBQXVCO1FBVGhDLFNBQUksR0FBbUIsSUFBSSxDQUFDO1FBQzVCLFdBQU0sR0FBbUIsSUFBSSxDQUFDO1FBQzlCLFNBQUksR0FBbUIsSUFBSSxDQUFDO1FBRTVCLGdCQUFXLEdBQW1CLElBQUksQ0FBQztRQUVuQyxlQUFVLEdBQWdCLElBQUksQ0FBQztRQUlyQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQy9CLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzdCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ3JDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUksZ0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFZLE9BQWU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwrQkFBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVcsTUFBYztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDZCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBRUQsVUFBUyxJQUFZO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNkJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFFRCxVQUFTLElBQVk7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxvQ0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWdCLFdBQW1CO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBTUQsc0JBQUksbUNBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFlLFVBQWU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw2QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQVMsSUFBTztZQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUpBO0lBS0wsa0JBQUM7QUFBRCxDQUFDLEFBekZELElBeUZDO0FBekZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1jbGFzc2VzLXBlci1maWxlICovXG5leHBvcnQgY2xhc3MgUmF3QmV4UmVzcG9uc2U8VD4ge1xuICAgIHB1YmxpYyBjYWxsPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgcHVibGljIHJlc3VsdD86IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIHB1YmxpYyBjb2RlPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgcHVibGljIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgcHVibGljIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgLy8gVE9ETzogdHlwZSBNYXA8U3RyaW5nLCBPYmplY3Q+XG4gICAgcHVibGljIHBhcmFtZXRlcnM/OiBhbnkgfCBudWxsID0gbnVsbDtcbiAgICBwdWJsaWMgZGF0YT86IFQgfCBudWxsID0gbnVsbDtcbiAgICBwdWJsaWMgZXJyb3I/OiBzdHJpbmcgPSBcIlwiO1xufVxuXG5leHBvcnQgY2xhc3MgQmV4UmVzcG9uc2U8VD4ge1xuICAgIHByb3RlY3RlZCBjYWxsPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIHJlc3VsdD86IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgIHByb3RlY3RlZCBjb2RlPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAgLy8gVE9ETzogdHlwZSBNYXA8U3RyaW5nLCBPYmplY3Q+XG4gICAgcHJvdGVjdGVkIHBhcmFtZXRlcnM/OiBhbnkgfCBudWxsID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgZGF0YT86IFQ7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob2JqPzogUmF3QmV4UmVzcG9uc2U8VD4pIHtcbiAgICAgICAgaWYgKG9iaiAmJiBvYmoubWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gb2JqLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmoucmVzdWx0KSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IG9iai5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmouY29kZSkge1xuICAgICAgICAgICAgdGhpcy5jb2RlID0gb2JqLmNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmouY2FsbCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsID0gb2JqLmNhbGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmouZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBvYmouZGVzY3JpcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmoucGFyYW1ldGVycykge1xuICAgICAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gb2JqLnBhcmFtZXRlcnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAmJiBvYmouZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gb2JqLmRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgTWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlO1xuICAgIH1cblxuICAgIHNldCBNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cblxuICAgIGdldCBSZXN1bHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgIH1cblxuICAgIHNldCBSZXN1bHQocmVzdWx0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0IENvZGUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZTtcbiAgICB9XG5cbiAgICBzZXQgQ29kZShjb2RlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICB9XG5cbiAgICBnZXQgQ2FsbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWxsO1xuICAgIH1cblxuICAgIHNldCBDYWxsKGNhbGw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNhbGwgPSBjYWxsO1xuICAgIH1cblxuICAgIGdldCBEZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXQgRGVzY3JpcHRpb24oZGVzY3JpcHRpb246IHN0cmluZykge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IFBhcmFtZXRlcnMoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgICB9XG5cbiAgICBzZXQgUGFyYW1ldGVycyhwYXJhbWV0ZXJzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgICB9XG5cbiAgICBnZXQgRGF0YSgpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgICB9XG5cbiAgICBzZXQgRGF0YShkYXRhOiBUKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxufVxuIl19