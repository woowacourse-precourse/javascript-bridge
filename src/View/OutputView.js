const { Console } = require('@woowacourse/mission-utils');
const { MSG } = require('../utils/messages');

const OutputView = {
  showStart() {
    Console.print(MSG.GAME.START);
  },

  makeMap(game) {
    return game.bridge.reduce(
      (direction, current, i) => {
        const result =
          i === game.bridge.length - 1 && !game.isSuccess ? 'X' : 'O';
        const [nU, nD] = current === 'U' ? [result, ' '] : [' ', result];
        return {
          upside: [...direction['upside'], nU],
          downside: [...direction['downside'], nD],
        };
      },
      { upside: [], downside: [] }
    );
  },

  showMap(game) {
    const { upside, downside } = this.makeMap(game);
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
