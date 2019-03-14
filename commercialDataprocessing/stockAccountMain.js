
/*********************************************************************************************************************************
 * Execution    : Default Node                 stockMain.js
 * Purpose      :It is used to share value counting of customer as well as company shares.
 * @description
 * @file        :stockMain.js
 * @overview    :It  implements a data type that might be used by a financial institution to keep track of customer information.
 * @author      :Murali s <muralismmr94@gmail.com>
 * @version     :1.0
 * @since       :14-03-2019
 */

/**
 * @description :It is used to import the file.
 */
const readline = require('readline-sync');
const fs = require('fs');
var utility = require('./stockAccount')
/**
 *@description :function definition
 */
function stockAccountMain() {
    /**
     *@description :Exception handling usage
     */
    try {
        /**
         * @description :Stored variable to json files.
         */
        var stockCompany1 = fs.readFileSync("../JSONfiles/stockCompany.json", "utf8");
        var stockCustomer1 = fs.readFileSync("../JSONfiles/stockCustomer.json", "utf8");
        /**
         * @description :It converts the String to object .
         */
        var stockCompany = JSON.parse(stockCompany1);
        var stockCustomer = JSON.parse(stockCustomer1);
        /**
         * @description :calling the account function with parameters as stockCompany and stockCustomer.
         */
        var stockobj = new utility.Account(stockCompany, stockCustomer);
        /**
         * @description : the loop will executes until exit method call.
         */
        do {
            var flag = true;
            console.log("\nenter 1 for Create account ");
            console.log("enter 2 for Buy shares ");
            console.log("enter 3 for Sell shares ");
            console.log("enter 4 for Save ");
            console.log("enter 5 for Print file ");
            console.log("enter 6 for Exit ");
            /**
             * @description :asking user input to user.
             */
            var input = readline.questionInt("\nplease enter your choice : ");
            /**
             * @description : passing the user input to switchcase
             */
            switch (input) {
                case 1:
                    stockobj.createAccount();
                    break;
                case 2:
                    stockobj.buyShares();
                    break;
                case 3:
                    stockobj.sellShares();
                    break;
                case 4:
                    stockobj.save();
                    break;
                case 5:
                    stockobj.printFile();
                    break;
                case 6: {
                    console.log("Thank You for choosing");
                    flag = false;
                }
            }
        } while (flag)
    }
    catch (err) {
        console.log(err);
    }
}
/**
 * @description :calling function stockAccountMain.
 */
stockAccountMain();

