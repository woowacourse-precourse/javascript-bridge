const { Console } = require('@woowacourse/mission-utils');
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
    });
  }
}

const app = new App();
app.play();

module.exports = App;
