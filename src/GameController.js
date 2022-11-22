const OutputView = require("./OutputView");

class GameController {
  constructor({ game }) {
    this.game = game;
  }

  play() {
    OutputView.printIntro();
  }
}

module.exports = GameController;
