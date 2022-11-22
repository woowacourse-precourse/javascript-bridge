const GameManager = require('./GameManager');

class App {
  play() {
    const gameManager = new GameManager();
    gameManager.startGame();
  }
}

module.exports = App;
