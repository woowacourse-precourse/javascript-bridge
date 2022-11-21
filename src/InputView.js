const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const Controller = require("./Controller");
const OutputView = require("./OutputView");
const {
  GO,
  SIGN,
  MESSAGE,
  ERROR_MESSAGE,
} = require("./constant");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.inputLength, (size) => {
      MissionUtils.Console.print(SIGN.blank);
      this.getBridgeSize(Number(size));
      Controller.getSize(Number(size));
      const generateBridge = BridgeRandomNumberGenerator.generate;
      this.savedBridge = BridgeMaker.makeBridge(Number(size), generateBridge);
      this.readMoving();
    });
  },

  getBridgeSize(size) {
    try {
      if (Number(size) < 3 || Number(size) > 20 || isNaN(size)) {
        throw new Error(MissionUtils.Console.print(ERROR_MESSAGE.inputRange));
      }
    } catch (err) {
      Controller.size -= Number(size);
      this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(MESSAGE.inputMove, (block) => {
      Controller.addRound();
      new BridgeGame().move(block, this.savedBridge);
      if (Controller.isBlockError(block)) return this.getMoving();
      this.moveContinue(block);
    });
  },

  getMoving() {
    try {
      throw new Error(MissionUtils.Console.print(ERROR_MESSAGE.choose_UorD));
    } catch (err) {
      Controller.initializeBlock();
      this.readMoving();
    }
  },

  moveContinue(block) {
    if (!Controller.checkMoveContinue()) {
      return this.isGameEnd();
    }
    if ((block === GO.up || block === GO.down) && Controller.checkMoveContinue()) {
      return this.readMoving();
    }
  },

  isGameEnd() {
    const size = Number(Controller.size);
    if (
      OutputView.nowArray[0].includes(SIGN.fail) || OutputView.nowArray[1].includes(SIGN.fail)
    ) {
      return this.readGameCommand();
    }
    if (Controller.playerArr.length === size) {
      return this.executePrintResult();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(MESSAGE.inputCommand, (command) => {
      if (Controller.isCommandError(command)) {
        this.getCommand();
      }
      if (!Controller.isCommandError(command)) {
        this.isRetry(command);
      }
    });
  },

  getCommand() {
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
