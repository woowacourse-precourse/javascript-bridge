/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(size) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.", size);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    var moving;
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (move) => {
        this.isMoveChar(move);
        moving = move;
      }
    );
    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    var restart;
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (reset) => {
        this.isRestartChar(reset);
        restart = reset;
      }
    );
    return restart;
  },
  isMoveChar(upDown) {
    if (upDown !== "U" && upDown !== "D") {
      throw new Error("[ERROR] U와 D 중 하나의 문자를 입력하세요.");
    }
  },

  isRestartChar(restartQuit) {
    if (restartQuit !== "R" && restartQuit !== "Q") {
      throw new Error("[ERROR] R와 Q 중 하나의 문자를 입력하세요.");
    }
  },
};

module.exports = InputView;
