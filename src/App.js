const Intercessor = require("./Intercessor");

class App {

  play() {
    Intercessor.startGame();
    const bridge = Intercessor.bridgeMake();
    if(!bridge) return;
    let count = 0;
    while(1){
      Intercessor.matchMove(bridge);
      count++;
      if(Intercessor.checkResult()) break;
    }
    Intercessor.printResult(count);
  }
}

module.exports = App;
