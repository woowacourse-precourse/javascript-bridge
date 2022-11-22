const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { START_GAME_TITLE } = require("./Constant");
const InputView = require("./InputView");

class App {
  #gameManager;
  constructor() {
    this.#gameManager = new BridgeGame();
  }
  play() {
    MissionUtils.Console.print(START_GAME_TITLE);
    InputView.readBridgeSize(this.#gameManager);
  }
}

module.exports = App;