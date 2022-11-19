const Intercessor = require("./Intercessor");

class App {

  play() {
    Intercessor.startGame();
    const bridge = Intercessor.bridgeMake();
    if(!bridge) return;
    const win = Intercessor.matchMove(bridge);
    
  }
}

module.exports = App;
