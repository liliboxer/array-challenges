const nums = [-10, 7, 29, 30, 5, -10, -70];

function largestProductYielded(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);
  return sortedArr;
}

largestProductYielded(nums);

module.exports = { largestProductYielded };
