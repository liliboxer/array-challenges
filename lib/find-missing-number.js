function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  const arrayLength = upperBound - lowerBound;
  console.log(arrayLength);
  return arrayLength;

}

findMissingNumber([2, 5, 1, 6, 3], 6, 1);

module.exports = { findMissingNumber };
