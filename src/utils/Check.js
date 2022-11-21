const { ABOUT } = require("../constants/Message");
const { Console } = require("@woowacourse/mission-utils");
/**
 * 객체 - 유효성 체크 기능
 */

const Check = {
  bridgeLength(value) {
    try {
      if (isNaN(value) || value < 3 || value > 20) {
        throw new Error(ABOUT.RANGE);
      }
      return true;
    } catch (error) {
      Console.print(ABOUT.RANGE);
      Console.close();
    }
  },

  moveFormat(step) {
    try {
      if (step !== "U") {
        if (step !== "D") {
          throw new Error(ABOUT.BRIDGE_ELEMENT);
        }
      }
      return true;
    } catch (error) {
      Console.print(ABOUT.BRIDGE_ELEMENT);
      Console.close();
    }
  },

  selectFormat(select) {
    try {
      if (select !== "R") {
        if (select !== "Q") {
          throw new Error(ABOUT.SELECT_ELEMENT);
        }
      }
      return true;
    } catch (error) {
      Console.print(ABOUT.SELECT_ELEMENT);
      Console.close();
    }
  },
};

module.exports = Check;
