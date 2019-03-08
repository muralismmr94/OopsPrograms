/******************************************************************************
* Execution : 1. default node               
* Purpose   : Determines the cost of rice,wheats and pulses.
*
* @description
*
* @file     :utilinvendata.js
* @overview : It executes how the calculate each items variations cost and total cost.
* @author   : Murali S   <muralismmr94@gmail.com>
* @version  : 1.0
* @since    : 8-03-2019.
*
******************************************************************************/

/**
 * function: It is used to exporting the methods inside this.
 */
module.exports = {

    /**
     * function :This method is used to determined the total cost of each items of variations and total 
     *            amount of cost of total items
     * @param {The data is used to input of this function} data 
     */
    inventaryData(data) {
        try {
            var rice = data.rice;
            var wheats = data.wheats;
            var pulses = data.pulses;

            var Ricename = 0;
            var Wheatsname = 0;
            var Pulsesname = 0;

            var valueOfRice = 0;
            var valueOfWheats = 0;
            var valueOfPulses = 0;
            for (let key in rice) {
                var amount = rice[Ricename].weight * rice[Ricename].price;
                console.log("cost of " + rice[Ricename].name + " is:" + amount + "Rs");
                Ricename++;
                valueOfRice = valueOfRice + amount;
            }
            console.log("The total amount of rice is " + valueOfRice);

            for (let key in wheats) {
                var amount = wheats[Wheatsname].weight * wheats[Wheatsname].price;
                console.log("cost of " + wheats[Wheatsname].name + " is:" + amount + "Rs");
                Wheatsname++;
                valueOfWheats = valueOfWheats + amount;
            }
            console.log("The total amount of wheats is " + valueOfWheats);

            for (let key in pulses) {
                var amount = pulses[Pulsesname].weight * pulses[Pulsesname].price;
                console.log("cost of " + pulses[Pulsesname].name + " is:" + amount + "Rs");
                Pulsesname++;
                valueOfPulses = valueOfPulses + amount;
            }
            console.log("The total amount of pulses is " + valueOfPulses);


        }
        catch (error) {
            console.log(error);

        }
    }
}