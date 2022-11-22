const MissionUtils = require("@woowacourse/mission-utils");

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
    let upBridge = currentBridge[0].join(' | ');
    let downBridge = currentBridge[1].join(' | ');
    MissionUtils.Console.print(`[ ${upBridge} ]`);
    MissionUtils.Console.print(`[ ${downBridge} ]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(currentBridge) {
    MissionUtils.Console.print('최종 게임 결과');
    let upBridge = currentBridge[0].join(' | ');
    let downBridge = currentBridge[1].join(' | ');
    MissionUtils.Console.print(`[ ${upBridge} ]`);
    MissionUtils.Console.print(`[ ${downBridge} ]\n`);
  },

  printGameStart() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
  },

  printInputSize() {
    MissionUtils.Console.print('다리의 길이를 입력해주세요.');
  },

  printInputMove() {
    MissionUtils.Console.print('이동할 칸을 선택해주세요. (위 : U, 아래 : D)');
  },

  printInputRetry() {
    MissionUtils.Console.print('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)');
  },

  printGameSuccess(gameSuccess) {
    const result = gameSuccess ? '성공' : '실패';
    MissionUtils.Console.print(`\n게임 성공 여부: ${result}`);
  },

  printTryCount(tryCount) {
    MissionUtils.Console.print(`총 시도한 횟수: ${tryCount}`);
  },

  printTotalGameResult(currentBridge, isSuccessed, tryCount) {
    this.printResult(currentBridge);
    this.printGameSuccess(isSuccessed);
    this.printTryCount(tryCount);
  }
};

module.exports = OutputView;
