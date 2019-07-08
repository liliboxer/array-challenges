function multiplesOfN(n) {
  let arr100 = [];
  for(let i = 0; i <= 100; i++) {
    arr100.push(i);
  }
  console.log(arr100);

  return arr100;
}

multiplesOfN(1);

module.exports = { multiplesOfN };
