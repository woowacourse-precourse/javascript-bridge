const GameController = require('./GameController.js');

class App {
  constructor() {
    this.gameController = new GameController();
  }

  play() {
    this.gameController.play();
  }
}

module.exports = App;
