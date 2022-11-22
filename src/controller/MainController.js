const BridgeController = require("./BridgeController");
const UserController = require("./UserController");
const BridgeGame = require("../BridgeGame");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class MainController {
  constructor() {
    this.bridgeController = new BridgeController(this);
    this.userController = new UserController(this);
    this.bridgeGame = new BridgeGame(this);
  }

  /**
   * 다리 길이 입력 후 실행 될 연결 메서드
   * @param bridgeLengthInput {string} [다리 길이 input]
   * @param mainController {object} [메인 컨트롤러]
   */
  onBridgeSizeInput(bridgeLengthInput, mainController) {
    OutputView.printEmptyLine();
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

    this.bridgeGame.move(isSuccess, isFinished, userMoving);
  }

  /**
   * 움직임에 대한 결과 출력 연결 메서드
   * @param userMoving {string} [유저 이동 기록]
   */
  displayCaseResult(userMoving) {
    const movingStatus = this.bridgeController.getMovingStatus(userMoving);
    OutputView.printMap(movingStatus);
  }

  /**
   * 최종 결과를 출력한다.
   * @param userMoving {string[]} [유저 이동기록]
   * @param isSuccess {boolean} [최종 성공여부]
   */
  displayFinalResult(userMoving, isSuccess) {
    const movingStatus = this.bridgeController.getMovingStatus(userMoving);
    const userTryCount = this.userController.getTryCount();
    OutputView.printResult(movingStatus, isSuccess, userTryCount);
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
