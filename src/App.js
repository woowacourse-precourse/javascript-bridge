const GameController = require('./Controllers/GameController');

class App {
  constructor() {
    this.GameController = new GameController();
  }

  play() {
    this.GameController.startGame();
  }
}
module.exports = App;
