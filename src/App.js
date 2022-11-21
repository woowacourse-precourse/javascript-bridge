const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");
const OutputView = require("../src/OutputView");
class App {
  play() {
    OutputView.printStart();
    let size = this.makeSize();

    MissionUtils.Console.print("pass");
  }

  makeSize() {
    let size = InputView.readBridgeSize();
    size = this.validateSize(size);
    return size;
  }

  validateSize(size) {
    try {
      if (isNaN(Number(size))) {
        throw new Error("[ERROR] 숫자를 입력해야합니다.");
      }
      if (size < 3 && 20 < size) {
        throw new Error("[ERROR] 3이상 20이하의 size를 입력해여합니다.");
      }
      return size;
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return InputView.readBridgeSize();
    }
  }
}

module.exports = App;
