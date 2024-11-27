
let cards = [];
let sum = 0;
let isAlive = false;
let message = "";
let hasBlackJack = false;

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");

let player = {
    name : "Kaushik",
    chips : 145,
    sayHello : function() {
        console.log("Heisann!"); // functions inside object
    }
}

player.sayHello();

playerEl.textContent = player.name +  " : $" + player.chips;


function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;

    if (randomCard === 1) {
        return 11;
    }
    else if (randomCard > 10) {
        return 10;
    }
    else {
        return randomCard;
    }
}

function startGame() {

    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();

    console.log(cards);

}


function renderGame() {

    sumEl.textContent = "Sum: " + sum;

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }


    if (sum < 21) {
        message = "Do you want to draw new card ?";
    }

    else if (sum === 21) {
        message = "You have got BlackJack!";
        hasBlackJack = true;
    }

    else {
        message = "You are out of game";
        isAlive = false;
    }

    messageEl.textContent = message;
}

// 9423813156

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

}











