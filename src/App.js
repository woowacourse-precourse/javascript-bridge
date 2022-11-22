const GamePlaying = require("./GamePlaying");

class App {
  playing(bridge) {
    let result = false;
    let count = 0;
    while (true) {
      result = GamePlaying.BridgeMove(bridge);
      count++;
      if (!GamePlaying.requestGame(result)) {
        break;
      }
    }
    return [result, count];
  }

  bridgeCrate() {
    const bridge = GamePlaying.BridgeMaker();
    return bridge;
  }

  play() {
    GamePlaying.gameStartPrint();
    const bridge = this.bridgeCrate();
    if (!bridge) return;
    let [result, count] = this.playing(bridge);
    GamePlaying.gameResultPrint(count, result);
  }
}

module.exports = App;
