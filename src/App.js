const MissionUtils = require("@woowacourse/mission-utils");
// const Tempo = require("./Tempo");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const Message = require("./Message");
const OutputView = require("./OutputView");
// const BridgeGame = require("./BridgeGame");

class App {
  play() {
    OutputView.printGameStart(Message.GAME_START);
    InputView.readBridgeSize();
    // let bridgeArray = BridgeMaker.makeBridge(this.bridgeSize, BridgeRandomNumberGenerator.generate);
    // MissionUtils.Console.print(bridgeArray);

    // let bridgeArray = InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
