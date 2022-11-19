const BridgeGame = require("./BridgeGame");
class App {
  play() {
    new BridgeGame().play();
  }
}

module.exports = App;
