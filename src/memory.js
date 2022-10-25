class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards=[]
    this.pairsClicked=0
    this.pairsGuessed=0
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards){
      return undefined
    }
    var copy = [], n = this.cards.length, i;

  // While there remain elements to shuffle…
    while (n) {

    // Pick a remaining element…
      i = Math.floor(Math.random() * this.cards.length);

    // If not already shuffled, move it to the new array.
      if (i in this.cards) {
        copy.push(this.cards[i]);
        delete this.cards[i];
        n--;
      }
  }
    this.cards=copy
    return 
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked+=1
    if (card1===card2){
      this.pairsGuessed+=1
      return true
    }
    return false
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed===this.cards.length/2) return true;
    return false
  }
}