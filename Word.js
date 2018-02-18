var Letter = require("./Letter.js");

var Word = function(wordToFind){

	this.wordToFind = wordToFind;
   	var letters=[];
    var letter = new Letter(this.wordToFind);
    var userguess="";
       	
    this.wordFind = function()
    {
    	for (var i = 0; i < this.wordToFind.length; i++) {
            //word=this.wordToFind.indexOf(char);
			letters[i] = letter.returnChar(userguess);
            if(wordToFind[i] == letters[i])
            {
                letters[i]=userguess;
                console.log("letters  " + letters[i]);
               
          //word.push(letter.returnChar(this.wordToFind[i]));
            }
            else
            {
                letters[i]="-";
            }
        }
    	return letters.toString();
    };

    this.letterGuess = function(char)
    {
    	var guessed=letter.userGuess(char);
    	userguess = char;
    	return guessed;
    };
  
};

//export for Word constructor
module.exports=Word;


//var letter1= new Word("indiana");
//console.log(letter1.wordFind());
//console.log(letter1.returnChar());