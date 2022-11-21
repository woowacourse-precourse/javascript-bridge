const { Console } = require('@woowacourse/mission-utils');
const CONSTANT = require('../constant');

const { BUILD_BRIDGE_ERROR, MOVE_INPUT_ERROR, GAME_COMMAND_ERROR } = CONSTANT.ERROR_MESSAGE;
const { START_MESSAGE } = CONSTANT.NORMAL_MESSAGE;
const { FAIL, SUCCESS, SUCCESS_WHETHER, TOTAL_ATTEMPT, FINAL_RESULT } = CONSTANT.NORMAL_MESSAGE;
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printStartMessage() {
    Console.print(START_MESSAGE);
  },

  printMakeBridgeError() {
    Console.print(BUILD_BRIDGE_ERROR);
  },

  printMoveInputError() {
    Console.print(MOVE_INPUT_ERROR);
  },

  printGameCommandError() {
    Console.print(GAME_COMMAND_ERROR);
  },

  printMap(results) {
    results.forEach((result) => {
      Console.print(this.convertResult(result));
    });
    Console.print('');
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
  printResult(compareResult, executionCount, gameStatus) {
    Console.print(FINAL_RESULT);
    this.printMap(compareResult);
    Console.print(`${SUCCESS_WHETHER}${gameStatus ? FAIL : SUCCESS}`);
    Console.print(`${TOTAL_ATTEMPT}${executionCount}`);
    Console.close();
  },
};

module.exports = OutputView;
