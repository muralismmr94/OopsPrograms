class Stock{
    /**
     * @description: create a constructor with three arguments as parameters.
     * @param {string} name 
     * @param {Number} numberOfShares 
     * @param {Number} sharePrice 
     */
    constructor(name,numberOfShares,sharePrice){
        this.name=name;
        this.numberOfShares=numberOfShares;
        this.sharePrice=sharePrice;
    }
    /**
     * Return the value of the stock.
     */
    valueOfStock(){
        return this.numberOfShares*this.sharePrice;
    }
} 
/**
 * @description : It is used to export the stock class where you want to import.
 */
module.exports={Stock}   