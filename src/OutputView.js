const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeGame) {
    this.print(`게임 성공 여부: ${bridgeGame.result}`);
    this.print(`총 시도한 횟수: ${bridgeGame.trials}`);
  },

  print(string) {
    Console.print(string);
  },

  end(bridgeGame, bridge) {
    this.print('\n' + '최종 게임 결과');
    this.printMap(bridgeGame, bridge);
    this.printResult(bridgeGame);
    Console.close();
  }
};

module.exports = OutputView;
