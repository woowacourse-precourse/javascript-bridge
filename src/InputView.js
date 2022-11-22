const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
function generateRandomNumber() {
  return BridgeRandomNumberGenerator.generate();
}
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    const size = MissionUtils.Console.readLine(
      "다리의 길이를 입력해주세요. \n",
      (length) => {
        let size = parseInt(length);
        this.checkSize(size);
        const FIELD = BridgeMaker.makeBridge(size, generateRandomNumber);
        this.readMoving(FIELD, [], 1);
      }
    );
    return size;
  },

  checkSize(size) {
    if (size < 3 || size > 20 || size !== Number(size)) {
      MissionUtils.Console.print(
        "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다."
      );
      this.readBridgeSize();
    }
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(FIELD, select, trial) {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D) \n",
      (answer) => {
        this.checkSign(answer);
        select.push(answer);
        bridgeGame = new BridgeGame();
        if (bridgeGame.move(FIELD, select)) {
          OutputView.printMap(FIELD, select);
          trial += 1;
          this.readMoving();
        }
      }
    );
  },

  checkSign(location) {
    if (location !== "U" && location !== "D") {
      MissionUtils.Console.print(
        "[ERROR] 올바른 값이 아닙니다. U 또는 D로 답변해주세요."
      );
      this.readMoving();
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  //readGameCommand() {},
};

module.exports = InputView;
