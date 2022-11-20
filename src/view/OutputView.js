const { Console } = require('@woowacourse/mission-utils');
const { GAME } = require('../utils/constant');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  time: 0,
  tryCount: 1,
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map, isSuccess) {
    const { topSide, downSide } = this.filterMap(map, isSuccess);
    this.showMap(topSide, downSide);
  },

  showMap(topSide, downSide) {
    Console.print(`[ ${topSide.join(' | ')} ]`);
    Console.print(`[ ${downSide.join(' | ')} ]`);
  },

  filterMap(map, isSuccess) {
    const { topSide, downSide } = map;

    if (isSuccess) {
      if (topSide[this.time] === 'X') topSide[this.time] = ' ';

      if (downSide[this.time] === 'X') downSide[this.time] = ' ';
    }

    if (!isSuccess) {
      if (topSide[this.time] === 'O') topSide[this.time] = ' ';

      if (downSide[this.time] === 'O') downSide[this.time] = ' ';
    }

    this.time += 1;

    return { topSide, downSide };
  },

  initialization() {
    this.time = 0;
    this.tryCount += 1;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isDone, map) {
    const { topSide, downSide } = map;
    const result = isDone ? '성공' : '실패';

    this.showMap(topSide, downSide);
    Console.print(GAME.GAME_SUCCESS + result);
    Console.print(GAME.GAME_TRY_COUNT + this.tryCount);
    Console.close();
  },
};

module.exports = OutputView;
