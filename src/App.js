const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printString("다리 건너기 게임을 시작합니다.\n");
    InputView.readBridgeSize();
  }
}

module.exports = App;
