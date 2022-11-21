const InputView = require('../views/InputView');

class Player {
  static move(compareSpace) {
    InputView.readMoving(compareSpace);
  }
}

module.exports = Player;
