const { Console } = require("@woowacourse/mission-utils");
const { ERROR, DEFAULT } = require("./constant");
const { isNumber, isOverBridgeRange } = require("./utilityFuncions");

const bridgeLength = function bridgeLengthValidation(input, callback) {
  try {
    if (isNumber(input)) throw new Error(ERROR.BRIDGE_IS_NUMBER_ERROR);
    if (isOverBridgeRange(input)) throw new Error(ERROR.BRIDGE_RANGE_ERROR);
    return DEFAULT.TRUE;
  } catch (error) {
    Console.print(error);
    callback();
    return DEFAULT.FALSE;
  }
};

const bridgeDirection = function bridgeDirectionValidation(input, callback) {
  try {
    if (input !== DEFAULT.UP && input !== DEFAULT.DOWN)
      throw new Error(ERROR.DIRECTION_INPUT_ERROR);
    return DEFAULT.TRUE;
  } catch (error) {
    Console.print(error);
    callback();
    return DEFAULT.FALSE;
  }
};

const gameContinue = function gameContinueValidation(input, callback) {
  try {
    if (input !== DEFAULT.RETRY && input !== DEFAULT.QUIT)
      throw new Error(ERROR.CONTINUE_INPUT_ERROR);
    return DEFAULT.TRUE;
  } catch (error) {
    Console.print(error);
    callback();
    return DEFAULT.FALSE;
  }
};

module.exports = {
  bridgeLength,
  bridgeDirection,
  gameContinue,
};
