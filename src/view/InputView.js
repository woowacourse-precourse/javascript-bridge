const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require('../bridge/BridgeGame.js');
const OutputView = require('./OutputView.js');

const bridge = new BridgeGame();

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', answer => {
      bridge.setBridge(answer);
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
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
