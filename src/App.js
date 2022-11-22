const GameController = require('./GameController');

class App {
  play() {
    const gameController = new GameController();
    gameController.load();
  }
}

module.exports = App;
