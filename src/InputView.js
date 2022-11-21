const { Console } = require("@woowacourse/mission-utils");
const gameConst = require("./const");

const InputView = {
  readBridgeSize(moveStart) {
    Console.readLine(
      gameConst.process.INPUT_LENGTH_MESSAGE + "\n",
      (length) => {
        try {
          this.validateBridgeLength(length);
        } catch (err) {
          Console.print(err);
          this.readBridgeSize(moveStart);
          return;
        }
        moveStart(Number(length));
      }
    );
  },

  readMoving(move) {
    Console.readLine(gameConst.process.INPUT_CHOOSE_MESSAGE + "\n", (cmd) => {
      try {
        this.validateMoveCommand(cmd);
      } catch (err) {
        Console.print(err);
        this.readMoving(move);
        return;
      }

      move(cmd);
    });
  },

  readGameCommand(makeDecision) {
    Console.readLine(gameConst.process.INPUT_RESART_MESSAGE + "\n", (cmd) => {
      try {
        this.validateRetryCommand(cmd);
      } catch (err) {
        Console.print(err);
        this.readGameCommand(makeDecision);
        return;
      }

      makeDecision(cmd);
    });
  },

  validateBridgeLength(length) {
    if (isNaN(length)) {
      throw new Error(gameConst.error.BRIDGE_ERROR);
    }
    if (Number(length) < 3 || Number(length) > 20) {
      throw new Error(gameConst.error.BRIDGE_ERROR);
    }
  },

  validateMoveCommand(cmd) {
    if (cmd !== gameConst.cmd.UP && cmd !== gameConst.cmd.DOWN) {
      throw new Error(gameConst.error.MOVE_COMMAND_ERROR);
    }
  },

  validateRetryCommand(cmd) {
    if (cmd !== gameConst.cmd.QUIT && cmd !== gameConst.cmd.RETRY) {
      throw new Error(gameConst.error.RETRY_COMMAND_ERROR);
    }
  },
};

module.exports = InputView;
