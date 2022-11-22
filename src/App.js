const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  constructor() {

  }

  play() {
    OutputView.printGameStart();
    this.createBridge();
  }

  createBridge() {
    InputView.readBridgeSize();
  }
}
const app = new App();
app.play();

module.exports = App;
