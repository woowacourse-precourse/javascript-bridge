const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validation = require("./Validation");

// 게임을 진행시키는 컨트롤러
class GameController {
  constructor() {
    this.bridgeGame = new BridgeGame();
  }
  play() {
    // 게임 최초 시작
    OutputView.printGameStart();
    this.createBridge();
  }
  createBridge() {
    InputView.readBridgeSize((input) => {
      Validation.bridgeInput(input);
      const bridge = BridgeMaker.makeBridge(
        input,
        BridgeRandomNumberGenerator.generate
      );
      console.log(bridge);
      this.bridgeGame.setBridge(bridge);
      this.inputStep();
    });
  }
  inputStep() {
    InputView.readMoving((input) => {
      Validation.stepInput(input);
      this.compareStep(input);
    });
  }
  compareStep(input) {
    const result = this.bridgeGame.compareBridge(input);
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
      this.correctAnswer();
    } else {
      this.worngAnwer();
    }
  }
  correctAnswer() {
    if (this.bridgeGame.checkLast()) {
      console.log("END!!");
    } else {
      this.inputStep();
    }
  }
  worngAnwer() {
    this.bridgeGame.retry();
  }
}

module.exports = GameController;
