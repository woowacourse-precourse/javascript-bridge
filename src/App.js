const GameManager = require('./GameManager');

class App {
  play() {
    const gameManager = new GameManager();
    gameManager.start();
  }
}

module.exports = App;
