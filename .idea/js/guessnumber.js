console.log("jeg er i guessnumber")

const lblMessage = document.querySelector(".message");
console.log(lblMessage);
console.log(lblMessage.textContent)
const lblNumber = document.querySelector(".number");
console.log(lblNumber);
const lblScore = document.querySelector(".score");
console.log(lblScore);
const inpGuess = document.querySelector(".guess");
console.log(inpGuess);
const lblHighscore = document.querySelector(".highscore")
const btnCheck = document.querySelector(".check")
const btnAgain = document.querySelector(".again")


let secretNumber = Math.floor(Math.random() * 20 + 1)
let score = 20
let highscore = 0

console.log("Secret Number:", secretNumber)

function testNumber(){
    console.log("testNumber")
    guess = inpGuess.value
    console.log(inpGuess.value)

    if(!guess){
        lblMessage.textContent = "Wrong Number"
    } else if (guess === secretNumber){
        lblMessage.textContent = '?? You have Guessed the Number'
        youWin()
    } else if (guess < secretNumber){
        lblMessage.textContent = 'Too Low'
    } else if (guess > secretNumber){
        lblMessage.textContent = 'Too High'
    }
}
function youWin(){
    console.log("You Win!")
    lblNumber.textContent = secretNumber
}
