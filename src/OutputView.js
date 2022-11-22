const MissionUtils = require("@woowacourse/mission-utils");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  // 다리 정보 저장 (위 / 아래)
  bridge: [[], []],

  /**
   * 게임 시작 문구를 출력한다.
   */
  printStart() {
    MissionUtils.Console.print("다리건너기 게임을 시작합니다.");
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * result : O / X 값을 전달받는다
   */
  printMap(userInput, result) {
    if (userInput === "D") {
      this.bridge[0].push(" ");
      this.bridge[1].push(result);
    }
    if (userInput === "U") {
      this.bridge[0].push(result);
      this.bridge[1].push(" ");
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
