const TypeConverter = {
  toNumber(input) {
    return parseInt(input.trim(), 10);
  },
  toString(input) {
    return input.toString().trim();
  },
  rowArrToStr(input) {
    return '[ ' + input.join(' | ') + ' ]';
  },
};

module.exports = TypeConverter;
