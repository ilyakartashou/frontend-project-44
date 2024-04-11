import getRandomInt from '../utils.js';
import runGames from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getMaxDivider = (first, second) => {
  let a = first;
  let b = second;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  } return a + b;
};

const generateRound = () => {
  const firstNumber = getRandomInt(2, 15);
  const secondNumber = getRandomInt(1, 15);
  const correctAnswer = getMaxDivider(firstNumber, secondNumber).toString();
  const question = `${firstNumber} ${secondNumber}`;

  return [correctAnswer, question];
};

export default () => runGames(rules, generateRound);
