const { print } = require('./Utils');

const OutputView = {
  printMap(bg) {
    print(bg.showResult());
  },

  printResult(bg) {
    print('최종 게임 결과');
    print(bg.showResult());
    print(bg.finishGame());
  }
};

module.exports = OutputView;
