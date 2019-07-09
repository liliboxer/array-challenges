const { findMissingNumber } = require('../lib/find-missing-number');

describe('missing number', () => {
  it('find length of array', () => {
    const arr = [2, 5, 1, 6, 3];
    const upperBound = 6;
    const lowerBound = 1;
    const result = findMissingNumber(arr, upperBound, lowerBound);
    expect(result).toEqual(5);

  });
  it('', () => {
    const arr = [2, 5, 1, 4, 9, 6, 3, 7];
    const upperBound = 9;
    const lowerBound = 1;
    const result = findMissingNumber(arr, upperBound, lowerBound);
    expect(result).toEqual(8);
  });
});