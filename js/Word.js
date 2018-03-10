//require for letter constructor
var Letter = require("./Letter.js");

//array to store new word with each user guess
var wordNew = [];
//flag to check for initial word with all hyphens
var flag = false;

//word constructor
var Word = function (wordToFind) {

    this.wordToFind = wordToFind;
    this.letters = [];
    this.userguess = "";
    this.word = "";

    //An array of new Letter objects representing the letters of the underlying word
    for (var j = 0; j < this.wordToFind.length; j++) {
        this.letters.push(new Letter(this.wordToFind[j]));
    }

    /* A function that returns a string representing the word. 
    This calls the function on each letter object that displays the character or an underscore 
    and concatenate those together.*/
    this.wordFind = function () {
        //new word length to be same as word to find length
        wordNew.length = this.letters.length;
        for (var i = 0; i < this.letters.length; i++) {
            //function call by letter object for letter constructor function 
            if (this.letters[i].returnChar(wordToFind[i]) === this.userguess) {
                //if the word to find has the letter user guessed
                wordNew[i] = this.userguess;
            } else {
                if (wordNew[i] != "-" && flag && this.userguess != "") {
                    //to not replace the old user guess with hyphens 
                    //and keep the leter in its place
                    wordNew[i] = wordNew[i];
                } else {
                    //concatenate hyphens in letter places user has not yet guessed
                    wordNew[i] = "-";
                }

            }
        }

        //flag is true when there is user guessed 
        flag = true;
        //array to string
        return wordNew.toString();
    };

    /*A function that takes a character as an argument and calls the guess function 
    on each letter object */
    this.letterGuess = function (char) {
        var guessed = false;

        for (var i = 0; i < this.letters.length; i++) {
            //function call by letter object for letter constructor function 
            guessed = this.letters[i].userGuess(char);
            if (guessed) {
                this.userguess = char;
                break;
            }
        }
        return guessed;
    };

};

//export for Word constructor
module.exports = Word;

