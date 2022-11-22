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
    this.makeBridge();
  }

  makeBridge() {
    const onDeliverySizeInputted = (brigeSize) => {
      const bridge = BridgeMaker.makeBridge(brigeSize, BridgeRandomNumberGenerator.generate);
      this.game.setBridge(bridge);
      const START_INDEX = 0;
      this.crossBridge(START_INDEX);
    };

    this.inputView.readBridgeSize(onDeliverySizeInputted);
  }

  crossBridge(index) {
    const onDeliveryMoving = (moving) => {
      const CAN_MOVE_NEXT = this.game.move(moving, index);
      this.outputView.printMap(this.game.getMaps());
      this.resultOfCrossing(CAN_MOVE_NEXT, index);
    };

    this.inputView.readMoving(onDeliveryMoving);
  }

  resultOfCrossing(CAN_MOVE_NEXT, index) {
    if (index === this.game.getBridgeLength() - 1) {
      this.finalGameResult(true);
      return;
    }

    if (CAN_MOVE_NEXT) {
      this.crossBridge(index + 1);
      return;
    }

    this.gameOver();
  }

  gameOver() {
    const onDeliveryCommand = (command) => {
      this.retryOrQuit(command);
    };

    this.inputView.readGameCommand(onDeliveryCommand);
  }

  retryOrQuit(command) {
    if (command === BRIDGE_CONSTANTS.retry) {
      this.retryGame();
      return;
    }

    this.finalGameResult(false);
  }

  retryGame() {
    this.game.retry();
    const START_INDEX = 0;
    this.crossBridge(START_INDEX);
  }

  finalGameResult(IS_SUCCESS) {
    const maps = this.game.getMaps();
    const totalAttempts = this.game.getNumberOfAttempts();
    this.outputView.printResult(maps, IS_SUCCESS, totalAttempts);
    this.end();
  }

  end() {
    Console.close();
  }
}

module.exports = GameController;
