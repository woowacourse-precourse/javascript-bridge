const InputView = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { Console } = require("@woowacourse/mission-utils");

class App {
  play() {
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
