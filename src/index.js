const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

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


const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards()
window.addEventListener('load', (event,cards) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (cards) => {
      // TODO: write some code here

      if (document.querySelectorAll('.find').length<1){
        card.classList.add('turned')
        card.classList.add('find')
      }else if(document.querySelectorAll('.find').length===1) {
        card.classList.add('turned')
        card.classList.add('find')
        const card1=document.querySelectorAll('.find')[0]
        const card2=document.querySelectorAll('.find')[1]
        
        if(memoryGame.checkIfPair(card1.getAttribute('data-card-name'),card2.getAttribute('data-card-name'))){
          document.getElementById('pairs-clicked').innerHTML=memoryGame.pairsClicked
          document.getElementById('pairs-guessed').innerHTML=memoryGame.pairsGuessed
          card1.classList.remove('find')
          card2.classList.remove('find')
          if(memoryGame.checkIfFinished()){
            alert(`O jogo acabou!! Seu coeficiente de memória é ${Math.floor(memoryGame.pairsGuessed/memoryGame.pairsClicked*100)} %`)
            location.reload()
          }
        }else{
          console.log(memoryGame.pairsGuessed)
          document.getElementById('pairs-clicked').innerHTML=memoryGame.pairsClicked
          setTimeout(()=>{
            card1.classList.remove('turned')
            card2.classList.remove('turned')
            card1.classList.remove('find')
            card2.classList.remove('find')
          },1000)
        }
        return
      }
      
    });
  });
});

