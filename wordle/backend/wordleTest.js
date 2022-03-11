"use strict"

let Wordle = require("./wordleGame.js");

let wordle = new Wordle(5,5);
wordle.newGame();

console.log(`\n\nGame Started. Word is ${wordle.word}.`)
let { win, lose, matches } = wordle.makeGuess("ayyyo");
console.log(`Guess:ayyyo win:${win} lose:${lose} matches:${matches} guesses:${wordle.guesses}`);
({ win, lose, matches } = wordle.makeGuess("hiiii"));
console.log(`Guess:hiiii win:${win} lose:${lose} matches:${matches} guesses:${wordle.guesses}`);
({ win, lose, matches } = wordle.makeGuess("hello"));
console.log(`Guess:hello win:${win} lose:${lose} matches:${matches} guesses:${wordle.guesses}`);

wordle.newGame();
console.log(`\n\nGame Started. Word is ${wordle.word}.`);
({ win, lose, matches } = wordle.makeGuess("ayyyo"));
console.log(`Guess:ayyyo win:${win} lose:${lose} matches:${matches} guesses:${wordle.guesses}`);
({ win, lose, matches } = wordle.makeGuess("hiiii"));
console.log(`Guess:hiiii win:${win} lose:${lose} matches:${matches} guesses:${wordle.guesses}`);
({ win, lose, matches } = wordle.makeGuess("yyyyy"));
console.log(`Guess:yyyyy win:${win} lose:${lose} matches:${matches} guesses:${wordle.guesses}`);
({ win, lose, matches } = wordle.makeGuess("hiiii"));
console.log(`Guess:hiiii win:${win} lose:${lose} matches:${matches} guesses:${wordle.guesses}`);
({ win, lose, matches } = wordle.makeGuess("abcde"));
console.log(`Guess:abcde win:${win} lose:${lose} matches:${matches} guesses:${wordle.guesses}`);
({ win, lose, matches } = wordle.makeGuess("hiiii"));
console.log(`Guess:hiiii win:${win} lose:${lose} matches:${matches} guesses:${wordle.guesses}`);
({ win, lose, matches } = wordle.makeGuess("yyyyy"));
console.log(`Guess:yyyyy win:${win} lose:${lose} matches:${matches} guesses:${wordle.guesses}`);