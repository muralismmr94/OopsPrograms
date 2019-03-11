class Player {
    constructor(cards) {
      this.cards = cards;
    }
    /**
     * Function to sort the cards.
     */
    sortedCards() {
      var sortedCards = [];
      var access = require("../oopsutility/Utility");
      sortedCards = access.bubbleSortString(this.cards);
      return sortedCards;
    }
  }
  module.exports = { Player };