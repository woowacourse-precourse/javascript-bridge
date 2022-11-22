/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(history) {
    // { position: this.#next, upOrDown, isSuccess }
    let upPrint = '[';
    let downPrint = '[';
    history.forEach((item) => {
      if (item.position > 0) {
        upPrint += `|`;
        downPrint += `|`;
      }
      const char = item.isSuccess ? 'O' : 'X';
      if (item.upOrDown === 'U') {
        upPrint += ` ${char} `;
        downPrint += `   `;
      } else {
        upPrint += `   `;
        downPrint += ` ${char} `;
      }
    });
    upPrint += ']';
    downPrint += ']';

    Console.print(upPrint);
    Console.print(downPrint);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(history, tryCount) {
    const result = history[history.length - 1].isSuccess ? '성공' : '실패';
    Console.print(`최종 게임 결과`);
    OutputView.printMap(history);
    Console.print(`게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },

  printGameStartMessage() {
    Console.print(`다리 건너기 게임을 시작합니다.`);
  },
};

module.exports = OutputView;
