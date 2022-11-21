const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, OPTION, PROGRESS_MAP, RESULT } = require('../utils/constants');
const { createBlueprint } = require('../utils/bridgeHandler');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
    Console.print(MESSAGE.BLANK);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(progressData) {
    const progressMap = this.createMap(progressData);
    Console.print(progressMap.up);
    Console.print(progressMap.down);
    Console.print(MESSAGE.BLANK);
  },

  createMap(progressData) {
    const upRow = this.drawMap(progressData, OPTION.UP);
    const downRow = this.drawMap(progressData, OPTION.DOWN);
    const upString = `[${upRow.join(PROGRESS_MAP.SEPARATOR)}]`;
    const downString = `[${downRow.join(PROGRESS_MAP.SEPARATOR)}]`;

    return { up: upString, down: downString };
  },

  drawMap(progressData, position) {
    const blueprint = createBlueprint(progressData.length);
    const progressMap = [...blueprint].map((_, index) => {
      const data = progressData[index];
      if (data.select !== position) return PROGRESS_MAP.BLANK;

      return data.alive ? PROGRESS_MAP.ALIVE : PROGRESS_MAP.DIE;
    });

    return progressMap;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(progressData, playCount, gameResult) {
    Console.print(RESULT.TITLE);
    this.printMap(progressData);
    Console.print(RESULT.GAME_RESULT(gameResult));
    Console.print(RESULT.PLAY_COUNT(playCount));
    Console.close();
  },
};

module.exports = OutputView;
