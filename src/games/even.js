/* eslint-disable no-console, import/extensions, no-param-reassign */
import getRandomInt from '../utils.js';
import runGames from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomInt(0, 100);
  const correctAnswer = (isEven(randomNumber) ? 'yes' : 'no');
  const question = randomNumber.toString();

  return [correctAnswer, question];
};

export default () => runGames(rules, generateRound);
