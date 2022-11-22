const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(mapArray) {
    Console.print(this.creatMapUI(mapArray, 'U'));
    Console.print(this.creatMapUI(mapArray, 'D'));
  },

  creatMapUI(mapArray, side) {
    const UIArray = mapArray.map((element) => this.arrayToSymbol(element, side)).reverse();
    return '[' + UIArray.join('|') + ']';
  },

  arrayToSymbol(element, side) {
    if (element.selection === side && element.crossable === true) {
      return ' O ';
    }
    if (element.selection !== side && element.crossable === false) {
      return ' X ';
    }
    return '   ';
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isSuccess, trials, paths) {
    Console.print('최종 게임 결과');
    this.printMap(paths);

    Console.print(`게임 성공 여부: ${isSuccess ? '성공' : '실패'}`);
    Console.print('총 시도한 횟수: ' + trials);
  },

  printStartMessage() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },
};

module.exports = OutputView;
