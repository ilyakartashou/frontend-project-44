/* eslint-disable no-console, import/extensions, no-param-reassign */
import { startEvenGame } from './even.js';

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
export const congratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
export const missAnswer = (userAnswer, correctAnswer, userName) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}`);
};
