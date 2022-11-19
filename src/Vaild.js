const { isNumber, error } = require("./Utils");
const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MSG, ERROR_MSG } = require("./constants/Message");

const Vaild = {
  checkBridgeSize(birdgeSize) {
    birdgeSize = Number(birdgeSize);
    try {
      if (!isNumber(birdgeSize) || !(birdgeSize >= 3 && birdgeSize <= 20))
        throw error(ERROR_MSG.INPUT_BRIDGE);
      return true;
    } catch (msg) {
      Console.print(msg.message);
      return false;
    }
  },

  checkMoving(moving) {
    try {
      if (moving !== "U" && moving !== "D") throw error(ERROR_MSG.INPUT_MOVING);
      return true;
    } catch (msg) {
      Console.print(msg.message);
      return false;
    }
  },
  checkGameCommand(command) {
    try {
      if (command !== "R" && command !== "Q")
        throw error(ERROR_MSG.INPUT_GAMECOMMAND);
      return true;
    } catch (msg) {
      Console.print(msg.message);
      return false;
    }
  },
};

module.exports = Vaild;
