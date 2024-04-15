import getRandomInt from '../utils.js';
import runCalcGames from '../index.js';

const rules = 'What is the result of the expression?';

const calc = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '-':
      return firstOperand - secondOperand;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};
const generateRound = () => {
  const operatorsColl = ['+', '-', '*'];
  const firstOperand = getRandomInt(0, 10);

  const secondOperand = getRandomInt(0, 10);

  const operator = operatorsColl[getRandomInt(0, 3)];

  const correctAnswer = calc(firstOperand, secondOperand, operator).toString();
  const question = `${firstOperand} ${operator} ${secondOperand}`;

  return [correctAnswer, question];
};

export default () => runCalcGames(rules, generateRound);
