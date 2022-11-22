const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./utils/constants');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const CORRECT = ' O |';
const INCORRECT = ' X |';
const SPACE = '   |';

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeHistory, wrongDirection) {
    const line = this.setBridgeMap(bridgeHistory, wrongDirection);
    Console.print(line[0]);
    Console.print(line[1]);
  },

  setBridgeMap(bridgeHistory, wrongDirection) {
    let line = ['[', '['];
    bridgeHistory.map((direction) => {
      line = this.makeOMap(line, direction);
    });
    if (wrongDirection) {
      line = this.makeXMap(line, wrongDirection);
    }

    return this.makeMapClose(line);
  },

  makeOMap(line, direction) {
    if (direction === 'U') {
      line[0] += CORRECT;
      line[1] += SPACE;
    } else {
      line[0] += SPACE;
      line[1] += CORRECT;
    }

    return line;
  },

  makeXMap(line, wrongDirection) {
    if (wrongDirection === 'U') {
      line[0] += INCORRECT;
      line[1] += SPACE;
    } else {
      line[0] += SPACE;
      line[1] += INCORRECT;
    }

    return line;
  },

  makeMapClose(line) {
    line[0] = line[0].slice(0, -1);
    line[1] = line[1].slice(0, -1);
    line[0] += ']';
    line[1] += ']';

    return line;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isSuccess, bridgeHistory, attempts, direction) {
    Console.print(MESSAGE.GAMERESULT);
    OutputView.printMap(bridgeHistory, direction);
    Console.print(MESSAGE.GAMESUCCESS + isSuccess);
    Console.print(MESSAGE.GAMEATTEMPTS + attempts);
    Console.close();
  },
};

module.exports = OutputView;
