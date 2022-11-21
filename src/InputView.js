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

  wrappingInput(message, callback) {
    Console.readLine(
      message,
      this.wrappingLogic(callback, () => this.wrappingInput(message, callback))
    );
  },

  wrappingLogic(logicFunction, errorFunction) {
    return (input) => {
      try {
        logicFunction(input);
      } catch (e) {
        Console.print(e.message);
        errorFunction(e);
      }
    };
  },

  readBridgeSize() {
    this.wrappingInput(Messages.INPUT_BRIDGE_SIZE, (bridgeSize) => {
      this.validateBridgeSize(bridgeSize);
      bridgeSize = Number(bridgeSize);

      Console.print('');

      this.readMoving(this.bridgeMaker(bridgeSize));
    });
  },

  validateBridgeSize(bridgeSize) {
    if (!(bridgeSize >= 3 && bridgeSize <= 20)) throw new Error(Messages.BRIDGE_SIZE_ERROR);
  },

  bridgeMaker(bridgeSize) {
    return BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge) {
    this.wrappingInput(Messages.INPUT_MOVING, (upOrDown) => {
      this.validateMoving(upOrDown);
      const round = this.bridgeGame.move();

      this.proceedRound(bridge, round, upOrDown);
    });
  },

  validateMoving(upOrDown) {
    if (upOrDown !== 'U' && upOrDown !== 'D') throw new Error(Messages.MOVING_ERROR);
  },

  proceedRound(bridge, round, upOrDown) {
    const [up, down, hasCorrect] = this.bridgeGame.makeMap(bridge[round - 1], upOrDown);
    OutputView.printMap(up, down);

    if (!hasCorrect) this.readGameCommand(bridge);
    else if (round === bridge.length && hasCorrect) {
      const totalCount = this.bridgeGame.countTry();
      OutputView.printResult(totalCount, hasCorrect, [up, down]);
    } else this.readMoving(bridge);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge) {
    this.wrappingInput(Messages.INPUT_RESTART_OR_END, (restartOrQuit) => {
      this.validateGameCommand(restartOrQuit);
      this.restartOrQuit(bridge, restartOrQuit);
    });
  },

  validateGameCommand(restartOrQuit) {
    if (restartOrQuit !== 'R' && restartOrQuit !== 'Q')
      throw new Error(Messages.GAME_COMMAND_ERROR);
  },

  restartOrQuit(bridge, restartOrQuit) {
    const totalCount = this.bridgeGame.countTry();

    if (restartOrQuit === 'R') {
      this.bridgeGame.retry();
      this.readMoving(bridge);
    } else if (restartOrQuit === 'Q')
      OutputView.printResult(totalCount, false, this.bridgeGame.getMap());
  },
};

module.exports = InputView;
