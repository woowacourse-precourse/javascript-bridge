const GameManager = require('./Controller/GameManager');

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
