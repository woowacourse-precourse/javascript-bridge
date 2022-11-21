const { ABOUT } = require("../constants/Message");
/**
 * 객체
 * 유효성 체크 기능
 * 코드 짜다가 검증 필요없는 validation 삭제하기
 */

const Check = {
  bridgeLength(value) {
    if (isNaN(value)) {
      throw new Error(ABOUT.TYPE_NUMBER);
    }

    if (value < 3 || value > 20) {
      throw new Error(ABOUT.NUMBER_RANGE);
    }
  },

  moveFormat(step) {
    if (step !== "U") {
      if (step !== "D") {
        throw new Error(ABOUT.BRIDGE_ELEMENT);
      }
    }
  },

  selectFormat(select) {
    if (select !== "R") {
      if (select !== "Q") {
        throw new Error(ABOUT.SELECT_ELEMENT);
      }
    }
  },
};

module.exports = Check;
