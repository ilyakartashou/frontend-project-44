/* eslint-disable no-console, import/extensions */
import getRandomInt from '../utils.js';
import runGames from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInt(2, 50);
  const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
  const question = number;
  return [correctAnswer, question];
};

export default () => runGames(rules, generateRound);
