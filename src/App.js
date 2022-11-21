const OutputView = require("./OutputView");

class App {
  constructor() {
    this.outputView = OutputView;
  }

  play() {
    this.outputView.print("다리 건너기 게임을 시작합니다.");
  }
}

module.exports = App;
