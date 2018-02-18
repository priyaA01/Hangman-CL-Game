var inquirer = require('inquirer');
var Word = require("./Word.js");

var words = ["Australia", "Brazil", "Canada", "Denmark", "Egypt", "France", "India", "Japan", "China", "Mexico"];
var guessesLeft = 10;

/*displayword function randmly picks a word from the words property and displays it to the user
 in hyphens, so the user can guess the letter behind each hyphen*/
function start()
{
	var wordToFind = words[Math.floor(Math.random() * words.length)];	
	guessesLeft =10;
	displayWord(wordToFind);
}

function displayWord(wordToFind) {
	var word = new Word(wordToFind);
	var wordNew = word.wordFind();
	console.log(wordNew);
	if (wordNew != "") {
		inquirer.prompt([{
				type: "input",
				message: "Guess a Letter!",
				name: "userguess"
			}])
			.then(function (response) {
				if (response.userguess != "") {
					//console.log("got response  " + response.userguess);
					if(word.letterGuess(response.userguess))
					{
						console.log("CORRECT");
						console.log(word.wordFind());
					}
					else
					{
						console.log("INCORRECT");
						guessesLeft--;
						console.log("Guesses Remaining " + guessesLeft);
					}
					if(guessesLeft > 0)
					{
						displayWord(wordNew,word);
					}
					else if(guessesLeft == 0)
					{
						console.log("Guesses over! Try new word now");
						start();
					}
					else
					{
						console.log("You got the word correct");
						start();
					}
				}
			});
	}
}

start();


/*if(word.guessesLeft<10)
{
	console.log("Guesses Reamining  " + word.guessesLeft );
}*/