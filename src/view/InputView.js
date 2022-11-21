const { Console } = require("@woowacourse/mission-utils");
const { Question } = require("../constants/Constant");

const InputView = {
  readBridgeSize(callback) {
    this.getUserInput(
      Question.BRIDGE_SIZE,
      callback,
      this.readBridgeSize.bind(this)
    );
  },

  readMoving(callback) {
    this.getUserInput(
      Question.MOVE_DIRECTION,
      callback,
      this.readMoving.bind(this)
    );
  },

  readGameCommand(callback) {
    this.getUserInput(
      Question.RESTART,
      callback,
      this.readGameCommand.bind(this)
    );
  },

  getUserInput(question, callback, redirect) {
    Console.readLine(question, (input) => {
      try {
        callback(input);
      } catch (error) {
        Console.print(error.message);
        redirect(callback);
      }
    });
  },
};

module.exports = InputView;
