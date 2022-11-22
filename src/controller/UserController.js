const UserModel = require("../model/UserModel");
const { validate } = require("../validation/MovingInputValidation");

class UserController {
  #mainController;
  #userModel;

  constructor(mainController) {
    this.#mainController = mainController;
    this.#userModel = new UserModel();
  }

  /**
   * 유저의 시도 횟수 반환 연결 메서드
   * @return {number} [유저 시도 횟수]
   */
  getTryCount() {
    return this.#userModel.getTryCount();
  }

  // 유저의 시도 횟수 증가 연결 메서드
  increaseTryCount() {
    this.#userModel.increaseTryCount();
  }

  // 유저의 이동 기록을 초기화하는 연결 메서드
  resetUserMoving() {
    this.#userModel.resetUserMoving();
  }

  /**
   * 유저 이동 동선 추가 연결 메서드
   * @param userMovingInput {string} [유저 이동 입력]
   */
  appendUserMoving(userMovingInput) {
    this.#userModel.appendUserMoving(userMovingInput);
  }

  /**
   * 유저의 이동 입력을 처리하는 메서드
   * @param userMovingInput {string} [유저 이동 입력]
   */
  processUserMovingInput(userMovingInput) {
    try {
      validate(userMovingInput);
      this.appendUserMoving(userMovingInput);
      this.#mainController.tryMove(this.#userModel.getUserMoving());
    } catch (errorLog) {
      this.#mainController.printError(errorLog);
      this.#mainController.readUserMovingInput();
    }
  }
}

module.exports = UserController;
