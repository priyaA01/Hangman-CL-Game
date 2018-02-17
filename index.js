//contains the logic to choose the word and keeps track of guessed letters and guesses remaining
//allow user to select new word or keep in guessing if guesses reaminning is 5 or low
var Word = require("./word.js");
var inquirer = require('inquirer');
//var gameStart=true;

var Game = function(){

     /* words property contains all the words */
    this.words = ["Australia", "Brazil", "Canada", "Denmark", "Egypt", "France", "India", "Japan", "China", "Mexico"];
    this.guessesLeft = 10 ;

    /*displayword function randmly picks a word from the words property and displays it to the user
     in hyphens, so the user can guess the letter behind each hyphen*/
    this.displayWord = function() {
        var wordToFind = this.words[Math.floor(Math.random() * this.words.length)];
        var word = new Word(wordToFind);
        word.wordFind();
        inquirer
		  .prompt([
		    {
		      type: "input",
		      message: "Guess a Letter!  ",
		      name: "userguess"
		    }
		    ])
		  .then(function(response) {

		  		word.letterGuess(response.userguess);
		    
		  });


        /*if(word.guessesLeft<10)
        {
        	console.log("Guesses Reamining  " + word.guessesLeft );
        }*/

        
    };
};

//export for Game constructor
module.exports=Game;


//var game1= new Game();
//console.log(game1.displayWord());