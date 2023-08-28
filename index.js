let firstCard = 6;
let secondCard = 3;
let sumOfCards = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true
let message = ' '
let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');

function startGame() {  
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