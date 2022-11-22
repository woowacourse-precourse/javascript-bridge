const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Const');

const OutputView = {

  print(string) {
    Console.print(string);
  },

  printMap(bridgeGame, bridge) {
    let upMarks = [];
    let downMarks = [];
    for (let i = 0; i < bridgeGame.steps; i++) {
      upMarks.push(bridge[i].element[0]);
      downMarks.push(bridge[i].element[1]);
    }
    this.print(upMarks.join('').replaceAll('][', '|'));
    this.print(downMarks.join('').replaceAll('][', '|'));
  },

  printResult(bridgeGame) {
    this.print('\n' + `${MESSAGE.RESULT_PASS} ${bridgeGame.result}`);
    this.print(`${MESSAGE.RESULT_TRIALS} ${bridgeGame.trials}`);
  },

  end(bridgeGame, bridge) {
    this.print('\n' + MESSAGE.RESULT_TITLE);
    this.printMap(bridgeGame, bridge);
    this.printResult(bridgeGame);
    Console.close();
  }

};

module.exports = OutputView;
