var readline = require('readline-sync');
var util = require('../oopsprograms/oopsutility/Utility');

function expression() {
    var name = readline.question("Enter a name:");
    var fullname = readline.question("Enter a fullname");
    var mobile = readline.questionInt("enter a mobile number");
    var file = util.regExp(name, fullname, mobile);
    console.log(file);
}
expression();