const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE, RESULT_MESSAGE } = require('./Message');

const { print, close } = Console;

const sketchMap = (moveHistory, dir) => {
  const line = moveHistory
    .map(movement => {
      if (movement === dir) return 'O';
      return ' ';
    })
    .join(' | ');
  return `[ ${line} ]`;
};
const OutputView = {
  printStart() {
    print(OUTPUT_MESSAGE.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveHistory, isCorrect) {
    if (isCorrect) {
      const topLine = sketchMap(moveHistory, 'U');
      const bottomLine = sketchMap(moveHistory, 'D');
      print(topLine);
      print(bottomLine);
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(tryNum, moveHistory, isCorrect) {
    print(RESULT_MESSAGE.GAME_RESULT);
    OutputView.printMap(moveHistory, isCorrect);
    print(`${RESULT_MESSAGE.IS_SUCCESS}성공`);
    print(`${RESULT_MESSAGE.TOTAL_TRY}${tryNum}`);
    close();
  },
};

module.exports = OutputView;
