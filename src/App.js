const OutputView = require('./View/OutputView.js');
const Controller = require('./Controller.js');

class App {
  play() {
    OutputView.printStartMessage();
    const controller = new Controller();
    controller.InputBridgeSize();
  }
}

module.exports = App;
