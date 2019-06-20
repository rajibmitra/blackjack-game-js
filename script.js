
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'] ; 

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six',
'Five', 'Four','Three', 'Two']; 

 

function createDeck(){
  let deck = [];
  for (let suitId =0 ; suitId < suits.length ; suitId ++){
    for (let valueId=0; valueId < values.length ; valueId++){
        let card = {
            suit : suits[suitId],
            value : values[valueId]
        };
        deck.push(card);
    }
  }
  return deck ;
}

function getCardString(card){
  return card.value + ' of ' + card.suit ;
}



let deck = createDeck() ;


function getNextCard(){
  return deck.shift();
}


 

let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack"); 

console.log("you are dealt: ");

console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));


let textArea = document.getElementById('text-area');
let okButton = document.getElementById('ok-button');

okButton.addEventListener('click', function(){
  textArea.innerText = "Button Clicked";
});













