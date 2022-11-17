const GameController = require('./controller/GameController');

class App {
  play() {
    this.game = new GameController();
    this.game.start();
  }
}

module.exports = App;
