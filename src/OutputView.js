const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printOpening() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(movingState) {
    [movingState.upState, movingState.downState].forEach((state) => {
      this.printState(state);
    })
  },

  printState(state) {
    const map = this.stringConversion(state);
    Console.print(map);
  },

  stringConversion(state) {
    let conversionValue = '[ '
    state.forEach((element, index) => {
      conversionValue += `${element}`
      index === state.length - 1 ? conversionValue += ' ]' : conversionValue += ' | '
    })
    return conversionValue;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() { },

  printError(e) {
    Console.print(e + '\n');
  },
};

module.exports = OutputView;
