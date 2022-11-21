const GameManager = require('./GameManager');

class App {
  play() {
    let GM = new GameManager();
    GM.startGame();
  }
}

module.exports = App;
