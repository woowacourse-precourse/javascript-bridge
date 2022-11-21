const { print, close } = require('./utils');
const { RESULT_GROUP } = require('./enums');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

const START_MESSAGE = '다리 건너기 게임을 시작합니다.\n';
const END_MESSAGE = '최종 게임 결과';

const IS_SUCCEED_MESSAGE = '게임 성공 여부: ';
const TRY_COUNT_MESSAGE = '시도 횟수: ';

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
    const result = isSuccess ? RESULT_GROUP.SUCCESS : RESULT_GROUP.FAIL;
    print(IS_SUCCEED_MESSAGE + result);
    print(TRY_COUNT_MESSAGE + tryCount);
    close();
  },
};

module.exports = OutputView;
