const MU = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(currentLocation) {
    MU.Console.print(`[ ${currentLocation[0].join(' | ')} ]`);
    MU.Console.print(`[ ${currentLocation[1].join(' | ')} ]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * @param {number} result 1은 성공 0은 실패
   */
  printResult(currentLocation, result, totalCount) {
    MU.Console.print('최종 게임 결과');
    this.printMap(currentLocation);
    const RSLT = result == 1 ? '성공' : '실패';
    MU.Console.print(`\n게임 성공 여부: ${RSLT}`);
    MU.Console.print(`총 시도한 횟수: ${totalCount}`);
    return MU.Console.close();
  },

  printBridgeSizeError(bridgeLen) {
    if(bridgeLen < 3 || bridgeLen > 20) throw '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.';
    if(isNaN(bridgeLen)) throw '[ERROR] 다리의 길이는 숫자를 입력해야 합니다.';
  },

  printMovingError(nextStep) {
    if(nextStep != 'U' && nextStep != 'D') throw '[ERROR] U 혹은 D만 입력 가능합니다.';
   },
  
  printGameCommandError(restart) {
    if(restart != 'R' && restart != 'Q') throw '[ERROR] R 혹은 Q만 입력 가능합니다.';
  },
};

module.exports = OutputView;
