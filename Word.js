var Letter = require("./Letter.js");

var Word = function(wordToFind){

	this.wordToFind = wordToFind;
   	var word="";
    var letter = new Letter(this.wordToFind);
       	
    this.wordFind = function()
    {
    	for (var i = 0; i < this.wordToFind.length; i++) {
          word += letter.returnChar(this.wordToFind[i]);
        }
    	return word;
    };

    this.letterGuess = function(char)
    {
    	var guessed=letter.userGuess(char);
    	return guessed;
    };
  
};

//export for Word constructor
module.exports=Word;


//var letter1= new Word("indiana");
//console.log(letter1.wordFind());
//console.log(letter1.returnChar());