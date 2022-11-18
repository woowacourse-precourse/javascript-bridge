const InputView = require("./View/InputView.js");

class App {
  play() {
    const input = InputView.readBridgeSize();
    console.log("다리 길이는 ", input);
  }
}

module.exports = App;
