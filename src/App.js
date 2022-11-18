const GameManager = require('./controller/GameManager');

class App {
  play() {
    const gameManager = new GameManager();
    gameManager.execute();
  }
}

module.exports = App;
