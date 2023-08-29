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
    cardsEl.textContent = 'Cards: '

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ' ';
    }
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
    let nextCard = 12
    sumOfCards +=nextCard
    cards.push(nextCard);
    console.log(cards);
    renderGame()
}