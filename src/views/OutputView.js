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
  printMakeBridgeError() {
    Console.print('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  },

  printMoveInputError() {
    Console.print('[ERROR] 이동할 칸은 (위: U, 아래: D)만 입력가능합니다');
  },

  printMap(results) {
    results.forEach((result) => {
      Console.print(this.convertResult(result));
    });
  },

  Sortation(result, index) {
    if (index !== 0) return `| ${result} `;

    return ` ${result} `;
  },

  convertResult(compareResult) {
    let result = '';
    compareResult.forEach((status, index) => {
      result += this.Sortation(status, index);
    });
    return `[${result}]`.replace(/N/g, ' ');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print('최종 게임 결과');
  },
};

module.exports = OutputView;
