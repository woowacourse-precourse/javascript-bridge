const { Console } = require("@woowacourse/mission-utils");
const { QUESTION } = require("../constants/constants");
const Validation = require("../Utils/Validation");
// prettier-ignore
const InputView = {
  readBridgeSize() {
    try {
      let length;
      Console.readLine(QUESTION.BRIDGE_SIZE, (input) => {
        length = parseInt(Validation.validSize(input));
      });
      return length;
    } catch (e) {
      Console.print(e);
      this.readBridgeSize();
    }
  },

  readMoving() {
    try {
      let move;
      Console.readLine(QUESTION.MOVE_KEY, (input) => {
        Validation.validMoveKey(input);
        move = input; });
      return move;
    } catch (e) {
      Console.print(e);
      this.readMoving();
    }
  },

  readGameCommand() {
    try {
      let command;
      Console.readLine(QUESTION.COMMAND_KEY, (input) => {
        Validation.validCommandKey(input);
        command = input; });
      return command;
    } catch (e) {
      Console.print(e);
      this.readGameCommand();
    }
  },
};

module.exports = InputView;
