const BridgeGame = require("./BridgeGame");

class App {
  play() {
    new BridgeGame().play();
  }
}

const app = new App();
app.play();

module.exports = App;
