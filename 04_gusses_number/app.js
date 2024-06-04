let randomNumber = parseInt(Math.random() * 100 + 1);


const submit = document.querySelector('#subt')
const username = document.querySelector('guessfield')
const guessSlot = document.querySelector('guesses')
const remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.loworHigh')
const StartOver = document.querySelector('resultParas')


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        ValidateGuess(guess)
    });
}

function ValidateGuess(guess) {
    if (isNaN(guess)) {
        aleart('Please enter a valid number')
    }

    else if (guess < 1) {
        aleart('Please enter a  number more than 1 and less than 100 ')
    }
    else if(guess <100){
        aleart('Please enter a  number more than 1 and less than 100 ')

    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            DisplayGuess(guess)
            DisplayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }else{
            DisplayGuess(guess)
            CheckGuess(guess)
        }
    }
}

function CheckGuess(guess) {
if( guess === randomNumber){
    DisplayMessage("You Enter Right Answer")
    endGame()
}
else if( guess < randomNumber){
    DisplayMessage("You Enter TOO LOW Answer")
}
else if( guess > randomNumber){
    DisplayMessage("You Enter TOO HIGH Answer")
}
}

function DisplayGuess(guess) {
 userInput.value = ""
 guessSlot.innerHTML += `${guess}`
 numGuess++;
 remaining.innerHTML = `${11 - numGuess}`
}

function DisplayMessage(message) {

    loworHi.innerHTML =` <h2>${message}</h2>`
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute('disabled',"")

    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    StartOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
  randomNumber =parseInt(Math.random() * 100 + 1);
   prevGuess = []
   numGuess= 1;
   guessSlot.innerHTML = ""
   remaining.innerHTML = `${ 11 - numGuess }`
   userInput.removeAttribute('disabled')
   StartOver.removeChild(p)

   playGame = true;
    })
}