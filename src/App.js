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
  gameTry = 1;
  bridgeSize;
  play() {
    OutputView.printGameStart(Message.GAME_START);
    this.inputBridgeLength();
  }

  inputBridgeLength() {
    InputView.readBridgeSize(this);
  }

  makingBridge(size) {
    this.bridgeSize = size;
    this.bridgeArray = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.inputUserMove();
  }
  inputUserMove() {
    InputView.readMoving(this);
  }

  userMove(userChoice) {
    const bridgeGame = new BridgeGame(this.bridgeArray);

    bridgeGame.move(this, userChoice, this.userTry);
  }

  printBridge(ox, upBridge, downBridge) {
    OutputView.updateBridge(upBridge, downBridge);
    this.userTry += 1;
    if (this.bridgeSize == this.userTry) return OutputView.printResult(this.gameTry, "성공");
    if (ox == "O") InputView.readMoving(this);
    InputView.readGameCommand(this);
  }

  inputGameCommand(userChoice) {
    const bridgeGame_ = new BridgeGame();
    if (userChoice == "R") {
      this.gameTry += 1;
      this.userTry = 0;
      bridgeGame_.retry(this);
      OutputView.clearBridge();
    }
    if (userChoice == "Q") OutputView.printResult(this.gameTry, "실패");
  }
}

const app = new App();
app.play();

module.exports = App;
