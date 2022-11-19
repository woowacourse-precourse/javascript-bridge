const Intercessor = require("./Intercessor");

class App {

  play() {
    Intercessor.startGame();
    const bridge = Intercessor.bridgeMake();
    if(!bridge) return;
    const game = Intercessor.matchMove(bridge);
    Intercessor.checkResult(game);
  }
}

module.exports = App;
