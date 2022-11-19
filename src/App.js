const Intercessor = require("./Intercessor");

class App {

  play() {
    Intercessor.startGame();
    const bridge = Intercessor.bridgeMake();
    if(!bridge) return;
    let count = 0;
    let win = false;
    while(!win){
      win = Intercessor.matchMove(bridge);
      count++;
    }
    Intercessor.printResult(win, count);
  }
}

module.exports = App;
