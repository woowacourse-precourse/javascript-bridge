const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/index');
const BridgeController = require('../controller/BridgeController');
const Validator = require('../Validator');

const InputView = {
  bridgeCtrl: new BridgeController(),

  readBridgeSize() {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, this.sizeCallback.bind(this));
  },

  sizeCallback(size) {
    try {
      Validator.sizeValidityCheck(size);
      this.bridgeCtrl.handleSize(size);
      this.readMoving();
    } catch ({ message }) {
      this.bridgeCtrl.printMessage(message);
      this.readBridgeSize();
    }
  },

  readMoving() {
    Console.readLine(MESSAGE.ASK_MOVE_POINT, this.moveCallback.bind(this));
  },

  moveCallback(direction) {
    try {
      Validator.directionValidityCheck(direction);
      const isCorrectDirection = this.bridgeCtrl.handleDirection(direction);
      isCorrectDirection ? this.doesGameOver() : this.readGameCommand();
    } catch ({ message }) {
      this.bridgeCtrl.printMessage(message);
      this.readMoving();
    }
  },

  doesGameOver() {
    const doesUserWin = this.bridgeCtrl.doesUserWin();
    doesUserWin ? this.bridgeCtrl.gameOver(doesUserWin) : this.readMoving();
  },

  readGameCommand() {
    Console.readLine(MESSAGE.ASK_RETRY, this.commandCallback.bind(this));
  },

  commandCallback(command) {
    try {
      Validator.commandValidityCheck(command);
      const sholudRetry = this.bridgeCtrl.handleCommand(command);
      sholudRetry ? this.readMoving() : this.bridgeCtrl.gameOver();
    } catch ({ message }) {
      this.bridgeCtrl.printMessage(message);
      this.readGameCommand();
    }
  },
};

module.exports = InputView;
