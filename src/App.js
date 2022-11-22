const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validation = require("./Validation");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker")
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }

  play() {
    OutputView.printGameStart();
    this.createBridge();
  }

  createBridge() {
    InputView.readBridgeSize((input) => {
      Validation.bridgeInput(input);
      const bridge = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
      this.BridgeGame.setBridge(bridge);
      this.inputStep();
    });
  }

  inputStep() {
    InputView.readMoving((input) => {
      Validation.moveInput(input);
      this.compareStep(input);
    });
  }

  compareStep(input) {
    const nowStepResult = this.bridgeGame.comparBridge(input);
    if (result) {
      this.bridgeGame.addCorrect();
      this.bridgeGame.addSeperate();
    } else {
      this.bridgeGame.addWrong();
    }
    this.showBridgeResult(result);
  }
  showBridgeResult(result) {
    const [upString, downString] = this.bridgeGame.getBridgeString();
    OutputView.printMap(upString, downString);
    if (result) {
      this.continueGame();
    } else {
      this.askStopGame();
    }
  }
  continueGame() {
    if (this.bridgeGame.checkLast()) {
      console.log("END!!", this.bridgeGame.getTryCount());
    } else {
      this.inputStep();
    }
  }
  askStopGame() {
    InputView.readGameCommand((input) => {
      Validation.restartInput(input);
      this.chooseRetryGame(input);
    });
  }
  chooseRetryGame(input) {
    if (input === "R") {
      this.bridgeGame.retry();
      this.inputStep();
    } else if (input === "Q") {
      console.log("END!!", this.bridgeGame.getTryCount());
    }
  }
  showGameResult() {
    //게임 결과보여주고 종료
  }
}
const app = new App();
app.play();

module.exports = App;
