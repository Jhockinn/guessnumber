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
const fanfareSounds = document.getElementById("fanfare")


let secretNumber = Math.floor(Math.random() * 20 + 1)
let score = 20
let highscore = 0

console.log("Secret Number:", secretNumber)

function testNumber(){
    console.log("testNumber")
    const guess = Number(inpGuess.value)
    console.log("Guess:", guess)

    if(!guess){
        lblMessage.textContent = "Wrong Number!"
    } else if (guess === secretNumber){
        lblMessage.textContent = "You have Guessed the Number!"

        lblNumber.textContent = secretNumber

        fanfareSounds.play()

        if(score > highscore) {
            highscore = score
            lblHighscore.textContent = highscore
        }

        inpGuess.disabled = true
        btnCheck.disabled = true

    } else if (guess !== secretNumber){
        if(score > 1){
            lblMessage.textContent = guess > secretNumber ? inpGuess.value + " Too High!" : inpGuess.value + " Too Low!"
            inpGuess.value = " "
            score --
            lblScore.textContent = score
        } else {
            lblMessage("You Lost!")
            lblScore.textContent = 0
            inpGuess.disabled = true
            btnCheck.disabled = true
        }

    }
}

function resetGame(){
    score = 20
    secretNumber = Math.floor(Math.random() * 20 + 1)
    lblMessage.textContent = "Start making guesses"
    lblScore.textContent = score
    lblNumber.textContent = "?"
    inpGuess.value = ""
    inpGuess.disabled = false
    btnCheck.disabled = false
}

btnAgain.addEventListener("click", resetGame)
btnCheck.addEventListener("click", testNumber)
