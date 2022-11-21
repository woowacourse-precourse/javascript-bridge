const { print } = require('./utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const START_MESSAGE = '다리 건너기 게임을 시작합니다.\n';

const OutputView = {
  printStart() {
    print(START_MESSAGE);
  },

  printMap(map, location) {
    const [firstLine, secondLine] = map;
    const curFirstLine = firstLine.slice(0, location).join(' | ');
    const curSecondLine = secondLine.slice(0, location).join(' | ');
    print('[ ' + curFirstLine + ' ]');
    print('[ ' + curSecondLine + ' ]');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
