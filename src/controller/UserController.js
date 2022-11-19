const UserModel = require("../model/UserModel");

class UserController {
  constructor(mainController) {
    this.mainController = mainController;
    this.userModel = new UserModel();
  }

  getTryCount() {
    return this.userModel.getTryCount();
  }

  increaseTryCount() {
    this.userModel.increaseTryCount();
  }
}

module.exports = UserController;
