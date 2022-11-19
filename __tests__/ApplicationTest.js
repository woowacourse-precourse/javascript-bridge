const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');

const mockQuestions = answers => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = numbers => {
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

const getOutput = logSpy => {
  return [...logSpy.mock.calls].join('');
};

const runException = inputs => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach(log => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  console.log(received);
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = ['1', '0', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  test('기능 테스트', () => {
    const randoms = [
      ['1', '0', '1'],
      ['1', '1', '1'],
      ['0', '1', '1'],
      ['0', '0', '1'],
      ['0', '0', '0'],
    ];
    const inputs = [
      ['3', 'U', 'D', 'U'],
      ['3', 'U', 'U', 'U'],
      ['3', 'D', 'U', 'U'],
      ['3', 'D', 'D', 'U'],
      ['3', 'D', 'D', 'D'],
    ];
    const results = [
      [
        '최종 게임 결과',
        '[ O |   | O ]',
        '[   | O |   ]',
        '게임 성공 여부: 성공',
        '총 시도한 횟수: 1',
      ],
      [
        '최종 게임 결과',
        '[ O | O | O ]',
        '[   |   |   ]',
        '게임 성공 여부: 성공',
        '총 시도한 횟수: 1',
      ],
      [
        '최종 게임 결과',
        '[   | O | O ]',
        '[ O |   |   ]',
        '게임 성공 여부: 성공',
        '총 시도한 횟수: 1',
      ],
      [
        '최종 게임 결과',
        '[   |   | O ]',
        '[ O | O |   ]',
        '게임 성공 여부: 성공',
        '총 시도한 횟수: 1',
      ],
      [
        '최종 게임 결과',
        '[   |   |   ]',
        '[ O | O | O ]',
        '게임 성공 여부: 성공',
        '총 시도한 횟수: 1',
      ],
    ];
    const orders = [
      ['[ O |   | O ]', '[   | O |   ]'],
      ['[ O | O | O ]', '[   |   |   ]'],
      ['[   | O | O ]', '[ O |   |   ]'],
      ['[   |   | O ]', '[ O | O |   ]'],
      ['[   |   |   ]', '[ O | O | O ]'],
    ];

    const app = new App();

    randoms.forEach((number, i) => {
      const logSpy = getLogSpy();
      mockRandoms(number);
      mockQuestions(inputs[i]);
      app.play();
      const log = getOutput(logSpy);
      expectLogContains(log, results[i]);
      expectBridgeOrder(log, orders[i][0], orders[i][1]);
    });
  });

  test('다리 길이 입력 예외 테스트', () => {
    const inputs = [
      ['a'],
      ['1'],
      ['2'],
      ['21'],
      ['22'],
      ['23'],
      ['ㅁ'],
      [';'],
      [''],
      [0],
      [true],
      [false],
    ];

    inputs.forEach(input => runException(input));
  });

  test('이동 방향 입력 예외 테스트', () => {
    const inputs = [
      ['3', 1],
      ['3', 'u'],
      ['3', 'ㅕ'],
      ['3', 'd'],
      ['3', 'ㅇ'],
    ];

    inputs.forEach(input => runException(input));
  });

  test('재시작 입력 예외 테스트', () => {
    mockRandoms(['1', '0', '1']);
    const inputs = [
      ['3', 'D', 'r'],
      ['3', 'D', 'ㄱ'],
      ['3', 'D', 'q'],
      ['3', 'D', 'ㅂ'],
    ];

    inputs.forEach(input => runException(input));
  });
});
