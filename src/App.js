const { printMessage } = require("../View/OutputView");
const { MESSAGE } = require("../constants/Message");
const Control = require("./Control");

class App {
  constructor() {
    printMessage(MESSAGE.START);
    this.control = new Control();
  }
  play() {
    this.control.gameStart();
  }
}

const app = new App().play();

module.exports = App;
