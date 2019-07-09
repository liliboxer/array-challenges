const { largestProductYielded } = require('../lib/largest-product-yielded');

describe('largest product yielded', () => {
  // it('sorts array', () => {
  //   const arr = [-10, 7, 29, 30, 5, -10, -70];
  //   const sort = largestProductYielded(arr);
  //   expect(sort).toEqual([-70, -10, -10, 5, 7, 29, 30]);
  // });
  it('2 negative numbers,', () => {
    const arr = [-10, 20, 5, -7, 9];
    const sum = largestProductYielded(arr);
    expect(sum).toEqual(1400);
  });
  it('1 negative number', () => {
    const arr = [10, 7, 29, 5, 10, -70];
    const sum = largestProductYielded(arr);
    expect(sum).toEqual(2900);
  });

});

// 2 or 0 neg numbers 

// check if highest negative number is less than highest positive number 
