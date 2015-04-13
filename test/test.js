var Types = require("../bkmlib/Types");
var Utilities = require("../bkmlib/Utilities");
var InitPaymentInterface = require("../bkmlib/InitPaymentInterface");

var paymentInterface = new InitPaymentInterface("7b928290-b6d2-469e-ac10-29eb36b8c1f6","SuccesUrl","CancelUrl",10,0,"mobs","mobc",1,3,"4.4.2","2.0");

var installment = new Types.installment();
installment.nofInst = 2;
console.log(installment);