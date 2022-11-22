const { Console } = require("@woowacourse/mission-utils");
const gameConst = require("./const");

const InputView = {
  readBridgeSize(makeBridge) {
    Console.readLine(gameConst.process.INPUT_LENGTH_MESSAGE + "\n", (length) => {
        try {
          makeBridge(Number(length));
        } catch (err) {
          Console.print(err.message);
          this.readBridgeSize(makeBridge);
        }
      }
    );
  },

  readMoving(move) {
    Console.readLine(gameConst.process.INPUT_CHOOSE_MESSAGE + "\n", (cmd) => {
      try {
        move(cmd);
      } catch (err) {
        Console.print(err.message);
        this.readMoving(move);
      }
    });
  },

  readGameCommand(makeDecision) {
    Console.readLine(gameConst.process.INPUT_RESART_MESSAGE + "\n", (cmd) => {
      try {
        makeDecision(cmd);
      } catch (err) {
        Console.print(err.message);
        this.readGameCommand(makeDecision);
      }
    });
  },
};

module.exports = InputView;
