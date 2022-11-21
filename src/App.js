const GameManager = require('./controller/GameManager');

class App {
  play() {
    new GameManager();
  }
}

module.exports = App;
