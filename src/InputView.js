const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGE } = require('./Constant.js');

const { checkBridgeSize, checkMovingInfo, checkRestartOrFail } = require('./ValidityCheck.js');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * 
 * 입력 / 입력 뒤 실행될 함수 / 다음 단계로 넘어가는 코드를 포함하는 객체이다.
 */
const InputView = {
  readBridgeSize(callback) {
    Console.readLine(GAME_MESSAGE.GET_BRIDGE_SIZE, (bridgeSize) => {
      try {
        checkBridgeSize(bridgeSize);
        callback(bridgeSize)
      } catch (e) {
        Console.print(e);
        this.readBridgeSize(callback);
      }
    });
  },

  readMoving(callback) {
    Console.readLine(GAME_MESSAGE.GET_MOVIING_INFO, (movingInfo) => {
      try {
        checkMovingInfo(movingInfo);
        callback(movingInfo);
      } catch(e) {
        Console.print(e);
        this.readMoving(callback);
      }
    });
  },

  readGameCommand(callback) {
    Console.readLine(GAME_MESSAGE.ASK_RESTART_OR_END, (answer) => {
      try {
        checkRestartOrFail(answer);
        callback(answer);
      } catch (e) {
        Console.print(e);
        this.readGameCommand(callback);
      }
    });
  }
};

module.exports = InputView;
