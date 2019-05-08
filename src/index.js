const random = require('random-seed');

const simpleAdd = (a, b) => a + b;

const timesAdd = (a, times) => {
  let sum = 0;

  for (let i = 0; i < times; i += 1) {
    sum += a;
  }

  return sum;
};

const magicalAdd = (a, b, delta = 5, seed = -1) => {
  const rand = (seed !== -1) ? random(seed) : random();
  return a + b + rand(delta);
};

module.exports = {
  simpleAdd,
  timesAdd,
  magicalAdd,
};
