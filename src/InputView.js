const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  gameStatus: {
    bridge: [],
    currentPosition: 0,
    liveOrDie: true,
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', bridgeSize => {
      this.gameStatus.bridge = BridgeMaker.makeBridge(
        bridgeSize,
        BridgeRandomNumberGenerator,
      );
      console.log(this.gameStatus.bridge);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      direction => {
        this.gameStatus.currentPosition += 1;
        const bridgeGame = new BridgeGame();
        this.gameStatus.liveOrDie = bridgeGame.move(direction, this.gameStatus);
        OutputView.printMap(this.gameStatus, direction);
        this.readMoving();
      },
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
