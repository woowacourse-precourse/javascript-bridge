const { Console } = require('@woowacourse/mission-utils');

const STRUCTURE = Object.freeze({
  FIRST: '[ ',
  LAST: ' ]',
  MIDDLE: ' | ',
});

const MESSAGE = Object.freeze({
  GAME_START: '다리 건너기 게임을 시작합니다.\n',
  TITLE_RESULT: '최종 게임 결과',
  PREFIX_SUCCESS: '게임 성공 여부: ',
  PREFIX_TRY: '총 시도한 횟수: ',
});

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  gameStart() {
    Console.print(MESSAGE.GAME_START);
  },

  nextLine() {
    Console.print('');
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(moveMap) {
    const { FIRST, LAST, MIDDLE } = STRUCTURE;

    for (const direction in moveMap) {
      Console.print(`${FIRST}${moveMap[direction].join(MIDDLE)}${LAST}`);
    }
    this.nextLine();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    Console.print(MESSAGE.TITLE_RESULT);
    OutputView.printMap(bridgeGame.moveMap);
    Console.print(`${MESSAGE.PREFIX_SUCCESS}${bridgeGame.result}`);
    Console.print(`${MESSAGE.PREFIX_TRY}${bridgeGame.try}`);
    Console.close();
  },
};

module.exports = OutputView;
