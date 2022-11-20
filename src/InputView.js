const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const inputErrorCheck = require('./InputErrorCheck');

const bridgeGame = new BridgeGame();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (bridgeSize) => {
      inputErrorCheck.bridgeSize(bridgeSize);
      bridgeGame.set(bridgeSize);
      // this.gameStatus.bridge = BridgeMaker.makeBridge(bridgeSize, generate);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      (direction) => {
        inputErrorCheck.direction(direction);
        const { nextInputView, nextOutputView, gameStatus } =
          bridgeGame.move(direction);
        if (nextOutputView) OutputView[nextOutputView](gameStatus);
        if (nextInputView) this[nextInputView]();
      },
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      (doOrDie) => {
        const { nextInputView, nextOutputView, gameStatus } =
          bridgeGame.retry(doOrDie);
        if (nextInputView) this[nextInputView]();
        if (nextOutputView) OutputView[nextOutputView](gameStatus);
      },
    );
  },
};

module.exports = InputView;
