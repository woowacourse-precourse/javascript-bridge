const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('../src/OutputView');
const App = require('../src/App');

describe('OutputView 기능 테스트', () => {
  test('게임 종료 시 성공 여부, 시도 횟수 출력 기능 테스트', () => {
    const logs = ['게임 성공 여부: 실패', '총 시도한 횟수: 56'];
    const logSpy = getLogSpy();
    const testWinStatus = false;
    const testTrialCount = 56;
    OutputView.printGameSuccessFail(testWinStatus, testTrialCount);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('printGameResult 메서드 integration 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O | X ]',
      '[   |   ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1'
    ]);
    expectBridgeOrder(log, '[ O | X ]', '[   |   ]');
  });
});

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);
  expect(upsideIndex).toBeLessThan(downsideIndex);
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
};
