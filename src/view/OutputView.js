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

const OutputView = {
  gameStart() {
    Console.print(MESSAGE.GAME_START);
  },

  nextLine() {
    Console.print('');
  },

  print(message) {
    Console.print(message);
  },

  printMap(moveMap) {
    const { FIRST, LAST, MIDDLE } = STRUCTURE;

    moveMap.forEach((value) => {
      Console.print(`${FIRST}${value.join(MIDDLE)}${LAST}`);
    });
    this.nextLine();
  },

  printResult({ moveMap, result, tryCount }) {
    Console.print(MESSAGE.TITLE_RESULT);
    OutputView.printMap(moveMap);
    Console.print(`${MESSAGE.PREFIX_SUCCESS}${result}`);
    Console.print(`${MESSAGE.PREFIX_TRY}${tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
