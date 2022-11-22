const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");

class App {
  play() {
    InputView.readBridgeSize();
    InputView.readMoving();
    InputView.readGameCommand();
  }
}
const app = new App();
app.play();
module.exports = App;
