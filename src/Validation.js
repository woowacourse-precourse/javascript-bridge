const { INPUT_ERROR_MESSAGE } = require("./Constants");

const checkNaN = (value) => {
  const check = /^[0-9]+$/;
  if (!check.test(value)) return true;
};

const checkRange = (value) => {
  if (value < 3 || value > 20) return true;
};

const checkBridgeSize = (size) => {
  if (checkNaN(size)) throw INPUT_ERROR_MESSAGE.NAN_ERROR;
  if (checkRange(parseInt(size))) throw INPUT_ERROR_MESSAGE.RANGE_ERROR;
};

module.exports = { checkBridgeSize: checkBridgeSize };
