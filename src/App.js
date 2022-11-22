const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Validation = require("./validation/Validation");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

class App {
  constructor() {
    this.bridgeGame = null;
  }

  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize((size) => {
      const { error } = Validation.validateBridgeSize(size);
      if (error) {
        Console.print(error);
        return this.inputBridgeSize();
      }
      const bridge = BridgeMaker.makeBridge(Number(size), generate);
      this.bridgeGame = new BridgeGame(bridge);
      this.inputUpsideDown();
    });
  }

  inputUpsideDown() {
    InputView.readMoving((upsideDown) => {
      const { error } = Validation.validateUpsideDown(upsideDown);
      if (error) {
        Console.log(error);
        return this.inputUpsideDown();
      }
      this.bridgeGame.move(upsideDown);
      OutputView.printMap(this.bridgeGame.getResult());
    });
  }
}

const app = new App();
app.play();

module.exports = App;
