const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, WORD } = require("./Constants");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.OUTPUT.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    Console.print(`[ ${map.upMaps} ]`);
    Console.print(`[ ${map.downMaps} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, isSuccess, numberOfTry) {
    Console.print(MESSAGE.OUTPUT.RESULT);
    Console.print(`[ ${map.upMaps} ]`);
    Console.print(`[ ${map.downMaps} ]`);
    Console.print(``);
    isSuccess
      ? Console.print(`${MESSAGE.OUTPUT.IS_SUCCESS}: ${WORD.SUCCESS_KR}`)
      : Console.print(`${MESSAGE.OUTPUT.IS_SUCCESS}: ${WORD.FAILURE_KR}`);
    Console.print(`${MESSAGE.OUTPUT.NUMBER_OF_TRY}: ${numberOfTry}`);
  },
};

module.exports = OutputView;
