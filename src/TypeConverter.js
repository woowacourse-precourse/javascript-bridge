const TypeConverter = {
  toNumber(input) {
    return parseInt(input.trim(), 10);
  },
};

module.exports = TypeConverter;
