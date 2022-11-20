const { Console } = require('@woowacourse/mission-utils');

const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
  play() {
    this.startGame();
  }

  startGame() {
    Console.print('다리 건너기 게임을 시작합니다.');
    this.getBridgeSize();
  }

  getBridgeSize() {
    InputView.readBridgeSize(this.createBridge.bind(this));
  }

  createBridge(size) {
    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate,
    );
    this.bridgeGame.setBridge(bridge);
  }
}

const app = new App();
app.play();

module.exports = App;
