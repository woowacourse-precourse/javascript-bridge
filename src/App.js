const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
const BridgeMaker = require("./BridgeMaker");
const RandomGenerator = require("./Utils/BridgeRandomNumberGenerator");

class App {
  play() {
    OutputView.printMessage("start"); //게임 시작
    const bridgeSize = InputView.start();
  }
}

module.exports = App;

//구현 후 삭제
const app = new App();
app.play();
