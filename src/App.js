const InputView = require("./InputView");

class App {
  #userData = {
    callCount: 0,
    upperBridge: "",
    lowerBridge: "",
    currentAnswer: "",
    bridge: [],
    status: "",
    try: 1,
  };
  play() {
    console.log("다리 건너기 게임을 시작합니다.\n");
    this.startGame(this.#userData);
  }

  startGame(userData) {
    return InputView.readBridgeSize(userData);
  }
}

module.exports = App;
