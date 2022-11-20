const MissionUtils = require('@woowacourse/mission-utils');
const InterfaceView = require('./InterFaceView');

const { Console } = MissionUtils;

const InputView = class extends InterfaceView {
  readLine(query, callback) {
    Console.readLine(query, callback);
  }
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(query, callback) {
    throw new Error('메서드 구현 요망');
  }

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(query, callback) {
    throw new Error('메서드 구현 요망');
  }

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    throw new Error('메서드 구현 요망');
  }
};

module.exports = InputView;
