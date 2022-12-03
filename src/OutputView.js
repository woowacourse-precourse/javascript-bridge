const { print } = require('./Utils');

const OutputView = {
  printMap(bg) {
    print(bg.showResult());
  },

  printResult(bg) {
    const { isEndGame, tryCount } = bg.getGameResult();
    print('최종 게임 결과');
    this.printMap(bg);
    print(`게임 성공 여부: ${isEndGame}\n총 시도한 횟수: ${tryCount}`);
  }
};

module.exports = OutputView;
