const { INPUT_ERROR_MESSAGE } = require("./Constants");

const checkNaN = (value) => {
  const check = /^[0-9]+$/;
  if (!check.test(value)) return true;
};

const checkBridgeSize = (size) => {
  if (checkNaN(size)) throw INPUT_ERROR_MESSAGE.NAN_ERROR;
};

module.exports = { checkBridgeSize: checkBridgeSize };
