/* eslint-disable no-console, import/extensions */
import { getRandomInt, getMaxDivider } from '../utils.js';
import runGames from '../index.js';

const instructionsToUser = 'Find the greatest common divisor of given numbers.';

const generateLogik = () => {
  const firstNumber = getRandomInt(2, 15);
  const secondNumber = getRandomInt(1, 15);
  const correctAnswer = getMaxDivider(firstNumber, secondNumber).toString();
  const question = `${firstNumber} ${secondNumber}`;

  return [correctAnswer, question];
};

export default () => runGames(instructionsToUser, generateLogik);
