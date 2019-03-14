module.exports = {
  /**
   * @description :The method is used to change the content of particular places.
   * @param {*} name 
   * @param {*} fullname 
   * @param {*} mobile 
   */
    regExp(name, fullname, mobile) {
        var readline = require('readline-sync');
        var fs = require('fs');
        var patt = /[a-zA-Z]/;

        /**
         * @description : It is used to checking name and fullname validation.
         */
        while (!patt.test(name) || !patt.test(fullname)) {
            name = readline.question("please enter a name valid charaters input");
            fullname = readline.question("please enter a fullname characters input");
        }
        /**
         * @description : It is used to validating the mobile number.
         */
         var mobile1 = ""+mobile;
        while (!isNaN(mobile) && (mobile1.length != 10)) {
            mobile = readline.questionInt("please enter a valid number ");
            mobile1 = ""+mobile;
        }
        var date = new Date();
        /**
         * @description : Here reading the file and storing the variable.
         */
        var file = fs.readFileSync("/home/admin1/Desktop/myjavascript/oopsprograms/oopsutility/Regularexp.txt");
        file = file.toString();
        /**
         * @description : Replace method is used to change certain pattern to particular values.
         */
        file = file.replace(/<<name>>/g, name);
        file = file.replace(/<<full name>>/g, fullname);
        file = file.replace(/xxxxxxxxxx/g, mobile);
        file = file.replace(/01-01-2016/g, date);
        return file;
    },
     /**
  * Program to create a deck of cards having suit ("Clubs","Diamonds", "Hearts", "Spades") &
  * Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10","Jack", "Queen", "King", "Ace").
  * Returns the deck of card in a array
  */
  deckOfCards() {
    try {
      var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
      var ranks = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace"
      ];
      /**
       * To calculate total number of cards
       */
      var totalCards = suits.length * ranks.length;
      /**
       * To create a deck of array
       */
      var cardArray = [];
      for (let currentSuit = 0; currentSuit < suits.length; currentSuit++) {
        for (let currentRank = 0; currentRank < ranks.length; currentRank++) {
          var temp = "";
          cardArray.push(temp + ranks[currentRank] + suits[currentSuit]);
        }
      }
      /**
       * To shuffle the deck
       */
      for (let shuffle = 0; shuffle < totalCards; shuffle++) {
        var num = Math.floor(Math.random() * totalCards);
        /**
         * Performing swapping
         */
        var temp = cardArray[shuffle];
        cardArray[shuffle] = cardArray[num];
        cardArray[num] = temp;
        
      }
      return cardArray;
    } catch (error) {
      console.log(error.message);
    }
  },
  bubbleSortString(arr) {
    try {
      var length = arr.length;
      /**
       * Loop from first element still length of array
       */
      for (let i = 0; i < length; i++) {
        /**
         * Loop for adjacent element to be compared
         */
        for (let j = 0; j < length - i - 1; j++) {
          /**
           * Compare the adjacent positions
           */
          if (arr[j] > arr[j + 1]) {
            /**
             * Temporary variable to hold the current element
             */
            var tmp = arr[j];
            /**
             * Replace current element with adjacent element
             */
            arr[j] = arr[j + 1];
            /**
             * Replace adjacent element with current element
             */
            arr[j + 1] = tmp;
          }
        }
      }
      //console.log(arr);
      return arr;
    } catch (error) {
      console.log(error.message);
    }
  }
}
