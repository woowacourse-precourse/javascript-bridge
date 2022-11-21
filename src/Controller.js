const { readBridgeSize } = require("./InputView");

class Controller {
  constructor() {
    this.init();
  }
  init() {
    readBridgeSize();
  }
}

module.exports = Controller;