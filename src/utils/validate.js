const { Console } = require("@woowacourse/mission-utils");
const { ERROR, DEFAULT } = require("./constant.js");

const isNumber = (input) => isNaN(input);
const isOverBridgeRange = (input) =>
  input < DEFAULT.MIN_BRIDGE_NUM || input > DEFAULT.MAX_BRIDGE_NUM;

const bridgeLength = function bridgeLengthValidation(input, callback) {
  try {
    if (isNumber(input)) throw new Error(ERROR.BRIDGE_IS_NUMBER_ERROR);
    if (isOverBridgeRange(input)) throw new Error(ERROR.BRIDGE_RANGE_ERROR);
    return true;
  } catch (error) {
    Console.print(error);
    callback();
    return false;
  }
};

const bridgeDirection = function bridgeDirectionValidation(input, callback) {
  try {
    if (input !== DEFAULT.UP && input !== DEFAULT.DOWN)
      throw new Error(ERROR.DIRECTION_INPUT_ERROR);
    return true;
  } catch (error) {
    Console.print(error);
    callback();
    return false;
  }
};

const gameContinue = function gameContinueValidation(input, callback) {
  try {
    if (input !== DEFAULT.RETRY && input !== DEFAULT.QUIT)
      throw new Error(ERROR.CONTINUE_INPUT_ERROR);
    return true;
  } catch (error) {
    Console.print(error);
    callback();
    return false;
  }
};

module.exports = {
  bridgeLength,
  bridgeDirection,
  gameContinue,
};
