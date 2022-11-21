const TypeConverter = {
  toNumber(input) {
    return parseInt(input.trim(), 10);
  },
  toString(input) {
    return input.toString().trim();
  },
};

module.exports = TypeConverter;
