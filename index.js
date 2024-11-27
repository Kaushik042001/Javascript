//document.getElementById("count").innerText = 5;

let count = 0;
console.log(count);


//let myAge = 23;
//console.log(myAge);

// let myAge = 23; 
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

count = 0;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");


function increment() {
    count = count + 1;
    countEl.textContent = count; 
    
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
}


// functions

// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }

// countdown()

// let lap1 = 33;
// let lap2 = 34;
// let lap3 = 35;

// function sum(lap1, lap2, lap3) {
//     return lap1+lap2+lap3;
// }

// console.log(sum(lap1,lap2,lap3)); 


// strings

let username = "kaushik14"

let message = "You have three new notifications";
//  console.log(message);

// messageToUser = username + ", " +  message;

// console.log(messageToUser);

// let name = "Kaushik";
// let greetings = "Hi, my name is ";
// let myGreetings = greetings + name;
// console.log(myGreetings);

// let points = 4;
// let bonusPoints = "10";
// let totalPoints = points + bonusPoints;
// console.log(totalPoints);

// welcomeEl = document.getElementById("welcome-el");

// let name = "Kaushik Ulhas Chari";
// let greeting = "Welcome Back ";

// welcomeEl.innerText = greeting + ", " + name;


let firstName = "Kaushik";
let lastName = "Chari";

let fullName = firstName + " " + lastName;

console.log(fullName);

let name = "Kaushik";
let greeting = "Hii there";

function greetMessage() {
    console.log(greeting + " " + name + "!");
}

greetMessage();

let myPoints = 5;

function add3Points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}

add3Points();
remove1Point();
add3Points();

console.log(myPoints);

let errorParagraph = document.getElementById("error");

function purchase() {
    console.log("Button Clicked");
    errorParagraph.textContent = "Something went wrong, please try again";
}

let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
    let result = num1 + num2;
    document.getElementById("result").textContent = result;
}

function subtract() {
    let result = num1 - num2;
    document.getElementById("result").textContent = result;
}

function multiply() {
    let result = num1 * num2;
    document.getElementById("result").textContent = result;
}


function divide() {
    let result = num1 / num2;
    document.getElementById("result").textContent = result;
} 

let firstCard = 5;
let secondCard = 8;
let hasBlackJack = false;

let sum = firstCard + secondCard  +  8;

console.log(sum); 

if (sum < 21) {
    console.log("Do you want to draw new card ?");
}

else if (sum == 21) {
    console.log("You have got BlackJack!")
    hasBlackJack = true;
}

else {
    console.log("You are out of game")
}

console.log(hasBlackJack);

let age = 100 ;

// if (age < 21) {
//     console.log("You cannot enter the club!");
// }

// else {
//     console.log("Welcome");
// }
 

// if(age < 100) {
//     console.log("Not eligible!");
// }
// else if (age === 100) {
//     console.log("Here is your birthday card from the King!");
// }
// else {
//     console.log("Not eligible, you have already gotten one!");
// }

if (age < 100) {
    message = "Not eligible!";
}
else if (age === 100) {
    message = "Here is your birthday card from the King!";
}
else {
    message = "Not eligible, you have already gotten one!";
}

console.log(message);


// Arrays

let featuredPosts = [
    "Check out my latest Project", 
    "Checkout my Netflix Clone", 
    "Here is the code for my Project",
    "I have hust relaunched my Portfolio"
]


let experience = [
    "Web Developer at Google",
    "Senior Project Director at Creative Capsule",
    "Designer at Scrimba",
]

let education = [
    "Bsc Computer Science at GCQ",
    "Currently doing MCA at Goa University"
]

let licenses = [
    "AWS Certification",
    "Udemy in Web Development"
]

let skills = [
    "DBMS",
    "React JS",
    "C++"
]

let numbers = [7, 4]

numbers.push(6)

let feature = "I am an MCA Student"

featuredPosts.push(feature);

console.log(featuredPosts)

featuredPosts.pop()

