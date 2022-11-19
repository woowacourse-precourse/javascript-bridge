const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { MissionUtils } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.game = null;
  }

  play() { }

  proceedAfterGettingBridgeSize(size) {
    const PATH = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.game = new BridgeGame(PATH);

    InputView.readMoving(this.proceedAfterMove);
  }

  proceedAfterMove(direction) {
    this.game.move(direction);
    OutputView.printMap(this.game);

    (this.game.isGoingCorrect()) ? this.handleCorrectCase() : InputView.readGameCommand(this.handleGameCommand);
  }

  handleCorrectCase() {
    (this.game.crossedAll()) ? this.finish() : InputView.readMoving(this.proceedAfterMove);
  }

  handleGameCommand(command) {
    switch (command) {
      case "R":
        this.game.retry();
        InputView.readMoving(this.proceedAfterMove);
        break;

      case "Q":
        this.finish();
        break;
    }
  }

  finish() {
    OutputView.printResult(this.game);
    MissionUtils.Console.close();
  }
}

module.exports = App;
