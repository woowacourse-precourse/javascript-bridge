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
      BridgeGameController.getSize(inputValue);
      this.bridgeSize = Number(inputValue);
      this.movingController();
    });
  },

  movingController() {
    this.index = 0;
    this.tryCount = 1;
    this.readMoving();
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      (inputValue) => {
        this.isPass = BridgeGameController.getMoving(inputValue, this.index);
        this.index += 1;
        this.checkPass();
      }
    );
  },

  checkPass() {
    if (this.isPass && this.index < this.bridgeSize) {
      this.readMoving();
    }
    if (this.isPass === false) this.readGameCommand();
    if (this.index === this.bridgeSize)
      BridgeGameController.outputData(true, true, this.tryCount);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      (retryOrQuit) => {
        this.checkRetry(retryOrQuit);
      }
    );
  },

  checkRetry(retryOrQuit) {
    if (retryOrQuit === 'R') {
      BridgeGameController.getCommand();
      this.tryCount += 1;
      this.index = 0;
      this.readMoving();
    }
    if (retryOrQuit === 'Q')
      BridgeGameController.outputData(true, false, this.tryCount);
  },
};

module.exports = InputView;
