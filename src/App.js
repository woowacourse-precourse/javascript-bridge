const GameInfo = require("./GameInfo");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {
    GameInfo.numberOfPlayGames = 0;
    GameInfo.gameResult = "실패";
  }

  play() {
    OutputView.printMessage("다리 건너기 게임을 시작합니다.");
    InputView.readBridgeSize();
  }
}

module.exports = App;

new App().play();