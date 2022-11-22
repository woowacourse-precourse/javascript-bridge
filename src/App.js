const GameController = require('./controller/GameController');

class App {
  constructor() {
    this.game = new GameController();
  }

  play() {
    this.game.start();
  }
}

module.exports = App;
