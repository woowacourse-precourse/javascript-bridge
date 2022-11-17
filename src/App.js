const MissionUtils = require('@woowacourse/mission-utils');
const { CONSOLELINE } = require('./utils/Constants');
const InputView = require('./view/InputView');

class App {
  play() {
    MissionUtils.Console.print(CONSOLELINE.START_GAME);
    InputView.readBridgeSize();
  }
}

module.exports = App;

const app = new App();
app.play();