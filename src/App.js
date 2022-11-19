const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');

class App {
  play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
    InputView.readBridgeSize();
  }
}
const app = new App();
app.play();

module.exports = App;
