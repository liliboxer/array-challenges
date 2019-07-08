const { largestProductYielded } = require('../lib/largest-product-yielded');

describe('largest product yielded', () => {
  it('sorts array', () => {
    const arr = [-10, 7, 29, 30, 5, -10, -70];
    const sort = largestProductYielded(arr);
    expect(sort).toEqual([-70, -10, -10, 5, 7, 29, 30]);
  });
});
