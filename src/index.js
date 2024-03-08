'use strict';

function calculateRating(winRate, loseRate) {
  let inputData;

  switch (true) {
    case typeof winRate !== 'number':
      return 'Entered wrong data! Please, enter number between 0 and 60.';
      break;
    case typeof loseRate !== 'number':
      return 'Entered wrong data! Please, enter number between 0 and 60.';
      break;
    case winRate < 0:
      return 'Entered wrong data! Please, enter number between 0 and 60.';
      break;
    case loseRate < 0:
      return 'Entered wrong data! Please, enter number between 0 and 60.';
      break;
    case isNaN(winRate):
      return 'Entered wrong data! Please, enter number between 0 and 60.';
      break;
    case isNaN(loseRate):
      return 'Entered wrong data! Please, enter number between 0 and 60.';
      break;
    default:
      inputData = calculateRating(winRate, loseRate);
      return inputData;
  }

  // if (
  //   typeof winRate !== 'number' ||
  //   typeof loseRate !== 'number' ||
  //   winRate < 0 ||
  //   loseRate < 0 ||
  //   isNaN(winRate) ||
  //   isNaN(loseRate)
  // ) {
  //   return 'Entered wrong data! Please, enter number between 0 and 60.';
  // }

  const diffRate = loseRate - winRate;

  switch (true) {
    case winRate === 0:
      return loseRate;
      break;
    case diffRate >= 0 && diffRate <= 2:
      return winRate + 2;
      break;
    case diffRate > 2 && diffRate < 20:
      return winRate + 1;
      break;
    case diffRate >= 20:
      return winRate;
      break;
    default:
      const ratingChange = (diffRate + 5) / 3;
      return winRate + ratingChange;
  }
}

// Verify function
const newRate = calculateRating(5, 10);
console.log(`Your new rating is ${newRate}`);
