const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(
      "다리의 길이를 입력해주세요. \n",
      (length) => {
        const size = parseInt(length);
        this.checkSize(size);
        this.readMoving();
      }
    );
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
  readMoving() {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D) \n",
      (location) => {
        //console.log(location);
        this.checkSign(location);
        //MissionUtils.Console.close();
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
