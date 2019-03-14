/******************************************************************************
* Execution : 1. default node                 cmd> node inventaryManagementData.js
* Purpose   : Determines the cost of rice,wheats and pulses.
*
* @description
*
* @file     : inventaryManagementData.js
* @overview : It executes how the calculate each items variations cost and total cost.
* @author   : Murali S   <muralismmr94@gmail.com>
* @version  : 1.0
* @since    : 8-03-2019.
*
******************************************************************************/
/**
 * @description : importing the required files.
 */
var fs = require('fs');
var utility = require('./oopsutility/utilinvendata');
/**
 * @description : creating the function.
 */
function inventaryManagementData() {
    try {
        var file = fs.readFileSync("/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/inventarydatamanagement.json");
        var data = JSON.parse(file);
        utility.inventaryData(data);
    }
    catch (error) {
        console.log(error);
    }
}
/**
 * @description : calling the function to execute.
 */
inventaryManagementData();
