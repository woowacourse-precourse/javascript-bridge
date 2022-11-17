const parseNumber = function parseNumber(value) {
  if (value === '') {
    return '';
  }
  return Number(value);
};

const isInRange = function isInRange(number, start, end) {
  if (start <= number && number <= end) {
    return true;
  }
  return false;
};

module.exports = {
  parseNumber,
  isInRange
};
