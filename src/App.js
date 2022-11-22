const BridgeHq = require('./controller/BridgeHq');

class App {
  #gameHq;

  constructor() {
    this.#gameHq = new BridgeHq();
  }

  play() {
    this.#gameHq.startGame();
  }
}

const app = new App();
app.play();
module.exports = App;
