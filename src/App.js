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
      const bridge = BridgeMaker.makeBridge(input,BridgeRandomNumberGenerator.generate);
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
  }
  
}
const app = new App();
app.play();

module.exports = App;
