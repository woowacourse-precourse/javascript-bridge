const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class BridgeController {
  bridge;
  tries = 1;

  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    this.printBridgeGameStart();
  }

  printBridgeGameStart() {
    OutputView.printStart();
    this.getBridge();
  }

  getBridge() {
    InputView.readBridgeSize(
      this.makeBridge.bind(this),
      this.startBridge.bind(this)
    );
  }

  makeBridge(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.bridge = bridge;
    this.bridgeGame = new BridgeGame(bridge);
  }

  startBridge() {
    this.getUpDownCommand.bind(this)();
  }

  getUpDownCommand() {
    InputView.readMoving(
      this.moving.bind(this),
      this.getRetryCommand.bind(this),
      this.printResult.bind(this)
    );
  }

  getRetryCommand() {
    InputView.readGameCommand(
      this.retrying.bind(this),
      this.getUpDownCommand.bind(this),
      this.printResult.bind(this)
    );
  }

  moving(userInput) {
    const result = this.bridgeGame.move(userInput);
    this.printMap.bind(this)(this.bridgeGame.printArr);
    return result;
  }

  retrying(userInput) {
    const result = this.bridgeGame.retry(userInput);
    return result;
  }

  printMap(bridgeArr) {
    OutputView.printMap(bridgeArr);
  }

  printResult(isSuccess) {
    OutputView.printFinalResult();
    this.printMap.bind(this)(this.bridgeGame.printArr);
    OutputView.printResult(this.bridgeGame.tries, isSuccess);
    OutputView.gameEnd();
  }
}

module.exports = BridgeController;
