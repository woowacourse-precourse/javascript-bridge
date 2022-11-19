const GameController = require('./GameController');

class App {
  play() {
    const gameController = new GameController;
    gameController.startGame();
  }
}

module.exports = App;
