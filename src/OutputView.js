const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGame) {
    this.printOneSideMap(bridgeGame, "U");
    this.printOneSideMap(bridgeGame, "D");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    MissionUtils.Console.print("\n최종 게임 결과");
    this.printMap(bridgeGame);

    const GAME_RESULT_WORD = (bridgeGame.crossedAll()) ? "성공" : "실패";
    MissionUtils.Console.print(`\n게임 성공 여부: ${GAME_RESULT_WORD}`);
    MissionUtils.Console.print(`총 시도한 횟수: ${bridgeGame.count}`);
  },

  /**
   * 게임 시작 메시지를 출력하는 함수
   */
  printStartMessage() {
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
  },

  /**
   * 특정 줄의 map을 출력하는 함수
   * @param {BridgeGame} bridgeGame 브릿지게임 객체
   * @param {string} side 위나 아래를 뜻하는 문자(U or D)
   */
  printOneSideMap(bridgeGame, side) {
    const COMPARISON_RESULT = bridgeGame.getComparisonResultArray(side);
    const MAP_TO_PRINT = "[ " + COMPARISON_RESULT.join(" | ") + " ]";

    MissionUtils.Console.print(MAP_TO_PRINT);
  }
};

module.exports = OutputView;
