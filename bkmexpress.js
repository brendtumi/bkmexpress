/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 */

module.exports.Types = require("./bkmlib/Types");
module.exports.Utilities = require("./bkmlib/Utilities");
module.exports.InitPaymentInterface = require("./bkmlib/InitPaymentInterface");
module.exports.version = JSON.parse(
    require("fs").readFileSync(__dirname + '/package.json', 'utf8')
).version;