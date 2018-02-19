var Letter = require("./Letter.js");

var wordNew = [];
var flag = false;
var Word = function (wordToFind) {

    this.wordToFind = wordToFind;
    this.letters = [];
    this.userguess = "";
    this.word = "";

    for (var j = 0; j < this.wordToFind.length; j++) {
        this.letters.push(new Letter(this.wordToFind[j]));
    }

    this.wordFind = function () {
        wordNew.length = this.letters.length;
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].returnChar(wordToFind[i]) === this.userguess) {
                wordNew[i] = this.userguess;
            } else {
                if (wordNew[i] != "-" && flag && this.userguess != "") {
                    wordNew[i] = wordNew[i];
                } else {
                    wordNew[i] = "-";
                }

            }
        }

        flag = true;
        return wordNew.toString();
    };

    this.letterGuess = function (char) {
        var guessed = false;

        for (var i = 0; i < this.letters.length; i++) {
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


/*var letter1= new Word("canada");
console.log(letter1.letterGuess("a"));
console.log(letter1.wordFind());*/