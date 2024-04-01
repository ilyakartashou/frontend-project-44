/* eslint-disable no-console, import/extensions, no-param-reassign */
import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default (instructionsToUser, randomNumber, correctAnswer) => {
  greeting();
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);
  const rondsCount = 3;
  console.log(`${instructionsToUser}`);
  for (let i = 0; i < rondsCount; i += 1) {
    const randomNum = randomNumber();
    console.log(`Question: ${randomNum}`);
    console.log(`${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer(randomNum) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer(randomNum)}.\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
