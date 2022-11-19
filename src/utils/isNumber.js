const isNumber = (num) => {
  return !Number.isNaN(num) && typeof num === 'number';
};

module.exports = {
  isNumber,
};
