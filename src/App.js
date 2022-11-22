const InputView = require('./InputView');
const { print } = require('./Utils');

class App {
  play() {
    print('다리 건너기 게임을 시작합니다.\n');

    try {
      InputView.readBridgeSize();
    } catch (e) {
      print(e);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
