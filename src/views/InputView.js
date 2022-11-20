const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/index');
const BridgeController = require('../controller/BridgeController');
const Validator = require('../Validator');

const InputView = {
  controller: new BridgeController(),

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
      this.controller.print(message);
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
      const isCorrectDirection = this.controller.handleDirection(direction);
      isCorrectDirection ? this.doesGameOver() : this.readGameCommand();
    } catch ({ message }) {
      this.controller.print(message);
      this.readMoving();
    }
  },

  doesGameOver() {
    const doesUserWin = this.controller.doesUserWin();
    doesUserWin ? this.controller.gameOver(doesUserWin) : this.readMoving();
  },

  readGameCommand() {
    Console.readLine(MESSAGE.ASK_RETRY, (command) => {
      this.commandCallback(command);
    });
  },

  commandCallback(command) {
    try {
      Validator.commandValidityCheck(command);
      const sholudRetry = this.controller.handleCommand(command);
      sholudRetry ? this.readMoving() : this.controller.gameOver();
    } catch ({ message }) {
      this.controller.print(message);
      this.readGameCommand();
    }
  },
};

module.exports = InputView;
