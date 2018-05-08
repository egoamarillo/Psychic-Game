

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var userGuess = null;
var letterGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log("Wins: " + wins + "Losses: " + losses + "Guesses Left: " + guessLeft + "Guesses so far " + guessSoFar + "Computer chose: " + letterGuessed);
document.getElementById("guessLeft").innerHTML = guessLeft;

document.onkeyup = function (event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        guessSoFar[guessSoFar.length] = userGuess;
        guessLeft--;
    }

    if (letterGuessed == userGuess) {
        wins++;
        console.log("You won!");
        guessLeft = 9;
        guessSoFar = [];
        letterGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Wins: " + wins + "Losses: " + losses + "Guesses Left: " + guessLeft + "Guesses so far " + guessSoFar + "Computer chose: " + letterGuessed);
    }

    if (guessLeft == 0) {
        losses++;
        console.log("You lost!");
        guessLeft = 9;
        guessSoFar = [];
        letterGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Wins: " + wins + "Losses: " + losses + "Guesses Left: " + guessLeft + "Guesses so far " + guessSoFar + "Computer chose: " + letterGuessed);
    }

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("guessSoFar").innerHTML = guessSoFar;
}   