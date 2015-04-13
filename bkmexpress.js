/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 *
 * @version 0.0.1
 */

// dependencies
var _ = require("lodash")
    soap = require("soap");


var me = module.exports,
    localeCache = {};


me.version = JSON.parse(
    fs.readFileSync(__dirname + '/package.json', 'utf8')
).version;