const BridgeController = require("./BridgeController");
const UserController = require("./UserController");
const BridgeGame = require("./BridgeGame");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const { validate } = require("../validation/RestartInputValidation");

class MainController {
  #bridgeController;
  #userController;
  #bridgeGame;

  constructor() {
    this.#bridgeController = new BridgeController(this);
    this.#userController = new UserController(this);
    this.#bridgeGame = new BridgeGame(this);
  }

  // 다리 길이 입력 연결 메서드
  readBridgeSizeInput() {
    InputView.readBridgeSize(this.processBridgeSizeInput, this);
  }

  /**
   * 다리 길이 입력 후 실행 될 연결 메서드
   * @param bridgeLengthInput {string} [다리 길이 input]
   * @param mainController {object} [메인 컨트롤러]
   */
  processBridgeSizeInput(bridgeLengthInput, mainController) {
    OutputView.printEmptyLine();
    mainController.#bridgeController.processBridgeSizeInput(bridgeLengthInput);
  }

  /**
   * 유저 이동 입력 후 생행 될 연결 메서드
   * @param userMovingInput {string} [유저 이동 input]
   * @param mainController [메인 컨트롤러]
   */
  processUserMovingInput(userMovingInput, mainController) {
    mainController.#userController.processUserMovingInput(userMovingInput);
  }

  // 유저 이동 입력 연결 메서드
  readUserMovingInput() {
    InputView.readMoving(this.processUserMovingInput, this);
  }

  /**
   * 유저 이동 로직 연결 메서드
   * @param userMoving {string[]} [유저 이동 기록]
   */
  tryMove(userMoving) {
    const isSuccess = this.#bridgeController.getIsSuccessMoving(userMoving);
    const isFinished = this.#bridgeController.getIsFinished(userMoving);

    this.#bridgeGame.move(isSuccess, isFinished, userMoving);
  }

  /**
   * 움직임에 대한 결과 출력 연결 메서드
   * @param userMoving {string} [유저 이동 기록]
   */
  displayCaseResult(userMoving) {
    const movingStatus = this.#bridgeController.getMovingStatus(userMoving);
    OutputView.printMap(movingStatus);
  }

  /**
   * 최종 결과를 출력한다.
   * @param userMoving {string[]} [유저 이동기록]
   * @param isSuccess {boolean} [최종 성공여부]
   */
  displayFinalResult(userMoving, isSuccess) {
    const movingStatus = this.#bridgeController.getMovingStatus(userMoving);
    const userTryCount = this.#userController.getTryCount();
    OutputView.printResult(movingStatus, isSuccess, userTryCount);
  }

  /**
   * 유저 재시작 여부를 입력받은 후 입력에 따라 다음 프로세스를 진행한다.
   * @param userRestartInput {string} [유저 재시작 여부 입력]
   * @param mainController {object} [컨트롤러]
   * @param userMoving {string[]} [유저 이동기록]
   */
  processUserRestartInput(userRestartInput, mainController, userMoving) {
    try {
      validate(userRestartInput);
      mainController.#bridgeGame.processRestart(userRestartInput, userMoving);
    } catch (errorLog) {
      mainController.printError(errorLog);
      mainController.readUserRestartInput(userMoving);
    }
  }

  /**
   * 유저 재시작 의사 입력 연결 메서드
   * @param userMoving {string[]} [유저 이동기록]
   */
  readUserRestartInput(userMoving) {
    InputView.readGameCommand(this.processUserRestartInput, this, userMoving);
  }

  // 게임 재시작 메서드
  restartGame() {
    this.#userController.increaseTryCount();
    this.#userController.resetUserMoving();
    this.readUserMovingInput();
  }

  /**
   * 에러 로그 출력 연결 메서드
   * @param errorLog {object} [Error 객체]
   */
  printError(errorLog) {
    OutputView.printError(errorLog);
  }

  // 게임 초기 실행 메서드
  init() {
    this.#userController.increaseTryCount();
    OutputView.printOpening();
    this.readBridgeSizeInput();
  }
}

module.exports = MainController;
