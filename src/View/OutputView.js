const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  game: null,

  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  printMap() {
    let upside = [];
    let downside = [];
    this.game.bridge.forEach((direction, i) => {
      const result =
        i === this.game.bridge.length - 1 && !this.game.isSuccess ? 'X' : 'O';
      upside = [...upside, direction === 'U' ? result : ' '];
      downside = [...downside, direction === 'D' ? result : ' '];
    });
    Console.print(`[ ${upside.join(' | ')} ]`);
    Console.print(`[ ${downside.join(' | ')} ]`);
  },

  printResult() {
    Console.print('\n최종 게임 결과');
    this.printMap();
    Console.print(`\n게임 성공 여부: ${this.game.isSuccess ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${this.game.score}`);
    Console.close();
  },
};

module.exports = OutputView;
