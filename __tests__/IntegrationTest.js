const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => {
  return [...logSpy.mock.calls].join('');
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

describe('기능 테스트 - 재시작, 에러 발생 상황', () => {
  test('(잘못된 입력 다시 입력) 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['1', '2', '3', 'a', 'U', 'd', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1'
    ]);

    expectLogContains(getOutput(logSpy), ['[ERROR]']);
    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  });

  test('(틀린 정담 - 재시도 - 정답) 기능 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'U', 'R', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 2'
    ]);

    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  });

  test('(틀린 정답 - 종료) 기능 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'U', 'Q', 'U', 'D', 'U']);

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
