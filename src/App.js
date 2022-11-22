const BridgeGame = require('./BridgeGame');

class App {
  // 다리 건너기 게임 실행
  play() {
    const bridgeGame = new BridgeGame();
    bridgeGame.start();
  }
}

module.exports = App;