const InputView = require("./InputView");

class App {
  #data = {
    callCount: 0,
    upperBridge: "",
    lowerBridge: "",
    currentAnswer: "",
    bridge: [],
    status: "",
    try: 1,
  };
  play() {
    InputView.readBridgeSize(this.#data);
  }
}

module.exports = App;

const a = new App();
a.play();
