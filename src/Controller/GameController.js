const InputView = require("../View/InputView");
const OutputView = require("../View/OutputView");

class GameController {
  constructor() {
    this.view = {
      input: InputView,
      output: OutputView,
    };
  }

  start() {
    this.view.output.printMessage("start");
    this.end();
  }

  end() {
    this.view.output.printMessage("end");
  }
}

module.exports = GameController;
