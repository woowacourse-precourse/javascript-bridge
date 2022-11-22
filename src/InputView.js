const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("./constants/message");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  game: null,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.BRIDGE_LENGTH, (bridgeLength) => {
      this.game.startGame(bridgeLength);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MESSAGE.MOVE, (direction) => {
      this.game.move(direction);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(INPUT_MESSAGE.RETRY, (isRetry) => {
      this.game.retry(isRetry);
    });
  },
};

module.exports = InputView;
