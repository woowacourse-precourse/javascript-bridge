const MissionUtils = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const UPPER_TRACK = 1;
const LOWER_TRACK = 0;

const OutputView = {
  printGameStart() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(tracks) {
    MissionUtils.Console.print(tracks[UPPER_TRACK]);
    MissionUtils.Console.print(tracks[LOWER_TRACK]);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(win, count, tracks) {
    MissionUtils.Console.print("최종 게임 결과");
    MissionUtils.Console.print(tracks[UPPER_TRACK]);
    MissionUtils.Console.print(tracks[LOWER_TRACK]);
    MissionUtils.Console.print(`게임 성공 여부: ${win}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${count}`);
  },

  printException(error) {
    if (error === "숫자가 아님") {
      MissionUtils.Console.print("[ERROR] 다리의 길이는 숫자여야 합니다.");
    }
    if (error === "범위 에러") {
      MissionUtils.Console.print(
        "[ERROR] 다리의 길이는 3에서 20 사이의 숫자여야 합니다."
      );
    }
    if (error === "U 또는 D가 아님") {
      MissionUtils.Console.print(
        "[ERROR] 이동할 칸은 U 또는 D여야 합니다."
      );
    }
  },
};

module.exports = OutputView;
