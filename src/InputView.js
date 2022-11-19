const { Console } = require('@woowacourse/mission-utils');
const BridgeController = require('./controller/BridgeController');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('\n다리의 길이를 입력해주세요.\n', (size) => {
      if (!BridgeController.controlBridge(Number(size))) this.readBridgeSize();
      InputView.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (movePosition) => {
      if (!BridgeController.controlMovingFromUser(movePosition)) return this.readMoving();
      if (!BridgeController.controlNextStep()) return this.readGameCommand();
      if (BridgeController.controlSuccess()) return Console.close();
      return this.readMoving();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      (input) => {
        if (!BridgeController.controlGameCommand(input)) return InputView.readGameCommand();
        if (!BridgeController.controlRetryCommand(input)) return Console.close();
        return this.readMoving();
      }
    );
  },
};

module.exports = InputView;
