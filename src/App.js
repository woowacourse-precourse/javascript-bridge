const InputView = require("./InputView");
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

class App {
  async play() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
    let bridgeSize = 0;
    while (isNaN(bridgeSize) || bridgeSize < 3 || bridgeSize > 20) {
      bridgeSize = await InputView.readBridgeSize();
      this.bridgeSizeValidate(bridgeSize);
    }
  }

  async bridgeSizeValidate(number) {
    try {
      if (3 <= number && number <= 20) {
        return number;
      } else {
        throw "[ERROR] 다리의 길이는 3~20 사이의 숫자여야 합니다.";
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = App;
