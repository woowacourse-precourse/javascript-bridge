const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const { REGEX } = require("./constant");

class App {
  #bridgeGame;

  play() {
    this.#bridgeGame = new BridgeGame();
    this.controller();
  }

  controller() {
    switch (this.#bridgeGame.getStatus()) {
      case "start":
        OutputView.printStart();
        InputView.readBridgeSize(this.readBridgeSizeCallback);
        break;
      case "move":
        InputView.readMoving(this.readMovingCallback);
        break;
      case "retry":
        InputView.readGameCommand(this.readGameCommandCallback);
        break;
      case "end":
        OutputView.printResult(this.#bridgeGame);
    }
  }
}

module.exports = App;
