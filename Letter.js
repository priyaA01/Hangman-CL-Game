
var Letter = function(wordToFind){
	this.wordToFind = wordToFind;
	var guessedletter = "" ;
	var guessed = false;

	this.returnChar = function ()
	{
		if(guessed)
		{
        	return guessedletter;
		}
		else
		{
			return "-";
		}
	};
	this.userGuess = function(letter)
	{
		if(this.wordToFind.indexOf(letter) > -1 )
		{
			guessedletter = letter;
			guessed = true;
		}
		return guessed;
	};

};

//export for Letter constructor
module.exports=Letter;


//var letter1= new Letter("india");
//console.log(letter1.userGuess("i"));
//console.log(letter1.returnChar());