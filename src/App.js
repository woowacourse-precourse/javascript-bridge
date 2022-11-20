const GameManager = require('./GameManager');

class App {
  play() {
    const gameManager = new GameManager();
    gameManager.play();
  }
}

module.exports = App;
