const { uniqueValues } = require('../lib/unique-values');

describe('unique values', () => {
  it('remove duplicates', () => {
    const arr = [3, 3, 5, 3, 12, 7];
    const unique = uniqueValues(arr);
    expect(unique).toEqual([3, 5, 12, 7]);
  });
});
