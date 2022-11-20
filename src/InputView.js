/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let size = 0;
    MissionUtils.Console.readLine("", (answer) => {
      size = answer;
      try {
        if (size < 3 || size > 20 || isNaN(size))
          throw "[ERROR] 3이상 20이하의 숫자만 입력바랍니다.";
      } catch (err) {
        MissionUtils.Console.print(err);
        this.readBridgeSize();
      }
    });
    return size;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let move = "";
    MissionUtils.Console.readLine("", (answer) => {
      move = answer;
      try {
        if (!(move === "U") || !(move === "D"))
          throw "[ERROR] U와 D 중 입력바랍니다.";
      } catch (err) {
        MissionUtils.Console.print(err);
        this.readMoving();
      }
    });
    return move;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let command = "";
    MissionUtils.Console.readLine("", (answer) => {
      command = answer;
      try {
        if (!(command === "R") || !(command === "Q"))
          throw "[ERROR] R와 Q 중 입력바랍니다.";
      } catch (err) {
        MissionUtils.Console.print(err);
        this.readGameCommand();
      }
    });
    return command;
  },
};

module.exports = InputView;
