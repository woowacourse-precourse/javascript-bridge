const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const BridgeGame = require("../Model/BridgeGame");
const BridgeMaker = require("../BridgeMaker");
const {
  Check,
  checkBridgeLength,
  checkMoveFormat,
  checkSelectFormat,
} = require("../Utils/Check");
const BridgeRandomNumberGenerator = require("../Utils/BridgeRandomNumberGenerator");

class GameController {
  constructor() {
    this.model = new BridgeGame();
    this.view = {
      input: InputView,
      output: OutputView,
    };
  }

  startGame() {
    this.view.output.printMessage("start");
    this.createBridge();
  }

  createBridge() {
    this.view.input.readBridgeSize((sizeInput) => {
      Check(sizeInput, checkBridgeLength, this.createBridge.bind(this));

      const bridge = BridgeMaker.makeBridge(
        sizeInput,
        BridgeRandomNumberGenerator.generate
      );

      console.log(bridge); //TODO: 구현 후 삭제 //TODO: application test: type console error

      this.model.setState({ bridge });
      this.playRound();
    });
  }

  playRound() {
    this.view.input.readMoving((moveInput) => {
      const step = Check(moveInput, checkMoveFormat, this.playRound.bind(this));
      this.model.move(step);
    });
  }

  selectNextStep() {}

  retryOrFinish() {}

  finishGame() {
    this.view.output.printMessage("finish");
  }
}

module.exports = GameController;
