const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { PRINT_MESSAGE } = require("./constant/Constant");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");

class App {
  #size;
  #moving;
  #bridge;

  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.print(PRINT_MESSAGE.GAME_START);

    InputView.readBridgeSize((size) => this.getBridgeSize(size));
  }

  getBridgeSize(size) {
    this.#size = Number(size);

    this.getBridge();

    InputView.readMoving((moving) => this.getMoving(moving));
  }
  getBridge() {
    this.#bridge = BridgeMaker.makeBridge(
      this.#size,
      BridgeRandomNumberGenerator
    );
  }

  getMoving(moving) {
    this.#moving = moving;
  }
}

module.exports = App;

const app = new App();
app.play();
