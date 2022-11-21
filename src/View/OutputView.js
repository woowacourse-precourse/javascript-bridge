const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  showStart() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  showMap(game) {
    let upside = [];
    let downside = [];
    game.bridge.forEach((direction, i) => {
      const result =
        i === game.bridge.length - 1 && !game.isSuccess ? 'X' : 'O';
      upside = [...upside, direction === 'U' ? result : ' '];
      downside = [...downside, direction === 'D' ? result : ' '];
    });
    Console.print(`[ ${upside.join(' | ')} ]\n[ ${downside.join(' | ')} ]`);
  },

  showResult(game) {
    Console.print('\n최종 게임 결과');
    this.showMap(game);
    Console.print(`\n게임 성공 여부: ${game.isSuccess ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${game.score}`);
    Console.close();
  },
};

module.exports = OutputView;
