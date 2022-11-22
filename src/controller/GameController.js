const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeGame = require('../model/BridgeGame');
const { BRIDGE_CONSTANTS } = require('../constant/GameConstants');

class GameController {
  #inputView = InputView;
  #outputView = OutputView;
  #game = new BridgeGame();

  start() {
    this.#outputView.printStartMessage();
    this.makeBridge();
  }

  makeBridge() {
    const onDeliverySizeInputted = (brigeSize) => {
      const bridge = BridgeMaker.makeBridge(brigeSize, BridgeRandomNumberGenerator.generate);
      this.#game.setBridge(bridge);
      const START_INDEX = 0;
      this.crossBridge(START_INDEX);
    };

    this.#inputView.readBridgeSize(onDeliverySizeInputted);
  }

  crossBridge(index) {
    const onDeliveryMoving = (moving) => {
      const IS_CORRECT_MOVE = this.#game.move(moving, index);
      this.#outputView.printMap(this.#game.getMaps());
      this.resultOfCrossing(IS_CORRECT_MOVE, index);
    };

    this.#inputView.readMoving(onDeliveryMoving);
  }

  resultOfCrossing(IS_CORRECT_MOVE, index) {
    if (IS_CORRECT_MOVE) {
      this.nextAction(index);
      return;
    }

    this.gameOver();
  }

  nextAction(index) {
    if (index === this.#game.getBridgeLength() - 1) {
      this.finalGameResult(true);
      return;
    }

    this.crossBridge(index + 1);
  }

  gameOver() {
    const onDeliveryCommand = (command) => {
      this.retryOrQuit(command);
    };

    this.#inputView.readGameCommand(onDeliveryCommand);
  }

  retryOrQuit(command) {
    if (command === BRIDGE_CONSTANTS.retry) {
      this.retryGame();
      return;
    }

    this.finalGameResult(false);
  }

  retryGame() {
    this.#game.retry();
    const START_INDEX = 0;
    this.crossBridge(START_INDEX);
  }

  finalGameResult(IS_SUCCESS) {
    const maps = this.#game.getMaps();
    const totalAttempts = this.#game.getNumberOfAttempts();
    this.#outputView.printResult(maps, IS_SUCCESS, totalAttempts);
  }
}

module.exports = GameController;
