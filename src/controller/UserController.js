const UserModel = require("../model/UserModel");

class UserController {
  constructor(mainController) {
    this.mainController = mainController;
    this.userModel = new UserModel(this);
  }
}

module.exports = UserController;
