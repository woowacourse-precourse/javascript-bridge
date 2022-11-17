const InputView = require("./InputView");
const OutputView = require("./OutputView");

// 게임을 진행시키는 컨트롤러
class GameController {
  constructor() {
    // this.inputView = new InputView();
  }
  play() {
    // 게임 최초 시작
    OutputView.printGameStart();
    this.createBridge();
  }
  createBridge() {
    InputView.readBridgeSize();
  }
}

module.exports = GameController;
