const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');

// readLine 통해 들어온 값들 answer로.
const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn(); // MissionUtils.Console.readline 함수를 모킹.
  // reduce로 들어온 결과값을 탐색하며 결과들 도출
  answers.reduce((acc, input) => {
    // 다양한 경우를 테스트하는 것이기에, 호출마다 다른 결과값 리턴하도록 하기 위해 mockImplementationOnce() 사용.
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
  const logSpy = jest.spyOn(MissionUtils.Console, 'print'); // spyOn: 특정 함수가 호출되었는가? 어떻게 호출 되었는가?
  logSpy.mockClear(); // 다음 테스트에 영향을 줄 수도 있는 mock 정리.
  return logSpy;
};

const getOutput = (logSpy) => {
  // calls통해 알 수 있는 내용: 함수 호출 횟수, 호출 시 전달된 인수
  return [...logSpy.mock.calls].join(''); // 모킹된 함수 내 mock.calls의 배열 값들을 join해주기 위함.
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

const expectBridgeOrder = (received, upside, downside) => {
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
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'U']);

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

  test('다리 이동 시 예외처리 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions([3, 'U', 'F']); // 다리 이동 값이 잘못 들어갔을 경우

    const app = new App();
    app.play();
    const log = getOutput(logSpy);
    expectLogContains(log, ['[ERROR] U와 D중 한 글자만 입력해 주세요.']);
  });

  test('재시작 시 예외처리 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions([3, 'U', 'D', 'D', 'E']); // 재시작 여부 확인 값이 잘못 들어갔을 경우

    const app = new App();
    app.play();
    const log = getOutput(logSpy);
    expectLogContains(log, ['[ERROR] R와 Q중 한 글자만 입력해 주세요.']);
  });

  test('예외 테스트', () => {
    runException(['a']);
  });
});
