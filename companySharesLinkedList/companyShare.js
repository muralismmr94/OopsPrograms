/**
 * @description : It is used to import the packages.
 */
const readline = require('readline-sync');
const fs = require('fs');
const list = require('/home/admin1/Desktop/myjavascript/DataStructure/Implementation/ListUtil.js')
/**
 * @description: Create a class as Account.
 */
class Account {
    /**
     * @description :creating an constructor to initializing the values.
     * @param {*} stockCompany 
     * @param {*} stockCustomer 
     */
    constructor(stockCompany, stockCustomer) {
        this.stockCompany = stockCompany;
        this.stockCustomer = stockCustomer;
    }
    /**
     * @description :create a method as CreateAccount.
     */
    createAccount() {
        try {
            /**
             * @description : Taken user inputs from user .
             */
            var name1 = readline.question("Enter a name here: ");
            var id1 = Math.floor(Math.random() * 100);
            var share1 = readline.questionInt("Enter no of shares here: ");
            /**
             * @description :To pushing the values to json customer file.
             */
            var linkedlist = list.LinkedList();
            linkedlist.add(this.stockCustomer.customer({
                name: name1,
                id: id1,
                share: share1
            }));
            console.log(this.stockCustomer.customer);
            /**
             * @description : This is used to Write a file using path and converting the object file to string file.
             */
            fs.writeFileSync("/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/stockCustomer.json",
                JSON.stringify(this.stockCustomer));
        }
        catch (err) {
            console.log(err);
        }
    }
    /**
     * @description :This method is used to buy the shares from company.
     */
    buyShares() {
        try {
            console.log(this.stockCustomer.customer);
            var customerobj = this.stockCustomer.customer;
            /**
             * @description :Taken user input to user.
             */
            var localid = readline.questionInt("enter id you want to search : ");
            /**
             * @description :The loop is used to itterate the customerobj
             */
            for (let key in customerobj) {
                /**
                 * @description : checking the user entered key and customer object key
                 */
                if (customerobj[key].id == localid) {
                    var index = this.stockCustomer.customer.indexOf(this.stockCustomer.customer.key);
                    var custName = this.stockCustomer.customer[key].name;
                    console.log(custName);
                    console.log();
                    console.log(this.stockCompany);
                    var comName = readline.question("\nPlease enter a company symbol you want to choose ");
                    /**
                     * @description : This loop is used to itterate the number of stockCompany objects presents.
                     */
                    for (let key in this.stockCompany.company) {
                        /**
                         *@description  :  checking the user entered key symbol and customer object key symbol.
                        */
                        if (this.stockCompany.company[key].symbol == comName) {
                            var companyName = this.stockCompany.company[key].name;
                            var companyShare = this.stockCompany.company[key].share;
                            console.log(companyName);
                            console.log(companyShare);

                            var share = this.stockCompany.share;
                            var flag = false;
                            var inputShare = readline.question("Enter the share value to buying shares : ");
                            /**
                             * @description  :   The looping will continue untill the company shares is higher than the input shares of customer.
                             */
                            do {
                                if (companyShare < inputShare) {
                                    inputShare = readline.question("Enter the value below share value of company : ");
                                }
                                else
                                    flag = true;

                            } while (!flag);
                            console.log(!flag);
                            /**
                             * @description : Here printing the values.
                             */
                            console.log("customer name is " + custName + " company name is " + companyName + " company share is " + inputShare);
                            /**
                             * @description : converting Sting to integer values.
                             */
                            var customerS = parseInt(this.stockCustomer.customer[key].share);
                            var companyS = parseInt(this.stockCompany.company[key].share)
                            var numS = parseInt(inputShare);
                            var custShare = customerS + numS;
                            var comShare = companyS - numS;
                            /**
                             * @description : Here printing the values.
                             */
                            console.log("customer name : " + custName + " share value : " + (custShare));
                            console.log("company name : " + companyName + " share value :" + (comShare));
                            /**
                             * @description :create a date variable to store date method and converting to String.
                             */
                            var date = Date(Date.now());
                            var time = date.toString();
                            /**
                             * @description : checking the condition share values checking
                             */
                            if (companyS > numS) {
                                this.stockCompany.company[key].share = comShare;
                                this.stockCustomer.customer[key].share = custShare;
                                this.stockCustomer.customer[key].transactionTime = time;
                                /**
                                 * @description : Here write the data into certain files and converting object to String.
                                 */
                                var writeCustomerFile = fs.writeFileSync("/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/stockCustomer.json",
                                    JSON.stringify(this.stockCustomer));
                                var writeCompanyFile = fs.writeFileSync("/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/stockCompany.json",
                                    JSON.stringify(this.stockCompany));

                            }
                        }

                    }
                }
            }


        } catch (err) {
            console.log(err);

        }
    }
    /**
     * @description :creating a seellShares method .
     */
    sellShares() {
        try {
            console.log(this.stockCustomer.customer);
            var customerobj = this.stockCustomer.customer;
            /**
             * @description :Taken user input to user.
             */
            var localid = readline.questionInt("enter id you want to search : ");
            /**
             * @description :The loop is used to itterate the customerobj
             */
            for (let key in customerobj) {
                /**
                 * @description : checking the user entered key and customer object key
                 */
                if (customerobj[key].id == localid) {
                    var index = this.stockCustomer.customer.indexOf(this.stockCustomer.customer.key);
                    var custName = this.stockCustomer.customer[key].name;
                    console.log(custName);
                    console.log();
                    console.log(this.stockCompany);
                    var comName = readline.question("\nPlease enter a company symbol you want to choose ");
                    /**
                    * @description : This loop is used to itterate the number of stockCompany objects presents.
                    */
                    for (let key in this.stockCompany.company) {
                        /**
                         *@description  :  checking the user entered key symbol and customer object key symbol.
                         */
                        if (this.stockCompany.company[key].symbol == comName) {
                            var companyName = this.stockCompany.company[key].name;
                            var companyShare = this.stockCompany.company[key].share;
                            /**
                            * @description  :   The looping will continue untill the company shares is higher than the input shares of customer.
                            */
                            console.log(companyName);
                            console.log(companyShare);

                            //var share = this.stockCompany.company[key].share;
                            var flag = false;
                            var inputShare = readline.question("Enter the share value : ");
                            /**
                           * @description  :   The looping will continue untill the company shares is higher than the input shares of customer.
                           */
                            do {
                                if (companyShare < inputShare) {
                                    inputShare = readline.question("Enter the value below share value : ");
                                }
                                else
                                    flag = true;

                            } while (!flag);
                            /**
                            * @description : Here printing the values.
                            */
                            console.log("customer name is " + custName + " company name is " + companyName + " company selling share is " + inputShare);
                            /**
                             * @description : converting Sting to integer values.
                             */
                            var customerS = parseInt(this.stockCustomer.customer[key].share);
                            var companyS = parseInt(this.stockCompany.company[key].share)
                            var numS = parseInt(inputShare);
                            var custShare = customerS - numS;
                            var comShare = companyS + numS;
                            /**
                            * @description : Here printing the values.
                            */
                            console.log("customer name : " + custName + " share value : " + (custShare));
                            console.log("company name : " + companyName + " share value : " + (comShare));
                            /**
                             * @description :create a date variable to store date method and converting to String.
                             */
                            var date = Date(Date.now());
                            var time = date.toString();
                            /**
                            * @description : checking the condition share values checking
                            */
                            if (companyS > numS) {
                                this.stockCompany.company[key].share = comShare;
                                this.stockCustomer.customer[key].share = custShare;
                                this.stockCustomer.customer[key].transactionTime = time;
                                /**
                                * @description : Here write the data into certain files and converting object to String.
                                */
                                var writeCustomerFile = fs.writeFileSync("/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/stockCustomer.json",
                                    JSON.stringify(this.stockCustomer));
                                var writeCompanyFile = fs.writeFileSync("/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/stockCompany.json",
                                    JSON.stringify(this.stockCompany));

                            }
                        }

                    }
                }
            }

        } catch (err) {
            console.log("there is some error", err);
        }
    }
    /**
     * @description : This method is used to save the files.
     */
    save() {
        try {
            /**
             * @description : Here write the files into the certain files.
             */
            var saveCustomer = fs.writeFileSync("/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/stockCustomer.json",
                JSON.stringify(this.stockCustomer));
            var saveCompany = fs.writeFileSync("/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/stockCompany.json",
                JSON.stringify(this.stockCompany));
            console.log("Your data is saved ");
        }
        catch (err) {
            console.log("Here is some error accured", err);
        }
    }
    /**
     * @description : This method is used to show the details of the files presented.
     */
    printFile() {
        try {
            /**
             * @description : Here used to print the values.
             */
            console.log("This is the Customer file details");
            console.log(this.stockCustomer);
            console.log("This is the Company file details");
            console.log(this.stockCompany);


        } catch (err) {
            console.log("Here is some error accured", err);
        }
    }

}
/**
 *@description  : Exporting the class of the methods. 
 */
module.exports = { Account };