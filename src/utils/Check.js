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
  bridgeFormat() {},
  // ?
  // 다리 array 개별 타입이 0나 1이 아니면 에러,
  // 길이와 입력 개수가 같은지
  moveFormat() {
    // U나 D가 아닐 경우 -> U나 D만 입력하라고 하기
  },
  selectFormat() {
    //R,Q가 아닌 경우 -> RQ만 입력하라 하기
  },
};

module.exports = Check;
