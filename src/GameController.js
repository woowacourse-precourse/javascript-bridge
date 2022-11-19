const { Console } = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const { BRIDGE_CONSTANTS } = require('./GameConstants');

class GameController {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
    this.game = new BridgeGame();
  }

  start() {
    this.outputView.printStartMessage();
    const onDeliverySizeInputted = (brigeSize) => {
      const bridgeAnswer = BridgeMaker.makeBridge(brigeSize, BridgeRandomNumberGenerator.generate);
      this.game.setBridgeAnswer(bridgeAnswer);
      const START_INDEX = 0;
      this.move(START_INDEX);
    };

    this.inputView.readBridgeSize(onDeliverySizeInputted);
  }

  move(index) {
    const onDeliveryMoving = (moving) => {
      const IS_MOVE = this.game.move(moving, index);
      const maps = this.game.getMaps();
      this.outputView.printMap(maps);
      if (IS_MOVE) {
        this.move(index + 1);
      } else {
        this.retryOrQuit();
      }
    };

    const bridgeAnswerLength = this.game.getBridgeAnswer().length;
    if (index === bridgeAnswerLength) {
      this.successResult();
      return;
    }

    this.inputView.readMoving(onDeliveryMoving);
  }

  successResult() {
    const maps = this.game.getMaps();
    const totalAttempts = this.game.getNumberOfAttempts();
    this.outputView.printResult(maps, true, totalAttempts);
    this.end();
  }

  failureResult() {
    const maps = this.game.getMaps();
    const totalAttempts = this.game.getNumberOfAttempts();
    this.outputView.printResult(maps, false, totalAttempts);
    this.end();
  }

  retryOrQuit() {
    const onDeliveryCommand = (command) => {
      if (command === BRIDGE_CONSTANTS.retry) {
        this.game.retry();
        this.restart();
      } else {
        this.failureResult();
        this.end();
      }
    };

    this.inputView.readGameCommand(onDeliveryCommand);
  }

  restart() {
    const START_INDEX = 0;
    this.move(START_INDEX);
  }

  end() {
    Console.close();
  }
}

module.exports = GameController;
