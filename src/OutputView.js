const { Console } = require('@woowacourse/mission-utils');
const { START_MESSAGE, OUTPUT_MESSAGE } = require('./Constant');
const OutputView = {
  printStart() {
    Console.print(START_MESSAGE);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(results) {
    Console.print('[' + this.printUpMap(results) + ']');
    Console.print('[' + this.printDownMap(results) + ']');
  },

  printUpMap(results) {
    let up_result = [];
    results.forEach(result => {
      [UP_DOWN, O_X] = [result[0], result[1]];
      if (UP_DOWN === 'U' && O_X === 'O') up_result.push(' O ');
      else if (UP_DOWN === 'U' && O_X === 'X') up_result.push(' X ');
      else up_result.push('   ');
    });
    return up_result.join('|');
  },

  printDownMap(results) {
    let down_result = [];
    results.forEach(result => {
      [UP_DOWN, O_X] = [result[0], result[1]];
      if (UP_DOWN === 'D' && O_X === 'O') down_result.push(' O ');
      else if (UP_DOWN === 'D' && O_X === 'X') down_result.push(' X ');
      else down_result.push('   ');
    });
    return down_result.join('|');
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(results, cnt) {
    Console.print(OUTPUT_MESSAGE.RESULT);
    this.printMap(results);
    const SUCCESS = this.checkSuccess(results);
    SUCCESS
      ? Console.print(OUTPUT_MESSAGE.SUCCESS)
      : Console.print(OUTPUT_MESSAGE.FAIL);
    Console.print(OUTPUT_MESSAGE.COUNT_TRY + cnt);
  },

  checkSuccess(results) {
    let SUCCESS = true;
    results.forEach(result => {
      if (result[1] === 'X') SUCCESS = false;
    });
    return SUCCESS;
  },
};

module.exports = OutputView;
