/* **************************************************************************************
 * Execution        : Default node             cmd> node deckOfCards.js 
 * @file            : deckOfCards.js
 * @overview        : Write a Program DeckOfCards.java, to initialize deck of cards having 
 *                    suit ("Clubs", "Diamonds", "Hearts", "Spades") & Rank ("2", "3", "4", 
 *                    "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"). Shuffle 
 *                    the cards using Random method and then distribute 9 Cards to 4 Players 
 *                    and Print the Cards the received by the 4 Players using 2D Array        
 * @author          : Murali s <muralismmr94@gmail.com>
 * @version         : 1.0.  
 * @since           : 11/03/2019
 * **************************************************************************************/
var util=require('./oopsutility/Utility');
/**
 * @description : creating the function .
 */
function main() {
    try {
      /**	
       * @description : To get the deck of cards and storing the variable.
       */
      var cardArray = util.deckOfCards();
      /**
       *@description  : To distribute 9 Cards to 4 Players
       */
      var arr = [[], [], [], []];
      var noOfCards = 0;
      /**
       * @description : looping is used to selecting the players here.
       */
      for (let players = 0; players < 4; players++) {
        /**
         * @description : loop is used to assaign the values to the certain player.
         */
        for (let cards = 0; cards < 9; cards++) {
          arr[players][cards] = cardArray[cards + noOfCards];
        }
        /**
         * @description counting the total cards.
         */
        noOfCards = noOfCards + 9;
      }
      console.log();
      console.log("Players assigned cards are\n");
      
      /**
       * @description : To print shuffled deck of cards of each player
       */
      for (let player = 0; player < arr.length; player++) {
        console.log( "Deck of cards of player " +(player + 1) +" is: " +
        " [" + arr[player] + "]");
      }
      console.log();
    } catch (error) {
      console.log(error.message);
    }
  }
  /**
   * @description : calling the function.
   */
  main();