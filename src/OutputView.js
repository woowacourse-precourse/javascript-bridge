const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  MAP_CHARACTER: {
    START: '[ ',
    MIDDLE: ' | ',
    END: ' ]',
    WHITE_SPACE: ' ',
    true: 'O',
    false: 'X',
  },
  print(message) {
    Console.print(message);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(currentMoveCount, userInput, callback) {
    let idx = 0;
    // const map = Array.from(
    //   { length: 2 },
    //   () => Array.from({ length: currentMoveCount + 1 }).fill(this.MAP_CHARACTER.WHITE_SPACE),
    // );
    const map = [[], []];

    const command = {
      U: 0,
      D: 1,
    };

    while (idx <= currentMoveCount) {
      const head = idx === 0 ? this.MAP_CHARACTER.START : '';
      const tail = idx === currentMoveCount ? this.MAP_CHARACTER.END : '';

      map[0].push(`${head}${this.MAP_CHARACTER.WHITE_SPACE}${tail}`);
      map[1].push(`${head}${this.MAP_CHARACTER.WHITE_SPACE}${tail}`);

      map[command[userInput]][idx] = `${head}${this.MAP_CHARACTER[callback(idx)]}${tail}`;
      idx += 1;
    }

    Console.print(map.map((el) => el.join(this.MAP_CHARACTER.MIDDLE)).join('\n'));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ isGameClear, tryCount }) {
    const gameClearMessage = {
      true: '성공',
      false: '실패',
    };

    Console.print(
      `게임 성공 여부: ${gameClearMessage[isGameClear]}\n총 시도한 횟수: ${tryCount}`,
    );
  },
};

module.exports = OutputView;
