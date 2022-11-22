const MissionUtils = require("@woowacourse/mission-utils");

const Exception = {
  /**
   * 다리 길이가 유효한지 체크
   * @param {string} size 다리의 길이
   */
  checkVaildBridgeSize(size) {
    try {
      if (Number(size) < 3 || Number(size) > 20) {throw new Error();}
      if (!Number(size)) {throw new Error();}
    } catch {
      MissionUtils.Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
      return false;
    }
    return true;
  },

  /**
   * 이동할 칸에 대한 입력이 유효한지 체크
   * @param {string} input 위 또는 아래에 대한 입력값
   */
  checkVaildMoveInput(input) {

    try {
      if (input === "U" || input === "D") {
        return true;
      }
      throw new Error()
    } catch {
      MissionUtils.Console.print("[ERROR] 'U' 또는 'D' 를 입력하여야 합니다.");
      return false;
    }

  },

  /**
   * 게임 재시도에 대한 입력이 유효한지 체크
   * @param {string} input 게임을 다시 시도할 지 여부에 대한 입력값
   */
  checkVaildRetryInput(input) {

    try {
      if (input === "R" || input === "Q") {
        return true;
      }
      throw new Error()
    } catch {
      MissionUtils.Console.print("[ERROR] 'R' 또는 'Q' 를 입력하여야 합니다.");
      return false;
    }
  },
};

module.exports = Exception;
