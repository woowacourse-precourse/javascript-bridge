const BridgeGame = require("./controller/BridgeGame");

class App {
  constructor() {
  }
  play() {
    new BridgeGame();
  }
}

const app = new App();
app.play();

module.exports = App;
