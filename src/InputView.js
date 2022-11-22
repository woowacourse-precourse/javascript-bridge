const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const Controller = require("./Controller");
const OutputView = require("./OutputView");
const { GO, SIGN, MESSAGE, ERROR_MESSAGE } = require("./constant");

const InputView = {

  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.inputLength, (size) => {
      MissionUtils.Console.print(SIGN.blank);
      this.validateBridgeSize(Number(size));
      Controller.getSize(Number(size));
      const generateBridge = BridgeRandomNumberGenerator.generate;
      this.savedBridge = BridgeMaker.makeBridge(Number(size), generateBridge);
      this.readMoving();
    });
  },

  validateBridgeSize(size) {
    try { 
      if (Controller.isSizeError(size)) {
        throw new Error(MissionUtils.Console.print(ERROR_MESSAGE.inputRange));
      }
    } catch (err) {
      Controller.size -= Number(size);
      this.readBridgeSize();
    }
  },

  readMoving() {
    MissionUtils.Console.readLine(MESSAGE.inputMove, (block) => {
      new BridgeGame().move(block, this.savedBridge);
      if (Controller.isBlockError(block)) return this.validateMoving();
      this.moveContinue(block);
    });
  },

  validateMoving() {
    try {
      throw new Error(MissionUtils.Console.print(ERROR_MESSAGE.choose_UorD));
    } catch (err) {
      Controller.initializeBlock();
      this.readMoving();
    }
  },

  moveContinue(block) {
    if (!Controller.checkMoveContinue()) return this.isGameEnd();

    if (
      (block === GO.up || block === GO.down) &&
      Controller.checkMoveContinue()
    ) {
      return this.readMoving();
    }
  },

  isGameEnd() {
    const size = Number(Controller.size);
    if (
      OutputView.nowArray[0].includes(SIGN.fail) ||
      OutputView.nowArray[1].includes(SIGN.fail)
    ) {
      return this.readGameCommand();
    }
    if (Controller.playerArr.length === size) return this.executePrintResult();
  },

  readGameCommand() {
    MissionUtils.Console.readLine(MESSAGE.inputCommand, (command) => {
      if (Controller.isCommandError(command)) {
        this.validateCommand();
      }
      if (!Controller.isCommandError(command)) {
        this.isRetry(command);
      }
    });
  },

  validateCommand() {
    try {
      throw new Error(MissionUtils.Console.print(ERROR_MESSAGE.choose_RorQ));
    } catch (err) {
      this.readGameCommand();
    }
  },

  isRetry(command) {
    const playerCommand = new BridgeGame().retry(command);
    if (playerCommand === true) {
      Controller.initializeAll();
      this.readMoving();
    }
    if (playerCommand !== true) {
      this.executePrintResult();
    }
  },

  executePrintResult() {
    Controller.checkSuccess();
    OutputView.printResult(Controller.tryCount, Controller.gameResult);
  },
};

module.exports = InputView;
