const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');

const bridgeGame = new BridgeGame();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (length) => {
      bridgeGame.setBridge(length);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (moving) => {
      bridgeGame.move(moving);
      // TODO: 라운드의 결과 프린트 출력
      if (bridgeGame.isWin()) {
        OutputView.printResult(bridgeGame.isWin(), bridgeGame.tryCount);
      } else if (bridgeGame.isPlaying) {
        this.readMoving();
      } else {
        this.readGameCommand();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (command) => {
      // TODO: validateCommand
      if (command === 'R') {
        bridgeGame.retry();
        this.readMoving();
      } else if (command === 'Q') {
        OutputView.printResult(bridgeGame.isWin(), bridgeGame.tryCount);
      }
    });
  },
};

module.exports = InputView;
