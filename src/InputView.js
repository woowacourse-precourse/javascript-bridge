/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');

const InputView = {
  bridgeGame: new BridgeGame(),

  readBridgeSize() {
    Console.readLine(Messages.INPUT_BRIDGE_SIZE, (bridgeSize) => {
      this.validateBridgeSize(bridgeSize);
      bridgeSize = Number(bridgeSize);

      this.bridgeMaker(bridgeSize);
    });
  },

  validateBridgeSize(bridgeSize) {
    if (!(bridgeSize >= 3 && bridgeSize <= 20)) throw new Error(Messages.BRIDGE_SIZE_ERROR);
  },

  bridgeMaker(bridgeSize) {
    Console.print('');
    const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);

    this.readMoving(bridge);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    Console.readLine(Messages.INPUT_MOVING, (upOrDown) => {
      this.validateMoving(upOrDown);
      const round = this.bridgeGame.move();

      this.readMovingOrGameCommand(bridge, round, upOrDown);
    });
  },

  validateMoving(upOrDown) {
    if (upOrDown !== 'U' && upOrDown !== 'D') throw new Error(Messages.MOVING_ERROR);
  },

  readMovingOrGameCommand(bridge, round, upOrDown) {
    const hasCorrect = OutputView.printMap(bridge[round - 1], upOrDown);

    if (!hasCorrect) this.readGameCommand(bridge);
    if (round === bridge.length) {
      const totalCount = this.bridgeGame.countTry();
      OutputView.printResult(totalCount, hasCorrect);
    } else this.readMoving(bridge);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge) {
    Console.readLine(Messages.INPUT_RESTART_OR_END, (restartOrQuit) => {
      this.validateGameCommand(restartOrQuit);
      const totalCount = this.bridgeGame.countTry();
      this.restartOrQuit(bridge, restartOrQuit, totalCount);
    });
  },

  validateGameCommand(restartOrQuit) {
    if (restartOrQuit !== 'R' && restartOrQuit !== 'Q')
      throw new Error(Messages.GAME_COMMAND_ERROR);
  },

  restartOrQuit(bridge, restartOrQuit, totalCount) {
    if (restartOrQuit === 'R') {
      this.bridgeGame.retry();
      OutputView.up = [];
      OutputView.down = [];

      this.readMoving(bridge);
    } else if (restartOrQuit === 'Q') OutputView.printResult(totalCount);
  },
};

module.exports = InputView;
