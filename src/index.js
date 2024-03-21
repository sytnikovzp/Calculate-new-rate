'use strict';

function calculateRating(winRate, opponRate) {
  const diffRate = winRate - opponRate;
  let newRate;

  if (typeof winRate !== 'number' || typeof opponRate !== 'number') {
    return 'Entered wrong data! Please, enter rating between 0 and 60.';
  }
  if (winRate < 0 || opponRate < 0 || winRate > 60 || opponRate > 60) {
    return 'Rating is less been 0 or more than 60! Please, enter number between 0 and 60.';
  }
  if (isNaN(winRate) || isNaN(opponRate)) {
    return 'Entered NaN! Please, enter number between 0 and 60.';
  }

  if (winRate === 0) {
    newRate = opponRate;
    return `Your new rating is ${newRate.toFixed(1)}.`;
  }

  if (diffRate >= 0 && diffRate <= 2) {
    newRate = winRate + 2;
    return `Your new rating is ${newRate.toFixed(1)}.`;
  }

  if (diffRate > 2 && diffRate < 20) {
    newRate = winRate + 1;
    return `Your new rating is ${newRate.toFixed(1)}.`;
  }
  if (diffRate >= 20) {
    newRate = winRate;
    return `Your new rating is ${newRate.toFixed(1)}.`;
  }
  if (winRate < opponRate) {
    const ratingChange = (opponRate - winRate + 5) / 3;
    newRate = winRate + ratingChange;
    return `Your new rating is ${newRate.toFixed(1)}.`;
  }
}

// Verify function
const newRate1 = calculateRating(59, 37);
console.log(newRate1);
console.log('=================================');

const newRate2 = calculateRating(58, 56);
console.log(newRate2);
console.log('=================================');

const newRate3 = calculateRating(26, 27);
console.log(newRate3);
console.log('=================================');

const newRate4 = calculateRating(26, 29);
console.log(newRate4);
console.log('=================================');

const newRate5 = calculateRating(0, 37);
console.log(newRate5);
console.log('=================================');

const newRate6 = calculateRating(36, 61);
console.log(newRate6);
console.log('=================================');

const newRate7 = calculateRating(-36, 51);
console.log(newRate7);
console.log('=================================');

const newRate8 = calculateRating(NaN, 41);
console.log(newRate8);
console.log('=================================');

const newRate9 = calculateRating(36, '37');
console.log(newRate9);
console.log('=================================');
