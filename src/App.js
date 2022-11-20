const BridgeGame = require("./BridgeGame");

class App {
  play() {
    new BridgeGame().start();
  }
}

const app = new App();
app.play();

module.exports = App;
