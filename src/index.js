'use strict';

function inputRate(winRate, opponRate) {
  let inputData;

  switch (true) {
    case typeof winRate !== 'number':
      console.log(
        'Entered wrong data! Please, enter winner`s rating between 0 and 60.'
      );
      break;
    case typeof opponRate !== 'number':
      console.log(
        'Entered wrong data! Please, enter opponnent rating between 0 and 60.'
      );
      break;
    case winRate < 0:
      console.log(
        'Winner`s rating is less been 0! Please, enter number between 0 and 60.'
      );
      break;
    case opponRate < 0:
      console.log(
        'Opponent rating is less been 0! Please, enter number between 0 and 60.'
      );
      break;
    case winRate > 60:
      console.log(
        'Winner`s rating is greater been 60! Please, enter number between 0 and 60.'
      );
      break;
    case opponRate > 60:
      console.log(
        'Opponent rating is greater been 60! Please, enter number between 0 and 60.'
      );
      break;
    case isNaN(winRate):
      console.log('Entered NaN! Please, enter number between 0 and 60.');
      break;
    case isNaN(opponRate):
      console.log('Entered NaN! Please, enter number between 0 and 60.');
      break;
    default:
      inputData = calculateRating(winRate, opponRate);
  }
  return inputData;
}

function calculateRating(winRate, opponRate) {
  const diffRate = opponRate - winRate;
  let newRate;

  switch (true) {
    case winRate === 0:
      newRate = opponRate;
      return `Your new rating is ${newRate.toFixed(1)}.`;
      break;
    case diffRate >= 0 && diffRate <= 2:
      newRate = winRate + 2;
      return `Your new rating is ${newRate.toFixed(1)}.`;
      break;
    case diffRate > 2 && diffRate < 20:
      newRate = winRate + 1;
      return `Your new rating is ${newRate.toFixed(1)}.`;
      break;
    case diffRate >= 20:
      newRate = winRate;
      return `Your new rating is ${newRate.toFixed(1)}.`;
      break;
    default:
      const ratingChange = (diffRate + 5) / 3;
      newRate = winRate + ratingChange;
  }
  return `Your new rating is ${newRate.toFixed(1)}.`;
}

// Verify function
const newRate1 = inputRate(59, 37);
console.log(newRate1);
console.log('=================================');

const newRate2 = inputRate(59, 57);
console.log(newRate2);
console.log('=================================');

const newRate3 = inputRate(26, 27);
console.log(newRate3);
console.log('=================================');

const newRate4 = inputRate(26, 29);
console.log(newRate4);
console.log('=================================');

const newRate5 = inputRate(0, 37);
console.log(newRate5);
console.log('=================================');

const newRate6 = inputRate(36, 61);
console.log(newRate6);
console.log('=================================');

const newRate7 = inputRate(-36, 51);
console.log(newRate7);
console.log('=================================');

const newRate8 = inputRate(NaN, 41);
console.log(newRate8);
console.log('=================================');

const newRate9 = inputRate(36, '37');
console.log(newRate9);
console.log('=================================');