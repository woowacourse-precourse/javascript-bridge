const InputView = require('../views/InputView');

class Player {
  move(compareSpace) {
    InputView.readMoving(compareSpace);
  }
}

module.exports = Player;
