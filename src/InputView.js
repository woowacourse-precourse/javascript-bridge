const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { INPUT_MESSAGES } = require('./constant/message');
const { printResult } = require('./OutputView');
const Validator = require('./Validator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGES.bridge_length, (bridgeLength) => {
      const bridge = BridgeMaker.makeBridge(bridgeLength, generate);
      console.log(bridge);
      const game = new BridgeGame(bridge);

      this.readMoving(game);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(game) {
    Console.readLine(INPUT_MESSAGES.move, (direction) => {
      BridgeGame.process(game, direction);
      if (game.isEndOfBridge()) {
        printResult(game);
        Console.close();
      } else this.readMoving(game);

      this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(INPUT_MESSAGES.retry, (input) => {
      console.log(input);
      if (input === 'R') {
        const game = new BridgeGame();
        this.readMoving(game);
      } else Console.close();
    });
  },
};

module.exports = InputView;
