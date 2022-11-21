const { Console } = require("@woowacourse/mission-utils");

const MESSAGE = require("../constant/message");
const { toNumber } = require("../helpers/common");
const { BRIDGE_MAX_LENGTH, BRIDGE_MIN_LENGTH } = require("../constant");

class BridgeException {
  validateInteger = (input) => {
    if (isNaN(input) || input === "") {
      throw MESSAGE.ERROR.INVALID_INTEGER;
    }
  };

  validateRange = (input) => {
    const bridgeLength = toNumber(input);
    if (bridgeLength < BRIDGE_MIN_LENGTH || bridgeLength > BRIDGE_MAX_LENGTH) {
      throw MESSAGE.ERROR.INVALID_LENGTH;
    }
  };

  validateMovingKeyWord = (input) => {
    if (input !== "U" && input !== "D") {
      throw MESSAGE.ERROR.INVALID_MOVE;
    }
  };

  validateGameCommand = (input) => {
    if (input !== "R" && input !== "Q") {
      throw MESSAGE.ERROR.INVALID_COMMAND;
    }
  };

  static isInvalidBridgeLength = (input) => {
    const bridgeException = new BridgeException();
    try {
      bridgeException.validateInteger(input);
      bridgeException.validateRange(input);
    } catch (error) {
      Console.print(error);
      return true;
    }
    return false;
  };

  static isInvalidMoving = (input) => {
    const bridgeException = new BridgeException();
    try {
      bridgeException.validateMovingKeyWord(input);
    } catch (error) {
      Console.print(error);
      return true;
    }
    return false;
  };

  static isInvalidGameCommand = (input) => {
    const bridgeException = new BridgeException();
    try {
      bridgeException.validateGameCommand(input);
    } catch (error) {
      Console.print(error);
      return true;
    }
    return false;
  };
}

module.exports = BridgeException;