console.log(featuredPosts)

for(let i=10; i<=100; i+=10) {
    console.log(i)
}


for(let i = 0; i < featuredPosts.length; i++) {
    console.log(featuredPosts[i]);
}

let sentence = ["Hello", "my", "name", "is", "Kaushik"];
let greetingEl = document.getElementById("greeting-el")

for( let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " ";
}


let player1Time = 102;
let player2Time = 106;

function getFastestRaceTime() {
    if(player1Time < player2Time) {
        return player1Time;
    }
    else {
        return player2Time;
    }
}

let fastestRace = getFastestRaceTime();

console.log(fastestRace);

let randomNumber = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber);

let flooredNumber = Math.floor(3.45632);
console.log(flooredNumber)


console.log(randomNumber)

let person = {
    name : "Kaushik",
    age : 23,
    country : "India"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}

logData();

let hands = ["rock", "paper", "scissor"]

function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    return randomNumber;
}

player1 = getRandomNumber();
player2 = getRandomNumber();

if(hands[player1] == "rock" && hands[player2] == "scissor") {
    console.log("Player1 won the game!");
}

else if(hands[player1] == "paper" && hands[player2] == "rock") {
    console.log("Player1 won the game!");
}

else if(hands[player1] == "scissor" && hands[player2] == "paper") {
    console.log("Player1 won the game!");
}

if(hands[player2] == "rock" && hands[player1] == "scissor") {
    console.log("Player2 won the game!");
}

else if(hands[player2] == "paper" && hands[player1] == "rock") {
    console.log("Player2 won the game!");
}

else if(hands[player2] == "scissor" && hands[player1] == "paper") {
    console.log("Player2 won the game!");
}

else if(hands[player1] == "paper" && hands[player2] == "paper") {
    console.log("Same guess!");
}

else if(hands[player1] == "paper" && hands[player2] == "paper") {
    console.log("Same guess!");
}

else if(hands[player1] == "paper" && hands[player2] == "paper") {
    console.log("Same guess!");
}

else if(hands[player2] == "scissor" && hands[player1] == "scissor") {
    console.log("Same guess!");
}

else if(hands[player2] == "rock" && hands[player1] == "rock") {
    console.log("Same guess!");
}

else if(hands[player2] == "paper" && hands[player1] == "paper") {
    console.log("Same guess!");
}


let container = document.getElementById("container");



container.innerHTML = "<button onclick='buy()'>Buy!</button>"; 

function buy() {
    container.innerHTML += "<p>Thank you for buying!</p>";
}

const recipient = "Kaushik";
const sender = "Kaushik Chari"
const email = `
                Hey ${recipient}! 
                How it is going? Cheers Per 
                - ${sender}`;
console.log(email);

// Local Storage 
localStorage.setItem("myName", "Kaushik Ulhas Chari");
let myName = localStorage.getItem("myName");
console.log(myName);
localStorage.clear();


// falsey and truthy values 

let trueOrFalse = Boolean("Hello!");
console.log(trueOrFalse);

// SETTING THE STAGE
const player = "Per";
const opponent = "Nick";
const game = "AmazingFighter";

let points = 0;
let hasWon = true;


// PLAYING THE GAME

points += 100;
hasWon = true;

// ANNOUNCING THE WINNER
if(hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`);
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`);
}

function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are`;
    const lastIndex = arr.length - 1;
    for(let i = 0; i < arr.length; i++) {
        if(i === lastIndex) {
            baseString += arr[i];
        } else {
            baseString += arr[i] + ", ";
        }
    }

    return baseString;
} 

const sentence2 = generateSentence("highest mountains", ["Mount Everest", "K2"]);

console.log(sentence2);  

const fruits = [
    "kiwi.jpeg",
    "pineapple.jpeg",
    "apple.jpeg"
]

renderImages(fruits);

function renderImages(fruits) {
    for(let i = 0; i < fruits.length; i++) {
        container.innerHTML += `<img class="images" src=${fruits[i]}>`
    }

}

