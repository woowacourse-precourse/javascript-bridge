const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeMaker = require("./BridgeMaker");

class App {
  constructor() {
    this.inputView = InputView;
    this.outputView = OutputView;
    this.bridgeMaker = BridgeMaker;
  }

  play() {
    this.outputView.print("다리 건너기 게임을 시작합니다.");
    this.inputView.readBridgeSize(
      this.bridgeMaker.makeBridge.bind(this.bridgeMaker),
      "다리의 길이를 입력해주세요. "
    );
  }
}

module.exports = App;
