const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("../src/InputView");
const OutputView = require("../src/OutputView");
class App {
  play() {
    OutputView.printStart();
    let size = InputView.readBridgeSize();
    size = this.validateSize(size);

    MissionUtils.Console.print("pass");
  }

  validateSize(size) {
    try {
      if (isNaN(Number(size))) {
        MissionUtils.Console.print("[ERROR] 숫자를 입력해야합니다.");
        throw new Error("[ERROR] 숫자를 입력해야합니다.");
      }
      if (size < 3 && 20 < size) {
        MissionUtils.Console.print(
          "[ERROR] 3이상 20이하의 size를 입력해여합니다."
        );
        throw new Error("[ERROR] 3이상 20이하의 size를 입력해여합니다.");
      }
      return size;
    } catch {
      return InputView.readBridgeSize();
    }
  }
}

module.exports = App;
