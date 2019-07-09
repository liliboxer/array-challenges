const { largestProductYielded } = require('../lib/largest-product-yielded');

describe('largest product yielded', () => {
  // it('sorts array', () => {
  //   const arr = [-10, 7, 29, 30, 5, -10, -70];
  //   const sort = largestProductYielded(arr);
  //   expect(sort).toEqual([-70, -10, -10, 5, 7, 29, 30]);
  // });
  it('returns 880', () => {
    const arr = [-70, -10, 11, 8, 10];
    const sum = largestProductYielded(arr);
    expect(sum).toEqual(880);
  });
  it('returns 165', () => {
    const arr = [-3, -9, 69, 18];
    const sum = largestProductYielded(arr);
    expect(sum).toEqual(165);
  });

});

// 2 or 0 neg numbers 

// check if highest negative number is less than highest positive number 
