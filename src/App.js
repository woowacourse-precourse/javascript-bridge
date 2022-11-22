const Intercessor = require("./Intercessor");

class App {
  play() {
    Intercessor.startGame();
    const bridge = Intercessor.bridgeMake();
    if(!bridge) return;
    let count = 0;
    let win = false;
    while(1){
      win = Intercessor.matchMove(bridge);
      count++;
      if(!Intercessor.checkRetry(win)) break;
    }
    Intercessor.printResult(count, win);
  }
}

module.exports = App;
