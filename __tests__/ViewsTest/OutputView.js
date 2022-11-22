const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('../../src/views/OutputView');
const MESSAGES = require('../../src/constants/Messages');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const logSpy = getLogSpy();

describe('출력 테스트', () => {
  test('시작 문구 출력', () => {
    OutputView.printStartMessage();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(MESSAGES.start));
  });

  test('결과 출력', () => {
    OutputView.printResult();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(MESSAGES.start));
  });
});
