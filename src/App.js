const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.printString("다리 건너기 게임을 시작합니다.");
  }
}

const app = new App();
app.play();

module.exports = App;
