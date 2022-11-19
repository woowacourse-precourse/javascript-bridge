const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {
  }

  play() {
    OutputView.printMessage("다리 건너기 게임을 시작합니다.");
    InputView.readBridgeSize();
  }
}

module.exports = App;

new App().play();