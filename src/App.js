const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printMap();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
