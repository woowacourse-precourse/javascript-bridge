const Utils = {
  isNumber(input) {
    return /^[0-9]+$/.test(input);
  },

  isNumberInRange(input, min, max) {
    return (
      Utils.isNumber(input) && Number(input) >= min && Number(input) <= max
    );
  },
};

module.exports = Utils;
