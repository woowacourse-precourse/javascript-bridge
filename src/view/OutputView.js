const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const { GAME_MESSAGE, DEFAULT } = require('../utils/constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  EMPTY: ' ',

  printGreeting() {
    Console.print(GAME_MESSAGE.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeGame, isSuccess) {
    let up = this.makeResultArr(bridgeGame, DEFAULT.UP);
    let down = this.makeResultArr(bridgeGame, DEFAULT.DOWN);

    if (!isSuccess) {
      up.push(this.getFailResult(bridgeGame, DEFAULT.UP));
      down.push(this.getFailResult(bridgeGame, DEFAULT.DOWN));
    }

    Console.print(this.makePrintFormat(up));
    Console.print(this.makePrintFormat(down));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  makeResultArr(bridgeGame, correct) {
    const bridge = bridgeGame.getBridge();
    const turn = bridgeGame.getTurn();

    let resultArr = [];

    for (let i = 1; i <= turn; i++) {
      const result = bridge[i] === correct ? this.SUCCESS : this.EMPTY;
      resultArr.push(result);
    }

    return resultArr;
  },

  makePrintFormat(result) {
    const str = [
      DEFAULT.BRACKET_LEFT,
      result.join(DEFAULT.BAR),
      DEFAULT.BRACKET_RIGHT,
    ].join(DEFAULT.EMPTY);

    return str;
  },

  printResult(bridgeGame, isSuccess, trialCount) {
    Console.print(GAME_MESSAGE.RESULT);
    this.printMap(bridgeGame, currentIsSuccess);

    Console.print(isSuccess ? GAME_MESSAGE.SUCCESS : GAME_MESSAGE.FAIL);
    Console.print(`${GAME_MESSAGE.ATTEMPT}${trialCount}`);
  },
};

module.exports = OutputView;
