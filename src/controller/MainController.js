const BridgeController = require("./BridgeController");
const UserController = require("./UserController");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class MainController {
  constructor() {
    this.bridgeController = new BridgeController(this);
    this.userController = new UserController(this);
  }

  onBridgeSizeInput(bridgeLengthInput, mainController) {
    mainController.bridgeController.onBridgeSizeInput(bridgeLengthInput);
  }

  onUserMovingInput(userMovingInput, mainController) {
    mainController.userController.onUserMovingInput(userMovingInput);
  }

  readUserMovingInput() {
    InputView.readMoving(this.onUserMovingInput, this);
  }

  init() {
    this.userController.increaseTryCount();
    if (this.userController.getTryCount() === 1) {
      OutputView.printOpening();
      InputView.readBridgeSize(this.onBridgeSizeInput, this);
    }
  }
}

module.exports = MainController;
