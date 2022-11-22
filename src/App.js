const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { COMMAND, BRIDGE, RESULT } = require('./constants');

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
    this.init();
  }

  init() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.#makeBridge.bind(this));
  }

  play() {
    InputView.readMoving(this.#movePlayer.bind(this));
  }

  #makeBridge(size) {
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);
    this.bridgeGame.saveBridge(bridge);
  }

  #movePlayer(moving) {
    const crossResult = this.bridgeGame.move(moving);
    this.#printMap();

    if (crossResult === BRIDGE.CROSS) {
      this.#success();
      return;
    }

    this.#fail();
  }

  #printMap() {
    const map = this.bridgeGame.getMap();
    OutputView.printMap(map);
  }

  #success() {
    if (this.bridgeGame.isArrived()) {
      this.quit(RESULT.SUCCESS);
    }

    this.play();
  }

  #fail() {
    InputView.readGameCommand(this.#retryOrQuit.bind(this));
  }

  #retryOrQuit(command) {
    if (command === COMMAND.RETRY) {
      this.bridgeGame.retry();
      this.play();
      return;
    }

    if (command === COMMAND.QUIT) {
      this.quit(RESULT.FAIL);
    }
  }

  quit(gameResult) {
    const attemptsNum = this.bridgeGame.getAttemptsNum();
    OutputView.printResult(gameResult, attemptsNum);
  }
}

module.exports = App;
