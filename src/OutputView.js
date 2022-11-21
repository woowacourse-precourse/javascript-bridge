const { Console } = require('@woowacourse/mission-utils');


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
    this.print(`게임 성공 여부: ${bridgeGame.result}`);
    this.print(`총 시도한 횟수: ${bridgeGame.trials}`);
  },

  end(bridgeGame, bridge) {
    this.print('\n' + '최종 게임 결과');
    this.printMap(bridgeGame, bridge);
    this.printResult(bridgeGame);
    Console.close();
  }

};

module.exports = OutputView;
