const MissionUtils = require("@woowacourse/mission-utils");
// const Tempo = require("./Tempo");
const BridgeMaker = require("./BridgeMaker");
const InputView = require("./View/InputView");
const Message = require("./Message");
const OutputView = require("./View/OutputView");
const BridgeGame = require("./BridgeGame");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  bridgeArray;
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
    bridgeGame.move(this, userChoice);
  }

  printBridge(upBridge, downBridge) {
    OutputView.printMap(upBridge, downBridge);
  }
}

const app = new App();
app.play();

module.exports = App;
