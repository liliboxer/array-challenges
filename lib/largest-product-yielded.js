function largestProductYielded(arr) {
  const sorted = arr.sort((a, b) => a - b);
  if(sorted[0] < 0 && sorted[1] < 0) {
    let sum = sorted[0] * sorted[1] * sorted[sorted.length - 1];
    return sum;
  } else {
    let sum = sorted[sorted.length - 1] * sorted[sorted.length - 2] * sorted[sorted.length - 3];
    return sum;
  }
}

module.exports = { largestProductYielded };
