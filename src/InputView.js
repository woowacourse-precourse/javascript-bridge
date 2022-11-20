const { Console } = require('@woowacourse/mission-utils');
const BridgeGameController = require('./BridgeGameController');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (inputValue) => {
      this.bridgeSize = inputValue;
      BridgeGameController.getSize(inputValue);
      this.movingController();
    });
  },

  movingController() {
    this.index = 0;
    this.readMoving();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      (inputValue) => {
        this.isPass = BridgeGameController.getMoving(inputValue, this.index);
        if (this.isPass && this.index < this.bridgeSize - 1) {
          this.readMoving();
          this.index += 1;
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
