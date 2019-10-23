const simpleAdd = (a, b) => a + b;

const timesAdd = (a, times) => {
  let sum = 0;

  for (let i = 0; i < times; i += 1) {
    sum += a;
  }

  return sum;
};

module.exports = {
  simpleAdd,
  timesAdd,
};
