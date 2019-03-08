/******************************************************************************
* Execution : 1. default node                 cmd> node InventaryManagementData.js
* Purpose   : Determines the cost of rice,wheats and pulses.
*
* @description
*
* @file     :InventaryManagementData.js
* @overview : It executes how the calculate each items variations cost and total cost.
* @author   : Murali S   <muralismmr94@gmail.com>
* @version  : 1.0
* @since    : 8-03-2019.
*
******************************************************************************/
var fs = require('fs');
var utility = require('./oopsutility/utilinvendata');
function inventaryData() {
    try {
        var file = fs.readFileSync("/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/inventarydatamanagement.json");
        var data = JSON.parse(file);
        utility.inventaryData(data);
    }
    catch (error) {
        console.log(error);
    }
}
inventaryData();
