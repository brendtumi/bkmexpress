/**
 * @author  Tümay Çeber <tumayceber@gmail.com>
 * @link    https://github.com/brendtumi/bkmexpress
 * @license http://opensource.org/licenses/MIT
 */

module.exports.Types = require("./bkmlib/Types");
module.exports.Utilities = require("./bkmlib/Utilities");
module.exports.InitPayment = require("./bkmlib/InitPayment");
module.exports.InitMerchantInfo = require("./bkmlib/InitMerchantInfo");
module.exports.version = JSON.parse(
	require("fs").readFileSync(__dirname + '/package.json', 'utf8')
).version;