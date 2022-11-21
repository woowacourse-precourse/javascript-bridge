const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const { validateReadBridgeSize, validateReadMoving, validateReadGameCommand } = require("./Validator");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((bridgeSize) => {
      if (!validateReadBridgeSize(bridgeSize)) this.inputBridgeSize();
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
      this.inputMoving();
    });
  }

  inputMoving() {
    InputView.readMoving((moveKey) => {
      if (!validateReadMoving(moveKey)) this.inputMoving();
      this.inputGameCommand();
    });
  }

  inputGameCommand() {
    InputView.readGameCommand((retryKey) => {
      if (!validateReadGameCommand(retryKey)) this.inputGameCommand();
    });
  }
}

const app = new App();
app.play();

module.exports = App;
