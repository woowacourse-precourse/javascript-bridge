const BridgeGame = require("./BridgeGame");

class App {
  play() {
    new BridgeGame().gameStart();
  }
}

module.exports = App;
