
/*********************************************************************************************************************************
 * Execution    : Default Node                 regularExpression.js
 * Purpose      :It is used to share value counting of customer as well as company shares.
 * @description
 * @file        :regularExpression.js
 * @overview    :It  implements a data type that might be used by a financial institution to keep track of customer information.
 * @author      :Murali s <muralismmr94@gmail.com>
 * @version     :1.0
 * @since       :14-03-2019
 */

/**
 * @description :It is used to import the packages.
 */
var readline = require('readline-sync');
var util = require('./oopsutility/Utility');
/**
 * @description : creating the function expression.
 */
function expression() {
    /**
     * @description :reading the user inputs and storing the values.
     */
    var name = readline.question("Enter a name: ");
    var fullname = readline.question("Enter a fullname: ");
    var mobile = readline.questionInt("enter a mobile number: ");
    var file = util.regExp(name, fullname, mobile);
    console.log(file);
}
/**
 * @description : calling the expression function.
 */
expression();