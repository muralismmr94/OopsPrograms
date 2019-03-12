var read = require('readline-sync');
var file = require('fs');
/**
 * create an person class to initialized the variables
 */
class Person {
    /**
     * @param {*} fname user first name
     * @param {*} lname user last name
     * @param {*} address user address
     * @param {*} city user city 
     * @param {*} state user state
     * @param {*} phoneNo user phoneno
     * @param {*} zip user zip
     */
    constructor(fname, lname, address, city, state, phoneNo, zip) {
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.phoneNo = phoneNo;
        this.zip = zip;
    }
}
/**
 * create an address book class.
 */
class AddressBook {
    /**
     * create a default constructor 
     */
    constructor() { }
    // create new address book function
    addPerson(data) {
        var fname = read.question("Enter firstname of person : ");
        var lname = read.question("Enter lastname of person : ");
        var address = read.question("Enter a address of person : ")
        var city = read.question("Enter city of person : ")
        var state = read.question("Enter state of person : ")
        var phoneNo = read.questionInt("Enter phonenumber : ")
        var zip = read.questionInt("Enter zip code : ")
        // create object of Person class
        var obj = new Person(fname, lname, address, city, state, phoneNo, zip)
        /**
        * push each value into json
        */
        data.personAddress.push(obj);
        // write data into json file
        var d = file.writeFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/addressBook.json', JSON.stringify(data))
    }
    // updating address book function
    updatePerson(data) {
        var name = read.question("enter Firstname of person :")
        for (let i = 0; i < data.personAddress.length; i++) {
            if (data.personAddress[i].fname == name) {
                var index = data.personAddress.indexOf(data.personAddress[i]);

                console.log(" select which information to be update ")
                console.log("Enter 1 for firstname of person to be update")
                console.log("Enter 2 for  lastname of person to be update")
                console.log("Enter 3 for  phonenumber person to be update")
                console.log("Enter 4 for  city of person to be update")
                console.log("Enter 5 for  state of person to be update")
                console.log("Enter 6 for address of person to be updated");

                var num1 = read.questionInt("select any number:")
                switch (num1) {
                    case 1: this.fname(data, index)
                        break;
                    case 2: this.lname(data, index)
                        break;
                    case 3: this.phoneNo(data, index)
                        break;
                    case 4: this.city(data, index)
                        break;
                    case 5: this.state(data, index)
                        break;
                    case 6: this.address(data, index)
                        break;
                }
            }

        }
    }

    // update first name
    firstname(data, index) {
        var fname1 = read.question("enter the name changed first name:")
        data.personAddress[index].personfname = fname1
        var d = file.writeFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/addressBook.json', JSON.stringify(data))
        console.log("the first name of the person is updated");

    }
    // update last name
    lastname(data, index) {
        var lname1 = read.question("enter changed last name:")
        data.personAddress[index].personlname = lname1
        var d = file.writeFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/addressBook.json', JSON.stringify(data))
        console.log("the last name of the person is updated");
    }
    // update phone number
    phonenumber(data, index) {
        var phonenumber1 = read.questionInt("enter  changed phonenumber:")
        data.personAddress[index].phonenumber = phonenumber1
        var d = file.writeFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/addressBook.json', JSON.stringify(data))
        console.log("the phoneNo of the person is updated");
    }
    // update city
    city(data, index) {
        var cityname = read.question("enter changed city name")
        data.personAddress[index].city = cityname
        var d = file.writeFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/addressBook.json', JSON.stringify(data))
        console.log("the city of the person is updated");
    }
    // update city
    state(data, index) {
        var statename = read.question("enter the changed state name")
        data.personAddress[index].state = statename
        var d = file.writeFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/addressBook.json', JSON.stringify(data))
        console.log("the state of the person is updated");
    }
    // update zipcode
    zipcode(data, index) {
        var zipcode = read.questionInt("enter the name changed zip code")
        data.personAddress[index].zip = zipcode
        var d = file.writeFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/addressBook.json', JSON.stringify(data))
        console.log("the zipcode of the person is updated");
    }
    //update address
    address(data, index) {
        var address = read.question("enter the address you changed")
        data.personAddress[index].address = address
        var d = file.writeFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/addressBook.json', JSON.stringify(data))
        console.log("the address of the person is updated");
    }
    // removing or deleting particulor person
    removeperson(data) {

        var name = read.question("enter name of person to be remove:")
        for (let i = 0; i < data.personAddress.length; i++) {
            if (data.personAddress[i].personfname == name) {
                var index = data.personAddress.indexOf(data.personAddress[i]);
                // This will remove the object that name of the person
                var dd = data.personAddress.splice(index, 1);
            }
            var d = file.writeFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/addressBook.json', JSON.stringify(data))
            console.log("the person has removed");

        }

    }
    sortfname(data) {
        let fname = data.personAddress.fname;
        var arr = [];
        for (let i = 0; i <= data.personAddress.length; i++) {
            arr[i] = data.personAddress[i];
        }
        arr.sort();
        console.log(arr);
    }
   
    printadd(data) {
        var person = data.personAddress;
        for (const key in person) {
            console.log(person[key])
        }


    }
}
module.exports = { Person, AddressBook }