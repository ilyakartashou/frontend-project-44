import getRandomInt from '../utils.js';
import runProgressionGames from '../index.js';

const rules = 'What number is missing in the progression?';

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

export default () => runProgressionGames(rules, generateRound);
