/* **************************************************************************************
 * Execution        : Default node             cmd> node mainAddOops.js 
 * @file            : mainAddOops.js
 * @overview        : To create addressBook object and pass the json data, ask user to perform
 *                    operations like create, read, update, delete and sort and to save it in a JSON
 *                    file.       
 * @author          : Murali s  <muralismmr94@gmail.com>
 * @version         : 1.0.  
 * @since           : 12/03/2019
 * **************************************************************************************/
var read = require('readline-sync');
var addressUtil = require('../addressBook/addressOops');
var file = require('fs');
var data1 = file.readFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/addressBook.json', 'utf8');
/**
 * Read json file data
 */
var data = JSON.parse(data1);
/**
 * @description :  object creation of AddressBook class
 */
var object = new addressUtil.AddressBook();
/**
 *@description  : function defination
 */
var flag = true;
function addressBook(data) {
    do {

        console.log("Enter 1 for add person information");
        console.log("Enter 2 for update person information");
        console.log("Enter 3 for remove person information");
        console.log("Enter 4 for sort the addressbook based on firstname");
        console.log("Enter 5 for Print all addressbook information");
        console.log("Enter 6 to exit");
        /**
         * @description : taken user input here.
         */
        var num = read.questionInt("Select  any number:");
        /**
         * @description : passing user iput to switch case.
         */
        switch (num) {
            case 1: object.addPerson(data);
                break;
            case 2: object.updatePerson(data);
                break;
            case 3: object.removeperson(data);
                break;
            case 4: object.sortfname(data);
                break;
            case 5: object.printadd(data);
                break;
            default: {
                console.log("thank you");
                flag = false;
                break;
            }
        }
    } while (flag);

}
/**
 * @description : function calling
 */
addressBook(data);