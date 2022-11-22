const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { COMMAND, MESSAGE } = require('../src/Constants');

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

describe('다리 건너기 테스트', () => {
  test('사용자가 입력한 값이 이동할 수 있는 칸인 경우 O로, 이동할 수 없는 칸인 경우 X로 표시한다.', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 1]);
    mockQuestions(['4', 'U', 'D', 'U', 'D']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, ['[ O |   | O |   ]', '[   | O |   | X ]']);
  });

  test('사용자가 게임 재시작 여부에 대문자 Q를 입력하면 게임을 종료한다.', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 1]);
    mockQuestions(['4', 'U', 'D', 'U', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   | O |   ]',
      '[   | O |   | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1',
    ]);
  });
});

