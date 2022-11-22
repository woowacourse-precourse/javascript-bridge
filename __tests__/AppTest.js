/* eslint max-lines-per-function: 0 */
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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('다리 건너기 기능 테스트', () => {
  test('재시도 성공 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'D', 'R', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[ O |   |   ]',
      '[   | O | X ]',
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 2',
    ]);
  });

  test('실패 종료 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '[ O |   |   ]',
      '[   | O | X ]',
      '최종 게임 결과',
      '[ O |   |   ]',
      '[   | O | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1',
    ]);
  });
});
