const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const BridgeMaker = require("./BridgeMaker.js");

const { DEFAULT } = require("./constant.js");

const getBridgeMake = (length) =>
  BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);

const isZero = (value) => value === DEFAULT.ZERO;

const isNumber = (input) => isNaN(input);

const isOverBridgeRange = (input) =>
  input < DEFAULT.MIN_BRIDGE_NUM || input > DEFAULT.MAX_BRIDGE_NUM;

module.exports = {
  getBridgeMake,
  isZero,
  isNumber,
  isOverBridgeRange,
};
