const { print } = require('./utils');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const START_MESSAGE = '다리 건너기 게임을 시작합니다.\n';
const END_MESSAGE = '최종 게임 결과';

const OutputView = {
  printStart() {
    print(START_MESSAGE);
  },

  printMap(map, location) {
    const [firstLine, secondLine] = map;
    const curFirstLine = firstLine.slice(0, location).join(' | ');
    const curSecondLine = secondLine.slice(0, location).join(' | ');
    print('[ ' + curFirstLine + ' ]');
    print('[ ' + curSecondLine + ' ]\n');
  },

  printEnd() {
    print(END_MESSAGE);
  },

  printResult(isSuccess, tryCount) {
    const result = isSuccess ? '성공' : '실패';
    print('게임 성공 여부: ' + result);
    print('총 시도한 횟수: ' + tryCount);
  },
};

module.exports = OutputView;
