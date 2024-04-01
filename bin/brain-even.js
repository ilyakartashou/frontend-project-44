#!/usr/bin/env node
/* eslint-disable no-console, import/extensions */
import playGames from '../src/index.js';
import { instructionsToUserEven, randomNumberEven, correctAnswerEven } from '../src/even.js';

playGames(instructionsToUserEven, randomNumberEven, correctAnswerEven);
