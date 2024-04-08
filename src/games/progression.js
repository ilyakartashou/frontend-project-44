/* eslint-disable no-console, import/extensions */
import getRandomInt from '../utils.js';
import runGames from '../index.js';

const rules = 'What number is missing in the progression?';

const progressNumbersColl = (firstOperand, secondOperand) => {
  const resultColl = [firstOperand];
  let sum = firstOperand;
  const counter = getRandomInt(5, 9);
  for (let i = 0; i <= counter; i += 1) {
    sum += secondOperand;
    resultColl.push(sum);
  }
  return resultColl;
};

const generateRound = () => {
  const firstOperand = getRandomInt(0, 5);
  const secondOperand = getRandomInt(1, 5);
  const temp = progressNumbersColl(firstOperand, secondOperand);
  const b = getRandomInt(0, temp.length - 1);
  const correctAnswer = temp[b].toString();
  temp[b] = '..';
  const question = temp.join(' ');

  return [correctAnswer, question];
};

export default () => runGames(rules, generateRound);
