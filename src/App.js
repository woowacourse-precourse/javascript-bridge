const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");

class App {
  play() {
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
