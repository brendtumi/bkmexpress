/**
 * Created by tumay on 13.04.2015.
 */
// dependencies
var fs = require("fs"),
    util = require("util"),
    path = require("path"),
    _ = require("lodash"),
    moment = require("moment"),
    debug = require("debug")("bkmexpress"),
    ursa = require('ursa');
require("colors");

_.mixin({
    implode: function (glue, collection) {
        glue = glue || '';
        if (!_.isArray(collection))
            return false;
        if (collection.length == 1)
            return collection[0];
        var returnString = '';
        for (var i = 0, len = collection.length; i < len; i++) {
            if (i !== 0)
                returnString += glue;
            returnString += collection[i];
        }
        return returnString;
    }
});

var me = module.exports;

me.inspect = inspect = function (tag, obj) {
    debug(tag, util.inspect(obj, {colors: true, depth: 10}));
};

me.ReadFile = ReadFile = function (file) {
    return fs.readFileSync(file, {encoding: "utf8"});
};

me.Sign = Sign = function (data, key) {
    var openssl = ursa.coerceKey(key);
    try {
        return openssl.hashAndSign("sha256", data, 'utf8', 'base64');
    }
    catch (e) {
        inspect("Sign Error", e);
        return false;
    }
};

me.Verify = Verify = function (bkmKey, hashed, dataToVerify) {
    // NOTE: Ursa not reading public key from a certificate so, i export public key with openssl x509 -pubkey -noout -in  bkm.pub > bkm.pem
    var signature = bkmKey || ReadFile(path.normalize(__dirname + '/../bkm_static/bkm.pem'));
    var openssl = ursa.coerceKey(signature);
    var hashedSalt = new Buffer(hashed, 'base64');
    try {
        return openssl.hashAndVerify("sha256", dataToVerify, hashedSalt);
    }
    catch (e) {
        inspect("Verify Error", e);
        return false;
    }
};

me.CalcTimeDiff = CalcTimeDiff = function (ts, diff) {
    diff = diff || 60;
    ts = new moment(ts, "YYYYMMDD-HH:mm:ss").unix();
    var now = new moment().unix();
    return ts > (now - diff) && ts < (now + diff);
};