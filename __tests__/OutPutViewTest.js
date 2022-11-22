/* eslint-disable max-lines-per-function */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('../src/view/OutputView');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('출력 테스트', () => {
  test('이동 경로 출력', () => {
    const process = [
      ['O', ' ', ' '],
      [' ', 'O', 'O'],
    ];
    const results = ['[ O |   |   ]', '[   | O | O ]'];

    const logSpy = getLogSpy();

    OutputView.printMap(process);
    results.forEach((result) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
    });
  });
  test('최종 결과 출력', () => {
    const process = [
      ['O', 'O', ' '],
      [' ', ' ', 'X'],
    ];
    const success = '실패';
    const tryCount = 1;
    const results = ['최종 게임 결과', '[ O | O |   ]', '[   |   | X ]', '게임 성공 여부'];

    const logSpy = getLogSpy();

    OutputView.printResult(tryCount, success, process);
    results.forEach((result) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
    });
  });
});
