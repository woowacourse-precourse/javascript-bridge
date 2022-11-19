const { printMessage } = require("../View/OutputView");
const { MESSAGE } = require("../constants/Message");
const Control = require("./Control");

class App {
  constructor() {
    printMessage(MESSAGE.START);
  }
  play() {}
}

const app = new App().play();

module.exports = App;
