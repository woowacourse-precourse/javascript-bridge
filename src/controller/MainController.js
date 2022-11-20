const BridgeController = require("./BridgeController");
const UserController = require("./UserController");
const BridgeGameController = require("./BridgeGameController");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class MainController {
  constructor() {
    this.bridgeController = new BridgeController(this);
    this.userController = new UserController(this);
    this.bridgeGameController = new BridgeGameController(this);
  }

  /**
   * 다리 길이 입력 후 실행 될 연결 메서드
   * @param bridgeLengthInput {string} [다리 길이 input]
   * @param mainController {object} [메인 컨트롤러]
   */
  onBridgeSizeInput(bridgeLengthInput, mainController) {
    mainController.bridgeController.onBridgeSizeInput(bridgeLengthInput);
  }

  /**
   * 유저 이동 입력 후 생행 될 연결 메서드
   * @param userMovingInput {string} [유저 이동 input]
   * @param mainController [메인 컨트롤러]
   */
  onUserMovingInput(userMovingInput, mainController) {
    mainController.userController.onUserMovingInput(userMovingInput);
  }

  // 유저 이동 입력 연결 메서드
  readUserMovingInput() {
    InputView.readMoving(this.onUserMovingInput, this);
  }

  /**
   * 유저 이동 로직 연결 메서드
   * @param userMoving {string[]} [유저 이동 기록]
   */
  tryMove(userMoving) {
    const isSuccess = this.bridgeController.getIsSuccessMoving(userMoving);
    const isFinished = this.bridgeController.getIsFinished(userMoving);

    this.bridgeGameController.tryMove(isSuccess, isFinished);
  }

  // 게임 초기 실행 메서드
  init() {
    this.userController.increaseTryCount();
    if (this.userController.getTryCount() === 1) {
      OutputView.printOpening();
      InputView.readBridgeSize(this.onBridgeSizeInput, this);
    }
  }
}

module.exports = MainController;
