const { Console } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const Validation = require("./validation/Validation");

class App {
  play() {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    this.InputBridgeSize()
  }

  InputBridgeSize() {
    InputView.readBridgeSize((size) => {
      const { error } = Validation.validateBridgeSize(size);
      if (error) {
        Console.print(error);
        return this.InputBridgeSize();
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
