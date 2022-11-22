const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");

class App {
  #gameManager;
  constructor() {
    this.#gameManager = new BridgeGame();
  }
  play() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
    InputView.readBridgeSize(this.#gameManager);
  }
}

module.exports = App;