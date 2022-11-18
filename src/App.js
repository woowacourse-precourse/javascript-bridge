const InputView = require('./InputView');
const { print } = require('./Utils');

class App {
  play() {
    print('다리 건너기 게임을 시작합니다.\n');
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
