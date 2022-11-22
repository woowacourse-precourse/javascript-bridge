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
    console.log("다리 건너기 게임을 시작합니다.\n");
    this.startGame(this.#data);
  }

  startGame(data) {
    return InputView.readBridgeSize(data);
  }
}

const a = new App();
a.play();

module.exports = App;
