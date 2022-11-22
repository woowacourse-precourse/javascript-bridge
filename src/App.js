const InputView = require("./View/InputView");
const OutputView = require("./View/OutputView");
const GameController = require("./Controller/GameController");

class App {
  // play() {
  //   OutputView.printMessage("start");
  //   const bridgeSize = InputView.start();
  // }

  constructor() {
    this.controller = new GameController();
  }

  play() {
    this.controller.startGame();
  }
}

module.exports = App;

//TODO: 구현 후 삭제
const app = new App();
app.play();
