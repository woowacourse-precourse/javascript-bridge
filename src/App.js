const GameController = require("../src/Controller/GameController");
class App {
  constructor() {
    this.GameController = new GameController();
  }

  play() {
    this.GameController.startGame();
  }
}

module.exports = App;
