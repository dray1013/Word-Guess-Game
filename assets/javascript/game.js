var $newGameButton = document.getElementById("new-game-button");
var $placeHolders = document.getElementById("place-holders");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");


var wordBank = ["satelite orbit", "moon craters", "saturn's rings", "the sun", "asteroid", "blackhole", "comet"];
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var gameRunning = false;
var pickedWord = "";
var pickedwordPlaceholderarr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

function newGame(){
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedwordPlaceholderarr =[];

    pickedWord = wordBank[math.floor(math.random() * wordBank.length)]

    for(var i = 0; i < pickedWord.length; i++){
        if(pickedWord[i] === " "){
            pickedwordPlaceholderarr.push(" ");
        } else(pickedwordPlaceholderarr.push("_"))
    }
}

$guessesLeft.textContent = guessesleft;
$placeHolders.textContent = pickedwordPlaceholderarr.join(" ");
$guessedLetters.textcontent = incorrectLetterBank;



$newGameButton.addEventListener("click", newGame);


