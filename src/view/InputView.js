const { Console } = require('@woowacourse/mission-utils');
const Messages = require('../Messages');
const Constants = require('../Constants');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeGame = require('../BridgeGame');
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
    const START = 3;
    const END = 20;

    if (!(bridgeSize >= START && bridgeSize <= END)) throw new Error(Messages.BRIDGE_SIZE_ERROR);
  },

  bridgeMaker(bridgeSize) {
    return BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  },

  readMoving(bridge) {
    this.wrappingInput(Messages.INPUT_MOVING, (upOrDown) => {
      this.validateMoving(upOrDown);
      const round = this.bridgeGame.move();

      this.proceedRound(bridge, round, upOrDown);
    });
  },

  validateMoving(upOrDown) {
    if (upOrDown !== Constants.UP && upOrDown !== Constants.DOWN) {
      throw new Error(Messages.MOVING_ERROR);
    }
  },

  proceedRound(bridge, round, upOrDown) {
    const [up, down, hasCorrect] = this.bridgeGame.makeMap(bridge[round - 1], upOrDown);
    OutputView.printMap(up, down);

    if (!hasCorrect) this.readGameCommand(bridge);
    else if (round === bridge.length && hasCorrect) {
      const totalTry = this.bridgeGame.countTry();
      OutputView.printResult(totalTry, hasCorrect, [up, down]);
    } else this.readMoving(bridge);
  },

  readGameCommand(bridge) {
    this.wrappingInput(Messages.INPUT_RETRY_OR_END, (retryOrQuit) => {
      this.validateGameCommand(retryOrQuit);

      this.retryOrQuit(bridge, retryOrQuit);
    });
  },

  validateGameCommand(retryOrQuit) {
    if (retryOrQuit !== Constants.RETRY && retryOrQuit !== Constants.QUIT) {
      throw new Error(Messages.GAME_COMMAND_ERROR);
    }
  },

  retryOrQuit(bridge, retryOrQuit) {
    const totalTry = this.bridgeGame.countTry();

    if (retryOrQuit === Constants.RETRY) {
      this.bridgeGame.retry();
      this.readMoving(bridge);
    } else OutputView.printResult(totalTry, false, this.bridgeGame.getMap());
  },
};

module.exports = InputView;
