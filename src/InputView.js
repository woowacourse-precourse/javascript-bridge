const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { INPUT_MESSAGE, COMMAND, RESULT, MOVING } = require('./constant/input');
const {
  validateBridgeSize,
  validateInputBridgeMoving,
  validateInputRestart,
} = require('./errorHandling');
const { determineGameRestart } = require('./utils/validate');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readGameStart() {
    Console.print(INPUT_MESSAGE.game_start);
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGE.bridge, (bridgeSize) => {
      if (validateBridgeSize(bridgeSize)) return this.readBridgeSize();
      const bridge = BridgeMaker.makeBridge(
        bridgeSize,
        BridgeRandomNumberGenerator.generate
      );
      const bridgeGame = new BridgeGame(
        bridge,
        MOVING.initialLists,
        MOVING.attempts
      );
      this.readMoving(bridgeGame, bridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame, brigeSize) {
    Console.readLine(INPUT_MESSAGE.moving, (direction) => {
      if (validateInputBridgeMoving(direction)) {
        return this.readMoving(bridgeGame);
      }
      const movingLists = bridgeGame.move(direction);
      OutputView.printMap(movingLists);
      if (determineGameRestart(movingLists))
        return this.readGameCommand(bridgeGame, brigeSize);
      if (movingLists[0].length === brigeSize.length)
        return OutputView.printResult(RESULT.success, bridgeGame);
      return this.readMoving(bridgeGame, brigeSize);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame, brigeSize) {
    Console.readLine(INPUT_MESSAGE.restart, (isRestart) => {
      if (validateInputRestart(isRestart)) {
        this.readGameCommand(bridgeGame);
      }
      if (isRestart === COMMAND.restart) {
        bridgeGame.retry();
        return this.readMoving(bridgeGame, brigeSize);
      }
      if (isRestart === COMMAND.end) {
        OutputView.printResult(RESULT.fail, bridgeGame);
      }
    });
  },
};

module.exports = InputView;
