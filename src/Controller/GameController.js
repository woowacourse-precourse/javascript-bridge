const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");
const BridgeGame = require("../Model/BridgeGame");
const BridgeMaker = require("../BridgeMaker");
const Check = require("../Utils/Check");
const BridgeRandomNumberGenerator = require("../Utils/BridgeRandomNumberGenerator");

class GameController {
  constructor() {
    this.model = new BridgeGame();
    this.view = {
      input: InputView,
      output: OutputView,
    };
    this.check = Check;
  }

  startGame() {
    this.view.output.printMessage("start");
    this.createBridge();
  }

  createBridge() {
    this.view.input.readBridgeSize((sizeInput) => {
      this.check.bridgeLength(sizeInput);

      const bridge = BridgeMaker.makeBridge(
        sizeInput,
        BridgeRandomNumberGenerator.generate
      );

      console.log(bridge); //TODO: 구현 후 삭제

      this.model.setState({ bridge });
      this.startRound();
    });
  }

  startRound() {}

  end() {
    this.view.output.printMessage("end");
  }
}

module.exports = GameController;
