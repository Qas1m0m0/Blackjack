let firstCard = 6;
let secondCard = 3;

let sumOfCards = firstCard + secondCard;


if (sumOfCards < 21) {
    console.log('Do you want to draw a new card? 🃏')
} else if (sumOfCards === 21) {
    console.log(`You've got Blackjack! 🂫`)
} else {
    console.log(`You've lost the game. Unlucky 👎🏼`)
}
 console.log(sumOfCards);