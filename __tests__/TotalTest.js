const { Console, Random } = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
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

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 게임', () => {
  it('위쪽이 전부 성공하였을 때', () => {
    // given
    const logSpy = getLogSpy();
    mockRandoms([1, 1, 1]);
    mockQuestions(['3', 'U', 'U', 'U']);

    // when
    const app = new App();
    app.play();

    // then
    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O | O | O ]',
      '[   |   |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[ O | O | O ]', '[   |   |   ]');
  });

  it('한 번 실패후 재시작 그리고 마지막에 실패후 게임 종료', () => {
    // given
    const logSpy = getLogSpy();
    mockRandoms([1, 1, 1]);
    mockQuestions(['3', 'D', 'R', 'U', 'U', 'D', 'Q']);

    // when
    const app = new App();
    app.play();

    // then
    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O | O |   ]',
      '[   |   | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[ O | O |   ]', '[   |   | X ]');
  });
  it('다리 길이 4 중간에 한 번 실패후 마지막에 실패', () => {
    // given
    const logSpy = getLogSpy();
    mockRandoms([0, 0, 0, 1]);
    mockQuestions(['4', 'D', 'D', 'U', 'R', 'D', 'D', 'D', 'D', 'Q']);

    // when
    const app = new App();
    app.play();

    // then
    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[   |   |   |   ]',
      '[ O | O | O | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[   |   |   |   ]', '[ O | O | O | X ]');
  });

  describe('예외 테스트', () => {
    it('[Error] 공백을 입력했을 때', () => {
      runException(['']);
    });

    it('[Error] 범위를 벗어나는 숫자를 입력했을 때 예외 처리', () => {
      runException(['24']);
    });

    it('[Error] - 부호가 포함된 숫자를 입력했을 때 예외 처리', () => {
      runException(['-5']);
    });

    it('[Error] 불필요한 숫자가 포함되었을 때 예외 처리', () => {
      runException(['0005']);
    });
  });
});
