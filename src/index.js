/* eslint-disable no-console, import/extensions, no-param-reassign */
import readlineSync from 'readline-sync';

export default (instructionsToUser, generateLogik) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}`);

  
  const rondsCount = 3;

  console.log(`${instructionsToUser}`);
  for (let i = 0; i < rondsCount; i += 1) {
    const [correctAnswer, question] = generateLogik();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
