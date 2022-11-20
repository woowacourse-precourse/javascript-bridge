const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/index');
const Validator = require('../Validator');
const OutputView = require('./OutputView');

const InputView = {
  readBridgeSize() {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, this.sizeCallback(this));
  },

  sizeCallback(size) {
    try {
      Validator.sizeValidityCheck(size);
      this.handleSize(size);
      this.readMoving();
    } catch ({ message }) {
      OutputView.printMessage(message);
      this.readBridgeSize();
    }
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.ASK_SELECT_MOVE_POINT, callback);
  },

  // moveCallback(direction) {
  //   try {
  //     // Validator
  //     const success = this.handleDirection(direction);
  //     success ? this.#diseUserWin() : this.readGameCommand();
  //   } catch ({ message }) {
  //     OutputView.printMessage(message);
  //     this.askDirection();
  //   }
  // }

  readGameCommand(callback) {
    Console.readLine(MESSAGE.ASK_RETRY, callback);
  },
};

module.exports = InputView;
