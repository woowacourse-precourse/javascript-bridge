const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) =>
      acc.mockImplementationOnce((_, callback) => {
        callback(input);
      }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('값 일치 테스트', () => {
  test('다리 길이가 20개이며 한 번에 모두 성공할 경우', () => {
    const size = 20;
    const logSpy = getLogSpy();
    mockRandoms([...Array(size).fill(1)]);
    mockQuestions([size, ...Array(size).fill('U')]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O | O | O | O | O | O | O | O | O | O | O | O | O | O | O | O | O | O | O | O ]',

      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ]);
  });

  test('다리 길이가 20개이며 100번 시도 후 성공할 경우', () => {
    const size = 20;
    const logSpy = getLogSpy();
    mockRandoms([...Array(size).fill(1)]);
    mockQuestions([size, ...Array(100).fill(['D', 'R']).flat(), ...Array(size).fill('U')]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O | O | O | O | O | O | O | O | O | O | O | O | O | O | O | O | O | O | O | O ]',

      '게임 성공 여부: 성공',
      '총 시도한 횟수: 101',
    ]);
  });
});
