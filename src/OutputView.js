const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE_STRING } = require('./constants');

const OutputView = {
  START_MESSAGE: '다리 건너기 게임을 시작합니다.',
  RESULT_MESSAGE: {
    head: '\n최종 게임 결과',
    true: '성공',
    false: '실패',
  },
  MAP_RESULT: {
    true: 'O',
    false: 'X',
  },

  printError(errorMessage) {
    Console.print(`[ERROR] ${errorMessage}`);
  },

  printStart() {
    Console.print(OutputView.START_MESSAGE);
  },

  printMap(moveList) {
    OutputView.printLocalMap(moveList, BRIDGE_STRING.up);
    OutputView.printLocalMap(moveList, BRIDGE_STRING.down);
  },

  printLocalMap(moveList, location) {
    const map = [];
    moveList.forEach((move) => {
      if (move.moving === location) {
        map.push(OutputView.MAP_RESULT[move.result]);
      } else {
        map.push(' ');
      }
    });

    Console.print(`[ ${map.join(' | ')} ]`);
  },

  printResult(moveList, tryCount) {
    const lastMoveResult = moveList[moveList.length - 1].result;

    Console.print(OutputView.RESULT_MESSAGE.head);
    OutputView.printMap(moveList);
    Console.print(`\n게임 성공 여부: ${OutputView.RESULT_MESSAGE[lastMoveResult]}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
