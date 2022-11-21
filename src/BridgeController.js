const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { BRIDGE_DETAIL } = require("./constant/Constant");

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
      this.printWin.bind(this)
    );
  }

  getRetryCommand() {
    InputView.readGameCommand(
      this.retrying.bind(this),
      this.getUpDownCommand.bind(this),
      this.printGameEnd.bind(this)
    );
  }

  moving(userInput) {
    const result = this.bridgeGame.move(userInput);
    this.printMap.bind(this)(this.bridgeGame.printArr);
    return result;
  }

  printWin() {
    this.printMap.bind(this)(this.bridgeGame.printArr);
    OutputView.printFinalResult();
    OutputView.printResult(this.tries, BRIDGE_DETAIL.SUCCESS);
    OutputView.gameEnd();
  }

  retrying(userInput) {
    const result = this.bridgeGame.retry(userInput);
    this.tries += 1;
    return result;
  }

  printMap(bridgeArr) {
    OutputView.printMap(bridgeArr);
  }

  printGameEnd() {
    this.printMap.bind(this)(this.bridgeGame.printArr);
    OutputView.printFinalResult();
    OutputView.printResult(this.tries, BRIDGE_DETAIL.FAIL);
    OutputView.gameEnd();
  }
}

module.exports = BridgeController;
