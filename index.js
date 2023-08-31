let cards = [];
let sumOfCards = 0
let hasBlackJack = false;
let isAlive = false
let message = ' '
let messageEl = document.querySelector('#message-el');
let sumEl = document.querySelector('#sum-el');
let cardsEl = document.querySelector('#cards-el');

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber >= 11) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else return randomNumber
}

function startGame() {
    isAlive= true;
    let firstRandomCard = getRandomCard();
    let secondRandomCard = getRandomCard();
    cards = [firstRandomCard, secondRandomCard];
    sumOfCards = firstRandomCard + secondRandomCard;
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
    let nextCard = getRandomCard()
    sumOfCards +=nextCard
    cards.push(nextCard);
    console.log(cards);
    renderGame()
}