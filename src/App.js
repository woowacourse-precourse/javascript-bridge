const { Console } = require('@woowacourse/mission-utils');

const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    Console.print('다리 건너기 게임을 시작합니다.');
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize();
  }
}

new App().play();

module.exports = App;
