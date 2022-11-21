const OutputView = require("./OutputView");

class App {

  play() {
    OutputView.printStart(); // 게임 시작 문구 출력
  }
}

let app = new App();
app.play();

module.exports = App;
