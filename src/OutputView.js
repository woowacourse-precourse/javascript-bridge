const { Console } = require('@woowacourse/mission-utils');

/**
 * 제약사항
 * 1. 제공된 OutputView 객체를 활용해 구현해야 한다.
 * 2. OutputView의 파일 경로는 변경할 수 있다.
 * 3. OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 4. 값 출력을 위해 필요한 메서드를 추가할 수 있다.
 */

const OutputView = {
  UPPER: [],
  LOWER: [],

  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  printError(err) {
    Console.print(err);
  },

  printClose() {
    Console.close();
  },

  processMap(move) {
    const printFlag = move.success ? 'O':'X';
    if(move.moving === 'U') {
      OutputView.UPPER.push(printFlag);
      OutputView.LOWER.push(' ');
    } else if(move.moving === 'D') {
      OutputView.UPPER.push(' ');
      OutputView.LOWER.push(printFlag);
    }
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveInfo) {
    OutputView.UPPER = [];
    OutputView.LOWER = [];
    moveInfo.forEach((move) => {
      this.processMap(move);
    })
    Console.print(`[ ${OutputView.UPPER.join(' | ')} ]`);
    Console.print(`[ ${OutputView.LOWER.join(' | ')} ]\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(moveInfo, tryCnt, successFlag) {
    Console.print('최종 게임 결과');
    this.printMap(moveInfo);
    Console.print(`게임 성공 여부: ${successFlag? '성공':'실패'}`);
    Console.print(`총 시도한 횟수: ${tryCnt}`);
    Console.close();
  },
};

module.exports = OutputView;
