function multiplesOfN(n) {
  let arr = [];
  for(let i = 0; i <= 100; i++) {
    if(i % n === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}

multiplesOfN(5);

module.exports = { multiplesOfN };
