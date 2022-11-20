const { isNumber, error } = require("./Utils");
const { Console } = require("@woowacourse/mission-utils");
const { ERROR_MSG } = require("./constants/Message");

/**
 * 유효성 검사
 */
const Vaild = {
  /**
   * 다리 길이가 올바른지 판별하는 메서드
   * @param {number} birdgeSize 다리길이
   * @returns {boolean}
   */
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

  /**
   * 이동하기 위한 올바른 입력인지 판별하는 메서드
   * @param {string} moving 이동할 위치
   * @returns {boolean}
   */
  checkMoving(moving) {
    try {
      if (moving !== "U" && moving !== "D") throw error(ERROR_MSG.INPUT_MOVING);
      return true;
    } catch (msg) {
      Console.print(msg.message);
      return false;
    }
  },
  /**
   * 재시작 혹은 종료하기 위한 입력이 맞는지 판별하는 메서드
   * @param {string} command 입력한 문자
   * @returns {boolean}
   */
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
