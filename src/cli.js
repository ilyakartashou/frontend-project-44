/* eslint-disable no-console, import/extensions */
import readlineSync from 'readline-sync';

export const questionToUser = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}`);
};

export default () => {
  console.log('Welcome to the Brain Games!');
};
