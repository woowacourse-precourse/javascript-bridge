const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Validation = require("./validation/Validation");

class App {
  play() {
    Console.print("다리 건너기 게임을 시작합니다.");
  }

  InputBridgeSize() {
    InputView.readBridgeSize((size) => {
      Validation.validateBridgeSize(size);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
