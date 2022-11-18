/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
//  제공된 InputView 객체를 활용해 구현해야 한다.
//  InputView의 파일 경로는 변경할 수 있다.
//  InputView의 메서드의 인자는 변경할 수 있다.
//  사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

const { Console } = require("@woowacourse/mission-utils");
const { INPUT } = require("./constants");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback) {
    Console.readLine(INPUT.ASK_BRIDGE_SIZE, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback) {
    Console.readLine(INPUT.ASK_MOVEMENT, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback) {
    Console.readLine(INPUT.ASK_RETRY, callback);
  },
};

module.exports = InputView;
