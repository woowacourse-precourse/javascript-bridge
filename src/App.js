const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {

    OutputView.print('다리 건너기 게임을 시작합니다.' + '\n');
    InputView.readBridgeSize();
  }
}

new App().play();

module.exports = App;
