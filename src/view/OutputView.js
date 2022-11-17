const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  message(type) {
    return {
      GAME_START: '다리 건너기 게임을 시작합니다.\n',
      RESULT: '최종 게임 결과',
    }[type] ?? new Error('[ERROR] 존재하지 않는 타입입니다.');
  },

  printGameStart() {
    Console.print(this.message('GAME_START'));
  },

  printMap(crossingBridge) {
    Console.print(`${crossingBridge}\n`);
  },

  printResult({ crossingBridge, attempt, result }) {
    Console.print(this.message('RESULT'));
    this.printMap(crossingBridge);
    Console.print(result);
    Console.print(attempt);
  },
};

module.exports = OutputView;
