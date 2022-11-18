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
}

module.exports = App;
