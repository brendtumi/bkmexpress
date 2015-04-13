/**
 * Created by tumay on 13.04.2015.
 */
// dependencies
var fs = require("fs"),
    _ = require("lodash"),
    moment = require("moment");

var me = module.exports;

me.Sign = function (data) {
    return;
};

me.Verify = function (signature, data) {
    return;
};

me.ReadKey = function (file) {
    return fs.readFileSync(file, {encoding: "utf8"});
};

me.CalcTimeDiff = function (ts) {
    return;
};