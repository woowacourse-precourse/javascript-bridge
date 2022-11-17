const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { PRINT_MESSAGE } = require("./constant/Constant");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");

class App {
  #size;
  #bridge;
  #moving;

  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.print(PRINT_MESSAGE.GAME_START);

    InputView.readBridgeSize((size) => this.getBridgeSize(size));
  }

  getBridgeSize(size) {
    this.#size = Number(size);
    this.#moving = [];

    MissionUtils.Console.print("");
    this.getBridge();
    this.selectMoving();
  }

  getBridge() {
    this.#bridge = BridgeMaker.makeBridge(
      this.#size,
      BridgeRandomNumberGenerator
    );
  }

  selectMoving() {
    InputView.readMoving((moving) => this.getMoving(moving));
  }

  getMoving(moving) {
    this.#moving.push(moving);

    const bridgeGame = new BridgeGame();
    let response = bridgeGame.move(this.#moving, this.#bridge);
    response === true ? this.selectMoving() : this.askRestart();
  }

  askRestart() {}
}

module.exports = App;

const app = new App();
app.play();
