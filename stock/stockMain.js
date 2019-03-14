/* **************************************************************************************
 * Execution        : Default node             cmd> node stockreport.js 
 * @file            : stockreport.js
 * @overview        : Program to read in Stock Names, Number of Share, Share Price.
                      Print a Stock Report with total value of each Stock and the total 
                      value of Stock.
                      
 * @author          : Murali s <muralismmr94@gmail.com>
 * @version         : 1.0.  
 * @since           : 09/03/2019
 * **************************************************************************************/
var stock=require('./Stock_Portpolio')
function mainstock(){
    stock.calculateReport();
}
/**
 * calling the function.
 */
mainstock();