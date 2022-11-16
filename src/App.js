const MissionUtils = require("@woowacourse/mission-utils");
const { PRINT_MESSAGE } = require("./constant/Constant");
const InputView = require("./InputView");

class App {
  #length;
  #moving;

  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.print(PRINT_MESSAGE.GAME_START);

    InputView.readBridgeSize((size) => this.getBridgeSize(size));
  }

  getBridgeSize(size) {
    this.#length = size;

    InputView.readMoving((moving) => this.getMoving(moving));
  }

  getMoving(moving) {
    this.#moving = moving;
  }
}

module.exports = App;

const app = new App();
app.play();
