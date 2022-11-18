const Intercessor = require("./Intercessor");

class App {
  play() {
    Intercessor.startGame();
    const bridge = Intercessor.bridgeMake();
    Intercessor.matchMove(bridge);
  }
}

module.exports = App;
