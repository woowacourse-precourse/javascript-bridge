const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  gameInfo: {
    bridge: [],
    currentPosition: 0,
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', bridgeSize => {
      this.gameInfo.bridge = BridgeMaker.makeBridge(
        bridgeSize,
        BridgeRandomNumberGenerator,
      );
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
        const bridgeGame = new BridgeGame();
        const result = bridgeGame.move(direction, this.gameInfo);
      },
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
