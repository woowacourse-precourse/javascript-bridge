const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = require('../utils/Message');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printTest(msg) {
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
    const topLine = [];
    const bottomLine = [];

    for (let i = 0; i < moveList.length; i++) {
      if (moveList[i] === 'U' && moveList[i] === bridge[i]) {
        topLine.push('O');
        bottomLine.push(' ');
      }
      if (moveList[i] === 'D' && moveList[i] === bridge[i]) {
        topLine.push(' ');
        bottomLine.push('O');
      }
      if (moveList[i] === 'U' && moveList[i] !== bridge[i]) {
        topLine.push('X');
        bottomLine.push(' ');
      }
      if (moveList[i] === 'D' && moveList[i] !== bridge[i]) {
        topLine.push(' ');
        bottomLine.push('X');
      }
    }
    MissionUtils.Console.print(`[ ${topLine.join(' | ')} ]`);
    MissionUtils.Console.print(`[ ${bottomLine.join(' | ')} ]`);
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, moveList, totalNumber) {
    const resultMessage = bridge === moveList ? '성공' : '실패';
    // this.printTest(bridge);
    // this.printTest(moveList);

    MissionUtils.Console.print(MESSAGE.io.end);
    this.printMap(bridge, moveList);
    MissionUtils.Console.print(`${MESSAGE.io.result} ${resultMessage}`);
    MissionUtils.Console.print(`${MESSAGE.io.totalNumber} ${totalNumber}`);
  },
};

module.exports = OutputView;
