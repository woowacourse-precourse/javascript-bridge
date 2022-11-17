const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const Validation = require('./Validation');

class App {
  constructor() {
    this.bridgeGame = null;
  }

  play() {
    Console.print('다리 건너기 게임을 시작합니다.\n');

    this.requestBridgeSize();
  }

  requestBridgeSize() {
    InputView.readBridgeSize((size) => {
      const { errorMsg } = Validation.checkBridgeSize(size);
      if (errorMsg) {
        Console.print(errorMsg);
        return this.requestBridgeSize();
      }

      const bridge = BridgeMaker.makeBridge(Number(size), generate);
      this.bridgeGame = new BridgeGame(bridge);

      this.requestDirection();
    });
  }

  requestDirection() {
    InputView.readMoving((direction) => {
      const { errorMsg } = Validation.checkDirection(direction);
      if (errorMsg) {
        Console.print(errorMsg);
        return this.requestDirection();
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
