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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV4UmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVyY2hhbnQvcmVzcG9uc2UvYmV4UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQTtJQUFBO0lBVUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSx3Q0FBYztBQVkzQjtJQVVJLHFCQUFtQixHQUF1QjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQy9CLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzdCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1FBQ3JDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUksZ0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFZLE9BQWU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwrQkFBTTthQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVcsTUFBYztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDZCQUFJO2FBQVI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBRUQsVUFBUyxJQUFZO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNkJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFFRCxVQUFTLElBQVk7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxvQ0FBVzthQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWdCLFdBQW1CO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBTUQsc0JBQUksbUNBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFlLFVBQWU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw2QkFBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQVMsSUFBTztZQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUpBO0lBS0wsa0JBQUM7QUFBRCxDQUFDLEFBekZELElBeUZDO0FBekZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yICBUw7xtYXkgw4dlYmVyIDx0dW1heWNlYmVyQGdtYWlsLmNvbT5cbiAqIEBsaW5rICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9icmVuZHR1bWkvYmttZXhwcmVzc1xuICogQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICogQGRhdGUgMjYuMDQuMjAxN1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlOm1heC1jbGFzc2VzLXBlci1maWxlICovXG5leHBvcnQgY2xhc3MgUmF3QmV4UmVzcG9uc2U8VD4ge1xuICAgIHB1YmxpYyBjYWxsPzogc3RyaW5nO1xuICAgIHB1YmxpYyByZXN1bHQ/OiBzdHJpbmc7XG4gICAgcHVibGljIGNvZGU/OiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgcHVibGljIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8vIFRPRE86IHR5cGUgTWFwPFN0cmluZywgT2JqZWN0PlxuICAgIHB1YmxpYyBwYXJhbWV0ZXJzPzogYW55O1xuICAgIHB1YmxpYyBkYXRhPzogVDtcbiAgICBwdWJsaWMgZXJyb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBCZXhSZXNwb25zZTxUPiB7XG4gICAgcHJvdGVjdGVkIGNhbGw/OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHJlc3VsdD86IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgY29kZT86IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgbWVzc2FnZT86IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLy8gVE9ETzogdHlwZSBNYXA8U3RyaW5nLCBPYmplY3Q+XG4gICAgcHJvdGVjdGVkIHBhcmFtZXRlcnM/OiBhbnk7XG4gICAgcHJvdGVjdGVkIGRhdGE/OiBUO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9iaj86IFJhd0JleFJlc3BvbnNlPFQ+KSB7XG4gICAgICAgIGlmIChvYmogJiYgb2JqLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG9iai5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmogJiYgb2JqLnJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBvYmoucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmogJiYgb2JqLmNvZGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IG9iai5jb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmogJiYgb2JqLmNhbGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbCA9IG9iai5jYWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmogJiYgb2JqLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gb2JqLmRlc2NyaXB0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmogJiYgb2JqLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycyA9IG9iai5wYXJhbWV0ZXJzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYmogJiYgb2JqLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG9iai5kYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IE1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgICB9XG5cbiAgICBzZXQgTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB9XG5cbiAgICBnZXQgUmVzdWx0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgICB9XG5cbiAgICBzZXQgUmVzdWx0KHJlc3VsdDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xuICAgIH1cblxuICAgIGdldCBDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZGU7XG4gICAgfVxuXG4gICAgc2V0IENvZGUoY29kZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgfVxuXG4gICAgZ2V0IENhbGwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsbDtcbiAgICB9XG5cbiAgICBzZXQgQ2FsbChjYWxsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jYWxsID0gY2FsbDtcbiAgICB9XG5cbiAgICBnZXQgRGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0IERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldCBQYXJhbWV0ZXJzKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgc2V0IFBhcmFtZXRlcnMocGFyYW1ldGVyczogYW55KSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgZ2V0IERhdGEoKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuXG4gICAgc2V0IERhdGEoZGF0YTogVCkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cbiJdfQ==