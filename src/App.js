const { readBridgeSize } = require("./InputView");
const { printResult } = require("./OutputView");

class App {
  play() {
    printResult("다리 건너기 게임을 시작합니다.");
    readBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
