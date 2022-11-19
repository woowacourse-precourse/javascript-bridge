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
      OutputView.printResult(totalCount);
    } else this.readMoving(bridge);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge) {
    Console.readLine(Messages.INPUT_RESTART_OR_END, (restartOrEnd) => {
      this.validateGameCommand(restartOrEnd);
      this.restartOrQuit(bridge, restartOrEnd);
    });
  },

  validateGameCommand(restartOrEnd) {
    if (restartOrEnd !== 'R' && restartOrEnd !== 'Q') throw new Error(Messages.GAME_COMMAND_ERROR);
  },

  restartOrQuit(bridge, restartOrEnd) {
    const totalCount = this.bridgeGame.countTry();
    if (restartOrEnd === 'R') {
      this.bridgeGame.retry();
      this.readMoving(bridge);
    }
  },
};

module.exports = InputView;
