const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_START_LINE, OUTPUT_END_LINE, OUTPUT_IS_WIN_LINE, OUTPUT_TRY_COUNT_LINE } = require('../Constant');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printStart() {
    Console.print(OUTPUT_START_LINE);
  },

  printError(message) {
    Console.print(message);
    Console.close();
  },

  getMapUntilcurrentPosition(map, currentPosition) {
    return Object.values(map.getMap()).slice(0, currentPosition);
  },

  getUpMap(map, currentPosition) {
    return this.getMapUntilcurrentPosition(map, currentPosition).map((stage) => (stage.getMovingCommand() === 'U' ? stage.getStage().U : ' '));
  },

  getDownMap(map, currentPosition) {
    return this.getMapUntilcurrentPosition(map, currentPosition).map((stage) => (stage.getMovingCommand() === 'D' ? stage.getStage().D : ' '));
  },

  printMap(map, currentPosition) {
    Console.print(`[ ${this.getUpMap(map, currentPosition).join(' | ')} ]`);
    Console.print(`[ ${this.getDownMap(map, currentPosition).join(' | ')} ]\n`);
  },

  printEnd() {
    Console.print(OUTPUT_END_LINE);
  },

  printWin(isWin) {
    Console.print(OUTPUT_IS_WIN_LINE(isWin));
  },

  printTryCount(tryCount) {
    Console.print(OUTPUT_TRY_COUNT_LINE(tryCount));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isWin, tryCount) {
    this.printWin(isWin);
    this.printTryCount(tryCount);
    Console.close();
  },
};

module.exports = OutputView;
