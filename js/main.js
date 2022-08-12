
// ICEBOX
// bodyParts for each wrong answer you get
// wrongGuessLetters
// typing letters out
// alphabets

// /*----- constants -----*/

const alphabet = document.getElementById('alphabet');
const container = document.getElementById('container');
const hangman = document.querySelectorAll('h-container');
const words = document.querySelector('guess');
const resetGame = document.getElementById('resetBtn');
const enter = document.getElementById('enter')

const wordGuess = document.querySelector(".wordGuess");

// /*----- app's state (variables) -----*/
var wrongGuess = "";
var movies = ["Exocist", "Conjuring", "Shining", "Grudge", "Taxes", "Psycho" ];

// /*----- cached element references -----*/

document.getElementById('enter').onclick = function () {
    var letterBox = document.getElementById('letter-key').value;
   
}
letterBox()

document.getElementById('stand').src="./Source/hangman0.jpg.jpg"
document.getElementById('head').style.display = 'none';
document.getElementById('body').style.display = 'none';
document.getElementById('rArm').style.display = 'none';
document.getElementById('lArm').style.display = 'none';
document.getElementById('rLeg').style.display = 'none';
document.getElementById('lLeg').style.display = 'none';
// /*----- event listeners -----*/

resetGame.addEventListener("click", ()  => location.reload());

// /*----- functions -----*/

  




   
