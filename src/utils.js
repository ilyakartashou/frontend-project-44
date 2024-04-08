/* eslint-disable no-console, import/extensions, no-param-reassign */
// import { startEvenGame } from './even.js';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export default getRandomInt;
