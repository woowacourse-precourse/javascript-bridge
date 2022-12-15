const BridgeController = require('./BridgeController');

class App {
  play() {
    const bridgeController = new BridgeController();
    bridgeController.init('다리 건너기 게임을 시작 합니다.');
  }
}

const app = new App();
app.play();
