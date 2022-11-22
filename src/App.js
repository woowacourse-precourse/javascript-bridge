const GameManager = require('./GameManager');

class App {
  #GameManager;

  constructor(){
    this.#GameManager = new GameManager();
  }
  Start() {
    this.#GameManager.startGame();
  }
  play() {
    this.Start();
  }
}

module.exports = App;
