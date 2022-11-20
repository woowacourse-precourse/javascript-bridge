const UserModel = require("../model/UserModel");

class UserController {
  constructor(mainController) {
    this.mainController = mainController;
    this.userModel = new UserModel();
  }

  /**
   * 유저의 시도 횟수 반환 연결 메서드
   * @return {number} [유저 시도 횟수]
   */
  getTryCount() {
    return this.userModel.getTryCount();
  }

  // 유저의 시도 횟수 증가 메서드
  increaseTryCount() {
    this.userModel.increaseTryCount();
  }
}

module.exports = UserController;
