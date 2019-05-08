const { simpleAdd, timesAdd, magicalAdd } = require('./index');

describe('Simple addition', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(simpleAdd(1, 2)).toBe(3);
  });

  test('adds -1 and 2 to equal 1', () => {
    expect(simpleAdd(-1, 2)).toBe(1);
  });

  test('adds -1 and -2 to equal -3', () => {
    expect(simpleAdd(-1, -2)).toBe(-3);
  });
});

describe('Times addition (aka. multiplication)', () => {
  test('times 1 * 2 to equal 2', () => {
    expect(timesAdd(1, 2)).toBe(2);
  });

  test('times -1 * 2 to equal -2', () => {
    expect(timesAdd(-1, 2)).toBe(-2);
  });
});

describe('Magical addition (wtf)', () => {
  test('adds 1 + 2 to be 4', () => {
    expect(magicalAdd(1, 2, 5, 42)).toBe(4);
  });

  test('adds -1 and 2 to be 2', () => {
    expect(magicalAdd(-1, 2, 5, 42)).toBe(2);
  });

  test('adds -1 and -2 to be -2', () => {
    expect(magicalAdd(-1, -2, 5, 42)).toBe(-2);
  });

  test('adds 1 + 2 to not be 3, with a random seed', () => {
    expect(magicalAdd(1, 2)).not.toBe(3);
  });
});
