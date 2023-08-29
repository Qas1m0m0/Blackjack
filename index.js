let firstCard = 6;
let secondCard = 3;
let cards = [firstCard, secondCard];
let sumOfCards = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true
let message = ' '
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');

function startGame() {
    renderGame();
}

function renderGame() {  
    cardsEl.textContent = 'Cards: ' + cards[0] + ' ' + cards[1];
    sumEl.textContent = 'Sum: ' + sumOfCards;
    if (sumOfCards < 21) {
        message = 'Do you want to draw a new card? 🃏'
    } else if (sumOfCards === 21) {
        message = `You've got Blackjack! 🂫`;
        hasBlackJack = true
    } else {
        message = `You've lost the game. Unlucky 👎🏼`
        isAlive = false;
    }
    messageEl.textContent = message;
   
}

function newCard() {
    console.log('Drawing a new card from the deck!');
    let nextCard = 12
    sumOfCards +=nextCard
    renderGame()
}