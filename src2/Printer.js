const OutputView = require("./console/OutputView");

class Printer {
  text(message) {
    OutputView.printText(message);
  }
}

module.exports = Printer;
