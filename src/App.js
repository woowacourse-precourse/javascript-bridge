const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGameController = require("./BridgeGameController");

class App {
  #bridgeGameControl;

  play() {
    this.#bridgeGameControl = new BridgeGameController(); // 게임 컨트롤러 생성
    OutputView.printStart(); // 게임 시작 문구 출력
    InputView.readBridgeSize(); // 다리 길이 입력 받기
  }
}

let app = new App();
app.play();

module.exports = App;
