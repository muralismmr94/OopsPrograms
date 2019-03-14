var read=require('readline-sync');
var file=require('fs');
class InventoryFactory{
   /**
   * Function to add the details of the share into JSON file.
   * @param {JSON object} data
   */
    add(data){
        try{
            var name=read.question("enter the name of the stock to add : ");
            var shares=read.question("enter the number of shares : ");
            var cost=read.question("enter the price of the shares : ");
            /**
            * Push the data given to the end of the array(ie, JSON object)
            */
            data.listOfShares.push({CompanyName:name,NoOfShares:shares,price:cost});
            /**
            * Use function JSON.stringify() to convert data into a string and write it to JSON file
            */
            file.writeFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/inventary_management/InventaryManagement.json',JSON.stringify(data));

        }catch(error){
            console.log(error.message);
            
        }
    }
    /**
   * Function to remove the details of the share from JSON file.
   * @param {JSON object} data
   */
    remove(data){
        try{
            var name=read.question("enter the name to remove from stock : ");
            /**
            * Loop over the data in the JSON file and search for the name given by the user,
            * remove it from the file.
            */
            for(let i=0;i<data.listOfShares.length;i++){
                if(data.listOfShares[i].CompanyName==name){
                    var index = data.listOfShares.indexOf(data.listOfShares[i]);
                    data.listOfShares.splice(index, 1);
                  }
                /**
                * Use function JSON.stringify() to convert data into a string and write it to JSON file
                */
                file.writeFileSync('/home/admin1/Desktop/myjavascript/oopsprograms/inventary_management/InventaryManagement.json',JSON.stringify(data));
            }
        }catch(error){
            console.log(error.message);
            
        }
    }
    /**
   * Function to show the details of the shares in JSON file.
   * @param {JSON object} data
   */
  show(data) {
    var stock = data.listOfShares;
    for (const key in stock) {
      console.log(stock[key]);
    }
  }
  /**
   * Function to print the calculated values of the shares in JSON file.
   * @param {JSON object} data
   */
  
}
/**
 * @description :calling the class to export the certain function.
 */
module.exports={InventoryFactory}