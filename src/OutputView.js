const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(currentBridge) {
    Console.print('[ '+ currentBridge[0].join(' | ') + ' ]');
    Console.print('[ '+ currentBridge[1].join(' | ') + ' ]');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(currentBridge, count, isWin) {
    /**
     * @param {string[][]} currentBridge - 현재까지 진행된 다리 상태
     * @param {number} count - 총 시도한 횟수
     * @param {number} isWin - 게임의 결과. 성공: 1, 실패: 0
     */
    Console.print(`최종 게임 결과`);
    this.printMap(currentBridge);
    const result = isWin===1?'성공':'실패';
    Console.print(`게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${count}`);
  },
};

module.exports = OutputView;
