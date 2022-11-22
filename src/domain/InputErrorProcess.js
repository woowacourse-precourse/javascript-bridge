const OutputView = require("../ui/OutputView");
const GameInfo = require("./GameInfo");

class InputErrorProcess {
  inputErrorProcess(validClass, inputValue, objectCode) {
    try {
      GameInfo[objectCode] = new validClass(inputValue)[objectCode];
      return true;
    } catch (error) {
      OutputView.printMessage(error);
      return false;
    }
  }
}

module.exports = InputErrorProcess;
