const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");

const { DEFAULT } = require("./constant");

const getBridgeMake = (length) =>
  BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);

const isZero = (value) => value === DEFAULT.ZERO;

const isNumber = (input) => isNaN(input);

const isOverBridgeRange = (input) =>
  input < DEFAULT.MIN_BRIDGE_NUM || input > DEFAULT.MAX_BRIDGE_NUM;

const inputCallback = function inputCallbackExcute(callback, bridgeGame) {
  return (input) => callback(bridgeGame, input);
};

module.exports = {
  getBridgeMake,
  isZero,
  isNumber,
  isOverBridgeRange,
  inputCallback,
};
