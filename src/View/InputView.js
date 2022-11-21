const { Console } = require("@woowacourse/mission-utils");
const Message = require("../utils/Message");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {function(): void} callback 사이즈를 입력 받고 로직을 수행하고 객체를 생성하는 콜백 함수
   */
  readBridgeSize(callback) {
    Console.readLine(Message.ASK_BRIDGE_SIZE, callback);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {function(): void} callback 사용자의 입력을 받아 로직을 수행해 다리 위를 이동하는 콜백 함수
   */
  readMoving(callback) {
    Console.readLine(Message.ASK_UPDOWN, callback);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   * @param {function(): void} callback 사용자의 입력을 받아 재시작 혹은 종료 로직을 수행하는 콜백 함수
   */
  readGameCommand(callback) {
    Console.readLine(Message.ASK_REPLAY_CLOSE, callback);
  },
};

module.exports = InputView;
