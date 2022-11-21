/**
 * 에러 상황에 알맞는 문구를 출력하고 다음 동작 함수를 호출한다.
 */
const { readBridgeSize, readMoving, readGameCommand } = require("./InputView");
const { BRIDGE_ERROR } = require("./constant/ErrorMessage");
const ErrorHandler = {
  /**
   * 다리 길이에 대한 입력이 잘못되었을 때 에러 문구를 출력하고 다시 입력받도록 한다.
   */
  bridgeSize() {
    throw new Error(BRIDGE_ERROR);
    readBridgeSize();
  },
};

module.exports = ErrorHandler;
