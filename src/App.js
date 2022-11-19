const Game = require("./Model/Game");

class App {
  constructor() {
    this.game = new Game();
  }
  play() {
    this.createGame();
  }

  createGame() {
    this.game.gameStartPoint();
  }
}

module.exports = App;
