const { Console } = require('@woowacourse/mission-utils');
const { POSITIONS, MAP_STATE, OUTPUT_MSG, GAME_STATE } = require('./constants');
const { getMapState } = require('./Util');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(state, success) {
    for (let r = 0; r < POSITIONS.length; r += 1) {
      const map = state.map((element, ind) => {
        if (ind === state.length - 1)
          return getMapState(element === POSITIONS[1 - r], success, true);
        return getMapState(element === POSITIONS[1 - r], success);
      });
      Console.print(`${MAP_STATE.prefix}${map.join('|')}${MAP_STATE.postfix}`);
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(state, success, tryCount) {
    Console.print(OUTPUT_MSG.finish);
    this.printMap(state, success);
    Console.print('');
    const finalState = success ? GAME_STATE.success : GAME_STATE.fail;
    Console.print(`${OUTPUT_MSG.finialState}${finalState}`);
    Console.print(`${OUTPUT_MSG.totalTryCount}${tryCount}`);
    Console.close();
  }
};

module.exports = OutputView;
