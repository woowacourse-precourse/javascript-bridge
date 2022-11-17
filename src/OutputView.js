const MissionUtils = require("@woowacourse/mission-utils");
const BridegConverter = require("./BridgeConverter");
const { Console } = MissionUtils;

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임의 시작 안내 메세지를 출력한다.
   */
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   *
   */
  printMap(answer, inputs) {
    const bridge = BridegConverter.convertToBridge(answer, inputs);
    const stringified = bridge.map((b) => b.join(" | "));
    Console.print(stringified.join("\n"));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(answer, inputs, trial) {},
};

module.exports = OutputView;
