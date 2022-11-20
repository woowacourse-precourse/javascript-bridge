const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/index');
const GameController = require('../GameController');
const Validator = require('../Validator');
const OutputView = require('./OutputView');

const InputView = {
  controller: new GameController(),

  readBridgeSize() {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, (size) => {
      this.sizeCallback(size);
    });
  },

  sizeCallback(size) {
    try {
      Validator.sizeValidityCheck(size);
      this.controller.handleSize(size);
      this.readMoving();
    } catch ({ message }) {
      OutputView.printMessage(message);
      this.readBridgeSize();
    }
  },

  readMoving() {
    Console.readLine(MESSAGE.ASK_SELECT_MOVE_POINT, (direction) => {
      this.moveCallback(direction);
    });
  },

  moveCallback(direction) {
    try {
      Validator.directionValidityCheck(direction);
      const success = this.controller.handleDirection(direction);
      if (success) {
        const userWin = this.controller.doseUserWin();
        if (userWin) this.controller.gameOver(userWin);
        else this.readMoving();
      } else this.readGameCommand();
    } catch ({ message }) {
      OutputView.printMessage(message);
      this.readMoving();
    }
  },

  readGameCommand() {
    Console.readLine(MESSAGE.ASK_RETRY, (command) => {
      this.commandCallback(command);
    });
  },

  commandCallback(command) {
    try {
      const sholudRetry = this.controller.handleCommand(command);
      if (sholudRetry) {
        this.controller.retry();
        this.readMoving();
      } else {
        this.controller.gameOver();
      }
    } catch ({ message }) {
      OutputView.printMessage(message);
      this.readGameCommand();
    }
  },
};

module.exports = InputView;
