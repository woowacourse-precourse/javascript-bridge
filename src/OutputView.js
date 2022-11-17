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
   *
   * 최종게임 결과를 출력하려면
   * 1. 성공/실패 여부와*
   * 2. 총 시도한 횟수와*
   * 3. 게임 맵(answer,input)을 가져와야한다.*
   * => 그럼 총 네개의 인자를 가져와야하는데 어떻게 해야할까.*
   * 실패여부를 answer과 input을 비교하여서 계산해낼 수 있지 않을까?*
   */
  printResult(answer, inputs, trial) {
    Console.print("최종 게임 결과");
    const bridge = BridegConverter.convertToBridge(answer, inputs);

    Console.print(`게임 성공 여부: `);
    Console.print(`총 시도한 횟수: `);
  },
};

module.exports = OutputView;
