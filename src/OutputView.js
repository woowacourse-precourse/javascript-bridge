const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT, GAME_OUTCOME, LETTER_SIGN } = require('./Constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  CONNECTING_CHARACTER: ' | ',

  printMap(upperMapArray, lowerMapArray) {
    Console.print(`[ ${upperMapArray.join(this.CONNECTING_CHARACTER)} ]`);
    Console.print(`[ ${lowerMapArray.join(this.CONNECTING_CHARACTER)} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(upperMapArray, lowerMapArray, attemptNumber) {
    const totalMapArray = [...upperMapArray, ...lowerMapArray];
    const outcome = totalMapArray.includes(LETTER_SIGN.WRONG) ? GAME_OUTCOME.FAIL : GAME_OUTCOME.SUCCESS;
    Console.print(OUTPUT.FINAL_GAME_RESULT);
    this.printMap(upperMapArray, lowerMapArray);
    Console.print(OUTPUT.GAME_SUCCESS_OR_NOT(outcome));
    Console.print(OUTPUT.TOTAL_ATTEMPT_NUMBER(attemptNumber));
  }
};

module.exports = OutputView;
