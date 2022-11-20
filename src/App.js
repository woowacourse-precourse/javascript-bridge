const { readBridgeSize } = require("./InputView");
const { printMessege } = require("./OutputView");

class App {
  play() {
    printMessege("다리 건너기 게임을 시작합니다.");
    readBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
