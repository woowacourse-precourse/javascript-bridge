const { ERROR_MESSAGES } = require("../constants/constant");
const OutputView = require("../ui/OutputView");
const GameInfo = require("./GameInfo");

class InputErrorProcess {
  inputErrorProcess(validClass, inputValue, objectCode) {
    try {
      GameInfo[objectCode] = new validClass(inputValue)[objectCode];
    } catch (error) {
      OutputView.printMessage(error);
      return false;
    }
    return true;
  }
}

module.exports = InputErrorProcess;