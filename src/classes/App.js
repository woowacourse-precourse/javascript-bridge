const InputView = require("../InputView");
const OutputView = require("../OutputView");
const BridgeMaker = require("../BridgeMaker");
const RandomGenerator = require("../BridgeRandomNumberGenerator");

class App {
  play() {
    OutputView.printMessage("start"); //게임 시작
    const bridgeSize = InputView.start();
  }
}

module.exports = App;

//구현 완료 후 지우기
const app = new App();
app.play();
