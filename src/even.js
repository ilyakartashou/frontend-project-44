/* eslint-disable no-console, import/extensions, no-param-reassign */
import { getRandomInt } from './utils.js';

const instructionsToUserEven = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const randomNumberEven = () => getRandomInt(0, 100);
const correctAnswerEven = (randomNumber) => (isEven(randomNumber) ? 'yes' : 'no');

export {
  instructionsToUserEven, isEven, correctAnswerEven, randomNumberEven,
};
