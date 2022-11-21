const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const { generate } = require("../src/BridgeRandomNumberGenerator");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.\n");
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (number) => {
      this.checkPlayerInput(number);
      const bridge = BridgeMaker.makeBridge(
        number,
        BridgeRandomNumberGenerator
      );
      console.log(bridge);
      this.readMoving();
    });
  },

  checkPlayerInput(input) {
    try {
      this.checkisNum(input);
      this.checkInRange(input);
    } catch (e) {
      MissionUtils.Console.print(e);
    }
  },

  checkisNum(input) {
    if (!parseInt(input)) throw "[ERROR] 숫자를 입력하세요";
  },

  checkInRange(input) {
    if (3 > parseInt(input) || parseInt(input) > 20)
      throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
  },

  readMoving() {
    MissionUtils.Console.readLine("이동할 칸을 선택해주세요.\n", (number) => {
      this.checkPlayerMove(number);
    });
  },

  checkPlayerMove(input) {
    if (input !== "U" || input !== "D") {
      throw "[ERROR] U 혹은 D을 입력해라!!";
    }
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요.\n",
      (number) => {
        this.checkPlayerInput(number);
      }
    );
  },
};

module.exports = InputView;
