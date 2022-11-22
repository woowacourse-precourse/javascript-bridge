const GameController = require("./Controller/GameController");

class App {
  constructor() {
    this.controller = new GameController();
  }

  play() {
    this.controller.startGame();
  }
}

module.exports = App;
