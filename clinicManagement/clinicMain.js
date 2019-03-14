/* **********************************************************************************************
 * Execution        : Default node             cmd> node clinicMain.js 
 * @file            : clinicMain.js
 * @overview        : This programme is used to manage a list of
                      Doctors associated with the Clinique. This also manages the list of patients who use the
                      clinique. It manages Doctors by Name, Id, Specialization and Availability (AM, PM or
                      both). It manages Patients by Name, ID, Mobile Number and Age. The Program allows
                      users to search Doctor by name, id, Specialization or Availability. Also the programs
                      allows users to search patient by name, mobile number or id. The programs allows
                      patients to take appointment with the doctor. A doctor at any availability time can see
                      only 5 patients. If exceeded the user can take appointment for patient at different date or
                      availability time. Print the Doctor Patient Report. Also show which Specialization is
                      popular in the Clinique as well as which Doctor is popular.     
 * @author          : Murali s <muralismmr94@gmail.com>
 * @version         : 1.0.  
 * @since           : 13/03/2019
 * **********************************************************************************************/
var utility = require("../clinicManagement/clinic");
var file = require("fs");
function clinicManagement() {
  try {
    /**
     * Read the JSON file
     */
    var clinicJSON = file.readFileSync("/home/admin1/Desktop/myjavascript/oopsprograms/JSONfiles/clilnicManagement.json","utf8");
    /**
     * Parse the JSON file to JavaScript object
     */
    var clinicJsonObject = JSON.parse(clinicJSON);
    /**
     * Create a clinic object to use the functionalities of that class
     */
    var clinic = new utility.clinic();
    /**
     * Invoking clinicManagement function by passing the clinicJsonObject
     */
    clinic.clinicManagement(clinicJsonObject);
  } catch (error) {
    console.log(error.message);
  }
}
clinicManagement();