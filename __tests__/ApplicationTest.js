const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const { Console, Random } = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((_, callback) => {
    callback(input);
  }), Console.readLine);
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const runException = (inputs) => {
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const app = new App();

  app.play();

  expectLogContains(getOutput(logSpy), ['[ERROR]']);
};

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    console.log(received)
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  console.log(upsideIndex, downsideIndex)

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe("다리 건너기 테스트", () => {
  test("다리 생성 테스트", () => {
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test('기능 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(["3", "U", "D", "U"]);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 1',
    ]);
    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  });

  test('예외 테스트', () => {
    runException(['a']);
  });
});

describe('계단 사이즈 유효성 테스트', () => {
  test('3 이하의 숫자를 입력했을 때 오류가 발생한다.', () => {
    runException(['1'], ['[ERROR] 3부터 20 사이의 숫자를 입력해주세요.']);
  });
  test('20 이상의 숫자를 입력했을 때 오류가 발생한다.', () => {
    runException(['21'], ['[ERROR] 3부터 20 사이의 숫자를 입력해주세요.']);
  });
});

describe('움직이는 방향 유효성 테스트', () => {
  test('숫자를 입력하면 오류가 발생한다.', () => {
    runException(['4', '1'], ['[ERROR] U 또는 D를 입력해주세요.']);
  });
  test('소문자 u를 입력하면 오류가 발생한다.', () => {
    runException(['4', 'u'], ['[ERROR] U 또는 D를 입력해주세요.']);
  });
  test('소문자 d를 입력하면 오류가 발생한다.', () => {
    runException(['4', 'd'], ['[ERROR] U 또는 D를 입력해주세요.']);
  });
});

describe('재시작/종료 유효성 테스트', () => {
  test('숫자를 입력하면 오류가 발생한다.', () => {
    mockRandoms(['1', '0', '1']);
    runException(['3', 'D', '1'], ['[ERROR] Q 또는 R을 입력해주세요.']);
  });
  test('소문자 q를 입력하면 오류가 발생한다.', () => {
    runException(['3', 'D', 'q'], ['[ERROR] Q 또는 R을 입력해주세요.']);
  });
  test('소문자 r를 입력하면 오류가 발생한다.', () => {
    runException(['3', 'D', 'r'], ['[ERROR] Q 또는 R을 입력해주세요.']);
  });
});

describe('재시작 개수 테스트', () => {
  test('2번 재시작하면 시도 횟수는 2번이라고 나온다.', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'D', 'R', 'U', 'D', 'U']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   | O ]',
      '[   | O |   ]',
      '게임 성공 여부: 성공',
      '총 시도한 횟수: 2',
    ]);
  });
});

describe('실패한 게임 결과 출력 테스트', () => {
  test('게임을 이기지 못했을 경우 마지막으로 선택한 위치는 X로 표시된다.', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1', '0']);
    mockQuestions(['4', 'U', 'D', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   |   ]',
      '[   | O | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 1',
    ]);
  });
});
