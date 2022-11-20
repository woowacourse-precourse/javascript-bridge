/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = {
  startSentence() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  },
  lengthBridgeSentence() {
    MissionUtils.Console.print("다리의 길이를 입력해주세요.");
  },
  pickMoveSentence() {
    MissionUtils.Console.print("이동할 칸을 선택해주세요. (위: U, 아래: D)");
  },
  retrySentence() {
    MissionUtils.Console.print(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)"
    );
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeResult) {
    MissionUtils.Console.print(`[ ${bridgeResult[0].join(" | ")} ]`);
    MissionUtils.Console.print(`[ ${bridgeResult[1].join(" | ")} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeResult, count, resultMessage) {
    MissionUtils.Console.print("최종 게임 결과");
    MissionUtils.Console.print(`[ ${bridgeResult[0].join(" | ")} ]`);
    MissionUtils.Console.print(`[ ${bridgeResult[1].join(" | ")} ]`);
    MissionUtils.Console.print(`게임 성공 여부: ${resultMessage}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${count}`);
  },
};

module.exports = OutputView;
