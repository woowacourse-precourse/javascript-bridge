const curry = (f) => {
  return (a, b) => {
    return (c) => {
      f(a, b, c);
    };
  };
};

module.exports = curry;
