const { INPUT_ERROR_MESSAGE } = require("./Constants");

const checkNaN = (value) => {
  const check = /^[0-9]+$/;
  if (!check.test(value)) return true;
};

const checkRange = (value) => {
  if (value < 3 || value > 20) return false;
};

const checkBridgeSize = (size) => {
  if (checkNaN(size)) throw INPUT_ERROR_MESSAGE.NAN_ERROR;
  if (!checkRange(size)) throw INPUT_ERROR_MESSAGE.RANGE_ERROR;
};

module.exports = { checkBridgeSize: checkBridgeSize };
