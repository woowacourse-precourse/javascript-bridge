const Utils = {
  convertToNumber(source) {
    return +source;
  },

  isNull(source) {
    return source === '';
  },

  isInRange(source, lower, upper) {
    return source >= lower && upper >= source;
  },

  isOneInArray(source, ...array) {
    return array.includes(source);
  },

  isOneSize(source) {
    return [...source].length === 1;
  },
};

module.exports = Utils;
