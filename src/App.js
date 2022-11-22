const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./View/InputView");
const Message = require("./Message");
const OutputView = require("./View/OutputView");
const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  bridgeArray;
  userTry = 0;
  play() {
    OutputView.printGameStart(Message.GAME_START);
    this.inputBridgeLength();
  }

  inputBridgeLength() {
    InputView.readBridgeSize(this);
  }

  makingBridge(size) {
    this.bridgeArray = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    InputView.readMoving(this);
  }

  inputUserMove(userChoice) {
    const bridgeGame = new BridgeGame(this.bridgeArray);

    bridgeGame.move(this, userChoice, this.userTry);
  }

  printBridge(ox, upBridge, downBridge) {
    MissionUtils.Console.print(`ox :${ox}, up: ${upBridge}, down: ${downBridge}`);
    OutputView.updateBridge(upBridge, downBridge);
    this.userTry += 1;
    if (ox == "O") InputView.readMoving(this);
    InputView.readGameCommand(this);
  }
}

const app = new App();
app.play();

module.exports = App;
