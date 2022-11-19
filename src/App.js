const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { Console } = require('@woowacourse/mission-utils');
const { validateBridge, validateMove } = require('./utils/validate');

class App {
  play() {
    Console.print('다리 건너기 게임을 시작합니다.');
    InputView.readBridgeSize(this.getBridgeSizeInput.bind(this));
  }

  getBridgeSizeInput(size) {
    validateBridge(size);
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    InputView.readMoving(this.getMoveInput.bind(this));
  }

  getMoveInput(move) {
    validateMove(move);
  }
}

const app = new App();
app.play();

module.exports = App;
