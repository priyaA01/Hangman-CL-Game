var Letter = require("./Letter.js");

var wordNew=[];
var alpha =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Word = function(wordToFind){

	this.wordToFind = wordToFind;
    this.letters=[];
    this.userguess="";
    this.word="";

    for (var j = 0; j < this.wordToFind.length; j++)
    {
        this.letters.push(new Letter(this.wordToFind[j]));            
       // console.log("l " + this.letters);
    }

    this.wordFind = function()
    {
        //var wordNew="";
        //console.log("l " + this.letters.length);
    	for (var i = 0; i < this.letters.length; i++) 
        {
            if(this.letters[i].returnChar(wordToFind[i]) === this.userguess)
            {
                wordNew[i] = this.userguess;
            }
            else 
            {
                if(wordNew[i] != "-" && wordNew[i] !="")
                {
                    console.log("there");
                    wordNew[i]=wordNew[i];
                }
                else{
                    console.log("here");
                    wordNew[i] = "-" ;
                }
                
            }
            console.log("l2 " + wordNew);
        }
        
        //this.word=wordNew.join('');
        //console.log("word" + this.word);
        return wordNew.toString();
      };

    this.letterGuess = function(char)
    {
        var guessed=false;

        for (var i = 0; i < this.letters.length; i++) 
        {
        	guessed=this.letters[i].userGuess(char);
            if(guessed){
                this.userguess = char;
                break;
            }        	
        }
        //console.log("letter " +this.userguess);
    	return guessed;
    };
  
};

//export for Word constructor
module.exports=Word;


/*var letter1= new Word("canada");
console.log(letter1.letterGuess("a"));
console.log(letter1.wordFind());*/



