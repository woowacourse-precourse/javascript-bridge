const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandom = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const MissionUtils = require("@woowacourse/mission-utils");
const Message = require("./utils/Message");
const Validate = require("./utils/Validate");

class App {
  bridgeGame;

  play() {
    OutputView.printGameStart(Message.ALERT.GAME_START);
    this.inputBridgeSize();
  }
  inputBridgeSize() {
    InputView.readBridgeSize((answer) => {
      try {
        Validate.readBridgeSizeValidate(answer);
        const bridge = BridgeMaker.makeBridge(answer, BridgeRandom.generate);
        this.bridgeGame = new BridgeGame(bridge);
        this.bridgeGame.gameController();
      } catch (e) {
        MissionUtils.Console.print(e);
        this.inputBridgeSize();
      }
    });
  }
}

module.exports = App;
