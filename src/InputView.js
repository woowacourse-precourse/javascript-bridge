const { Console } = require('@woowacourse/mission-utils');
const BridgeRandomNumberGenerator = require('./utils/BridgeRandomNumberGenerator');
const MESSAGES = require('./constants/Messages');

const BridgeMaker = require('./BridgeMaker');
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
    Console.readLine(MESSAGES.INPUT_BRIDGE_LENGTH, (length) => {
      // TODO length validation check
      const bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);
      bridgeGame.setRandomBridge(bridge);

      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(MESSAGES.INPUT_MOVE_BLOCK, (block) => {
      // TODO block validation check
      bridgeGame.setUserBlock(block);
      const formattedBridges = bridgeGame.move();
      OutputView.printMap(formattedBridges);
      if (bridgeGame.isGameOver(formattedBridges)) this.readGameCommand();
      else this.readMoving();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(MESSAGES.INPUT_RETRY, (command) => {
      // TODO command validation check
      if (command === 'Q') Console.close();
      else {
        bridgeGame.retry();
        this.readMoving();
      }
    });
  },
};

module.exports = InputView;
