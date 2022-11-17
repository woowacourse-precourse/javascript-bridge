const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const Validation = require('./Validation');

class App {
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

      BridgeMaker.makeBridge(Number(size), generate);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
