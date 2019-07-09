function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
  
  const sum = arrayOfIntegers.reduce((acc, num) => acc += num, 0);
  console.log('total', sum);

  return sum;

}

findMissingNumber([1, 2, 4, 5], 5, 1);

module.exports = { findMissingNumber };
