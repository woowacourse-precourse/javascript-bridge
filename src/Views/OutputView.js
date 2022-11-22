const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('../utils/Message');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printError(msg) {
    MissionUtils.Console.print(msg);
  },

  printStartMessage() {
    MissionUtils.Console.print(MESSAGE.io.start);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, moveList) {
    let map = [[], []];

    moveList.forEach((element, idx) => {
      map = this.pushLine(element, bridge[idx], map);
    });

    MissionUtils.Console.print(`[ ${map[0].join(' | ')} ]`);
    MissionUtils.Console.print(`[ ${map[1].join(' | ')} ]`);
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, moveList, totalNumber) {
    let resultMessage = '';
    resultMessage = bridge.toString() === moveList.toString() ? '성공' : '실패';

    MissionUtils.Console.print(MESSAGE.io.end);
    this.printMap(bridge, moveList);
    MissionUtils.Console.print(`${MESSAGE.io.result} ${resultMessage}`);
    MissionUtils.Console.print(`${MESSAGE.io.totalNumber} ${totalNumber}`);
  },

  pushLine(move, bridge, map) {
    if (move === 'U' && move === bridge) {
      map[0].push('O');
      map[1].push(' ');
    }
    if (move === 'D' && move === bridge) {
      map[0].push(' ');
      map[1].push('O');
    }
    if (move === 'U' && move !== bridge) {
      map[0].push('X');
      map[1].push(' ');
    }
    if (move === 'D' && move !== bridge) {
      map[0].push(' ');
      map[1].push('X');
    }
    return map;
  },
};

module.exports = OutputView;
