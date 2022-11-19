const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");
const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const BridgeGame = require("../Model/BridgeGame");

class GameController {
  constructor() {
    this.BridgeGame;
  }

  startGame() {
    this.greeting();
    InputView.readBridgeSize(this.constructBridgeGameAndSaveAnswerBridge.bind(this));
  }

  greeting() {
    OutputView.printGreeting();
  }

  constructBridgeGameAndSaveAnswerBridge(size) {
    this.constructBridgeGame(size);
    this.createAndSaveAnswerBridge(size);
  }

  constructBridgeGame(size) {
    this.BridgeGame = new BridgeGame(size);
  }

  createAndSaveAnswerBridge(size) {
    this.BridgeGame.answerBridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }
}

module.exports = GameController;
