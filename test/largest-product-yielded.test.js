const { largestProductYielded } = require('../lib/largest-product-yielded');

describe('largest product yielded', () => {
  it('sorts array', () => {
    const arr = [-10, 7, 29, 30, 5, -10, -70];
    const sort = largestProductYielded(arr);
    expect(sort).toEqual([-70, -10, -10, 5, 7, 29, 30]);
  });
  it('grab 3 highest numbers', () => {
    const arr = [-70, -10, -10, 5, 7, 29, 30];
    const highest = largestProductYielded(arr);
    expect(highest).toEqual([]);
  });

});

// 2 or 0 neg numbers 

// check if highest negative number is less than highest positive number 
