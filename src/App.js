const InputView = require("./InputView");

class App {
  constructor() {
    this.gameData;
  }

  play() {
    InputView.readBridgeSize(this.gameData);
  }
}

module.exports = App;
