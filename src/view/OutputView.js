const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(index, map) {
    const convertText = (raw) => {
      const text = JSON.stringify(raw.slice(0, index + 1));
      return text.replaceAll('"', '').replaceAll(',', ' | ').replaceAll('[', '[ ').replaceAll(']', ' ]');
    };
    MissionUtils.Console.print(convertText(map.up));
    MissionUtils.Console.print(convertText(map.down));
    MissionUtils.Console.print('');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(success, gameTry, bridge) {
    MissionUtils.Console.print('최종 게임 결과');
    bridge.print(bridge.getLength());
    MissionUtils.Console.print(`게임 성공 여부 : ${success ? '성공' : '실패'}\n`);
    MissionUtils.Console.print(`총 시도한 횟수: ${gameTry}`);
  },

  printGameStart() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
  },
};

module.exports = OutputView;
