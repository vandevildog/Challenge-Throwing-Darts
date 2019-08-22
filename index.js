function scoreCalculator(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('input needs to be an array!');
  }

  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      score += 10;
    }
    if (arr[i] >= 5 && arr[i] <= 10) {
      score += 5;
    }
  }

  return score;
}

module.exports = scoreCalculator;
