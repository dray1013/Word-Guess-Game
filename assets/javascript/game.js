var newGameButton = document.getElementById("new-game-button");
var placeHolders = document.getElementById("place-holders");
var guessedLetters = document.getElementById("guessed-letters");
var guessesLeft = document.getElementById("guesses-left");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");


var wordBank = ["satelite orbit", "moon craters", "saturn's rings", "the sun", "asteroid", "blackhole", "comet"];
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var gameRunning = false;
var pickedWord = ' ';
var pickedWordPlaceholderarr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

function newGame(){
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedWordPlaceholderarr =[];

    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)]

    for(var i = 0; i < pickedWord.length; i++){
        if(pickedWord[i] === ''){
            pickedWordPlaceholderarr.push(' ');
        } else{pickedWordPlaceholderarr.push('_')}
    }


guessesLeft.textContent = guessesLeft;
placeHolders.textContent = pickedWordPlaceholderarr.join(' ');
guessedLetters.textcontent = incorrectLetterBank;

}


document.getElementById("new-game-button").onclick = newGame;



