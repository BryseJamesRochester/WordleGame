"use strict";

const map = Array.prototype.map;
const NUM_OF_GUESSES = 5;
const WORD_LENGTH = 5;


class Wordle { 
  constructor() {
    this.word = "hello";
    this.guesses = NUM_OF_GUESSES;  
    this.matches = [];
    this.playing = false;
        
    
    }

    newWord(){
      this.word = "hello";
    }

    play(){
      this.initializeNewGame();

      while(this.playing)
        this.oneRound();
    }

    initializeNewGame(){
      this.playing = true;
      this.guesses = NUM_OF_GUESSES;
      this.newWord();
    }

    checkResult(guess, matches){
      if (matches.reduce((x, y) => {return x+y}) === 0)
        this.endGame("win");
      else if (this.guesses < 1)
        this.endGame();
      else {
        this.outputResult(guess, matches);
      }
        
    }

    outputResult(guess, matches) {
      let guessString = "";
      for(let letter of guess){
        guessString+= letter + " ";
      }
      let matchString = "";
      matches.forEach(match => match === 0 ? matchString += "M ": match === 1 ? matchString += "? " : matchString += "X ")
      
      console.log(guessString);
      console.log(matchString);
    }

    oneRound(){
      this.guesses -= 1
      let guess = this.getNextGuess();
      this.matches = this.compareGuess(this.word, guess);
      this.checkResult(guess, this.matches);
    }

    getNextGuess(){
      let guess = prompt('Enter your guess:');
      
      while(!this.validGuess(guess)) 
        guess = prompt("Enter a valid guess");
      
      return guess;
    }

    validGuess(guess){
      if (guess.length !== WORD_LENGTH)
        return false;
      if (!/^[a-zA-Z]+$/.test(guess)) 
        return false;
      return true;
    }

    compareGuess(word, guess){
      let matches = map.call(guess, (letter, i) => {
          if (letter.toLowerCase() === word.charAt(i)) return 0;
          if (word.includes(letter.toLowerCase())) return 1;
          return 2;
      })
      return matches;
    }

    endGame(result){
      this.playing = false;
      result === "win" ? this.win() : this.lose();
    }

    win() {
      if (prompt("You Win! Do you want to play again? (y/n)").toLowerCase() === "y" ){
        this.initializeNewGame();
      }
    }

    lose() {
      if (prompt("You Lose! Do you want to play again? (y/n)").toLowerCase() === "y" )
        this.initializeNewGame();
    }


}


let wordle = new Wordle();
wordle.play();