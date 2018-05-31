var $newGameButton = document.getElementById("new-game-button");
var $placeHolders = document.getElementById("place-holders");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");


var wordBank = ["Satelite orbit", "Moon craters", "rings of Saturn", "the Sun", "asteroid", "blackhole", "comet"];
var wins = 0;
var losses = 0;
var guessesLeft = 8;
var gameRunning = false;
var pickedWord = "";
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

    for (var i = 0; i < pickedWord.length; i++){
        if (pickedWord[i] == " "){
            pickedWordPlaceholderarr.push(" ");
        } else{pickedWordPlaceholderarr.push("-")}
    }


$guessesLeft.textContent = guessesLeft;
$placeHolders.textContent = pickedWordPlaceholderarr.join("");
$guessedLetters.textContent = incorrectLetterBank

}

function letterGuess(letter){
    if(gameRunning === true && guessedLetterBank.indexOf(letter) === -1){
        guessedLetterBank.push(letter);

        for(var i = 0; i < pickedWord.length; i++) {
            if(pickedWord[i].toLowerCase() == letter.toLowerCase()) {
                pickedWordPlaceholderarr[i] = pickedWord[i];
            }
        
        }
        $placeHolders.textContent = pickedWordPlaceholderarr.join("");
        letterCheck(letter);
        
    }
    else {
        if (gameRunning === false){
            alert("Click new game to start a new game!");
        }else{
            alert("You already guessed that letter!");
        }
    }
}

function letterCheck(letter){
    if (pickedWordPlaceholderarr.indexOf(letter.toLowerCase()) === -1 
    &&
        pickedWordPlaceholderarr.indexOf(letter.toUpperCase()) === -1)
        {
        incorrectLetterBank.push(letter);
        guessesLeft--;
        $guessesLeft.textContent = guessesLeft;
        $guessedLetters.textContent = incorrectLetterBank.join(" ");
    }
    gameCheck()
}

function gameCheck(){
    if (pickedWordPlaceholderarr.join("").toLowerCase() === pickedWord.toLowerCase() ){
        
        wins++
        $wins.textContent = wins;
        gameRunning = false
    }
    else if(guessesLeft === 0){
        losses++
        $losses.textContent = losses;
        gameRunning = false
    }
}




$newGameButton.addEventListener("click", newGame);

document.onkeyup = function(event) {
    console.dir(event);

    if(event.keyCode >= 65 && event.keyCode <= 90){
    letterGuess(event.key);
    }
}





