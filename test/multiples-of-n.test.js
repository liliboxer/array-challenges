const { multiplesOfN } = require('../lib/multiples-of-n');

describe('array', () => {
  it('create an array 1-100', () => {
    const n = 1;
    const arr = multiplesOfN(n);
    expect(arr).toEqual(expect.any(Array));
  });

  it('multiples of 10', () => {
    const n = 15;
    const result = multiplesOfN(n);
    expect(result).toEqual([15, 30, 45, 60, 75, 90]);
  });
})
;
