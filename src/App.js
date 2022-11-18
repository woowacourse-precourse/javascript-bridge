const BridgeGame = require("./BridgeGame");
const Operator = require("./operator");

class App {
  play() {
    Operator.startGame();
    const bridge = Operator.bridgeMake();
  }
}

module.exports = App;
