const GameController = require("./GameController");

class App {

  constructor() {
    this.gameController = new GameController();
  }

  play() {
    this.gameController.play();
  }
}

module.exports = App;