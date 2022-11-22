const { Console } = require('@woowacourse/mission-utils');

const OUTPUT_MESSAGE = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.\n',
  gameResult: '최종 게임 결과',
  successOrFailure: '게임 성공 여부',
  attemptsCount: '총 시도한 횟수',
});

const MOVE_RESULT = Object.freeze({
  success: 'O',
  failure: 'X',
  notSelected: ' ',
  seperator: ' | ',
});

const GAME_RESULT = Object.freeze({
  success: '성공',
  failure: '실패',
});

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printMap(map) {
    const [upperPart, lowerPart] = this.getParts(map);

    Console.print(`[ ${upperPart.join(MOVE_RESULT.seperator)} ]`);
    Console.print(`[ ${lowerPart.join(MOVE_RESULT.seperator)} ]\n`);
  },

  getParts(map) {
    const parts = map.map(([direction, movingState]) => {
      const mark = movingState ? MOVE_RESULT.success : MOVE_RESULT.failure;
      const currentPart = [mark, MOVE_RESULT.notSelected];

      return direction === 'U' ? currentPart : currentPart.reverse();
    });

    const upperPart = parts.map(([upper]) => upper);
    const lowerPart = parts.map(([, lower]) => lower);

    return [upperPart, lowerPart];
  },

  printResult({ map, attempts, isSuccess }) {
    const gameResult = isSuccess ? GAME_RESULT.success : GAME_RESULT.failure;

    Console.print(OUTPUT_MESSAGE.gameResult);
    this.printMap(map);

    Console.print(`${OUTPUT_MESSAGE.successOrFailure}: ${gameResult}`);
    Console.print(`${OUTPUT_MESSAGE.attemptsCount}: ${attempts}`);
  },
};

module.exports = OutputView;
