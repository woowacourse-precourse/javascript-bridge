const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/index');
const GameController = require('../GameController');
const Validator = require('../Validator');
const OutputView = require('./OutputView');

const InputView = {
  controller: new GameController(),

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

  readMoving() {
    Console.readLine(MESSAGE.ASK_SELECT_MOVE_POINT, this.moveCallback(this));
  },

  moveCallback(direction) {
    try {
      Validator.directionValidityCheck(direction);
      const success = this.handleDirection(direction);
      success ? this.controller.doseUserWin() : this.readGameCommand();
    } catch ({ message }) {
      OutputView.printMessage(message);
      this.readMoving();
    }
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.ASK_RETRY, callback);
  },
};

module.exports = InputView;
