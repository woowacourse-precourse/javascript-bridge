const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeGame = require("./BridgeGame");
const Validator = require("./Validator.js");

class App {
  #game;
  constructor() {
    OutputView.printGameStart();
  }
  play() {
    InputView.readBridgeSize.bind(this)(this.createBridge);
  }
  createBridge(size) {
    Validator.checkSizeInput(size);
    this.#game = new BridgeGame(size);
    this.askMoving();
  }
  askMoving() {
    InputView.readMoving.bind(this)(this.handleMoving);
  }
  handleMoving(direction) {
    Validator.checkDirectionInput(direction);
    this.#game.move(direction);
    OutputView.printMap(this.#game.stepObj);
    if (this.#game.isCleared) this.showGameResult();
    else if (this.#game.isSuccess) this.askMoving();
    else throw new Error("게임 실패");
  }
  showGameResult() {}
}

const app = new App();
app.play();

module.exports = App;
