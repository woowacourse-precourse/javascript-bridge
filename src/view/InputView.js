const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require('../bridge/BridgeGame.js');
const OutputView = require('./OutputView.js');
const CONSTANT = require('../constants/Constant.js');

const bridge = new BridgeGame();

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('\n다리의 길이를 입력해주세요.\n', answer => {
      bridge.setBridge(answer);
      Console.print('');
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', answer => {
      bridge.move(answer);
      OutputView.printMap(bridge);

      if (bridge.detectWinner()) OutputView.printResult(bridge);
      else if (bridge.isPlaying) this.readMoving();
      else this.readGameCommand();
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', answer => {
      const { RESTART } = CONSTANT.RESTART;

      if (answer === RESTART) {
        bridge.retry();
        this.readMoving();
      }
      else OutputView.printResult(bridge);
    })
  },
};

module.exports = InputView;
