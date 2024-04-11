import getRandomInt from '../utils.js';
import runGames from '../index.js';

const rules = 'What number is missing in the progression?';

/* const progressNumbersColl = (firstOperand, secondOperand) => {
  const resultColl = [firstOperand];
  let sum = firstOperand;
  const counter = getRandomInt(5, 9);
  for (let i = 0; i <= counter; i += 1) {
    sum += secondOperand;
    resultColl.push(sum);
  }
  return resultColl;
}; */

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  } return progression;
};

const generateRound = () => {
  const length = getRandomInt(5, 9);
  const start = getRandomInt(0, 5);
  const step = getRandomInt(1, 5);
  const progression = generateProgression(start, step, length);
  const randomIndex = getRandomInt(0, progression.length - 1);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [correctAnswer, question];
};

export default () => runGames(rules, generateRound);
