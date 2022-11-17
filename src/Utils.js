const utils = {
  error(msg) {
    return new Error(`[ERROR] ${msg}`);
  },
  isNumber(number) {
    return !Number.isNaN(number) && typeof number === "number";
  },
};
module.exports = utils;
