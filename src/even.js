/* eslint-disable no-console, import/extensions, no-param-reassign */
import readlineSync from 'readline-sync';
import { congratulations, missAnswer, getRandomInt } from './utils.js';
import { greeting } from './cli.js';

export const startEvenGame = () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  const isEven = (number) => number % 2 === 0;
  const rondsCount = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < rondsCount; i += 1) {
    const randomNumber = getRandomInt(0, 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else if (correctAnswer !== userAnswer) {
      missAnswer(userAnswer, correctAnswer, userName);
      return;
    }
  }
  congratulations(userName);
};
