/**
 * Created by tumay on 13.04.2015.
 */
// dependencies
var fs = require("fs"),
    util = require("util"),
    _ = require("lodash"),
    moment = require("moment"),
    ursa = require('ursa');

_.mixin({
    implode: function (glue, collection) {

        glue = glue || '';

        if (!_.isArray(collection)) return false;

        if (collection.length == 1) return collection[0];

        var returnString = '';
        for (var i = 0, len = collection.length; i < len; i++) {
            if (i !== 0) returnString += glue;
            returnString += collection[i];
        }

        return returnString;
    }
});

var me = module.exports;

me.inspect = function (tag, obj) {
    console.log(tag.red, util.inspect(obj, {colors: true, depth: 10}));
};

me.Sign = function (data, key) {
    var openssl = ursa.coerceKey(key);
    var SignedData = openssl.hashAndSign("sha256", data, 'utf8', 'base64');
    return SignedData;
};

me.Verify = function (signature, data) {
    return;
};

me.ReadFile = function (file) {
    return fs.readFileSync(file, {encoding: "utf8"});
};

me.CalcTimeDiff = function (ts) {
    return;
};