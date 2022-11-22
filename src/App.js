const GamePlaying = require("./GamePlaying");

class App {
  play() {
    GamePlaying.gameStartPrint();
    const bridge = GamePlaying.BridgeMaker();
    if (!bridge) return;
    let result = false;
    let count = 0;
    while (1) {
      result = GamePlaying.BridgeMove(bridge);
      count++;
      if (!GamePlaying.requestGame(result)) break;
    }
    GamePlaying.gameResultPrint(count, result);
  }
}

module.exports = App;
