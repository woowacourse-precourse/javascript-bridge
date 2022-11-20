const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/BridgeGame');

/**
 * mockQuestions
 * MissionUtils.Console.readLine을 mocking한다.
 */
const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((_, callback) => {
    callback(input);
  }), MissionUtils.Console.readLine);
};

/**
 * mockRandoms
 * MissionUtils.Random.pickNumberInRange를 mocking한다.
 */
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

/**
 * getLogSpy
 * MissionUtils.Console.print를 추적한다.
 */
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

/**
 * expectLogContains
 * logs와 같은 문자열을 출력하는지 확인한다.
 */
const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

/**
 * runException
 * 잘못된 입력이 주어졌을 때 에러메시지를 출력하는지 확인한다.
 */
const runException = (inputs, errorMessage) => {
  mockRandoms(['1', '0', '1']);
  mockQuestions(inputs);
  const logSpy = getLogSpy();
  const GAME = new BridgeGame();
  GAME.start();
  expectLogContains(getOutput(logSpy), [errorMessage]);
};

describe('BridgeGameTest1', () => {
  test('다리 길이 입력 예외 테스트', () => {
    const BRIDGE_SIZE_INPUT = ['1', '21', 'a', 'KK', '*'];
    BRIDGE_SIZE_INPUT.forEach((size) => {
      runException([size], '[ERROR] 유효하지 않은 다리 길이입니다.');
    });
  });
});

describe('BridgeGameTest2', () => {
  test('다리 이동 입력 예외 테스트', () => {
    const BRIDGE_MOVE_INPUT = ['u', 'UD', 'UAD', 'DDD', 'ㅁ'];
    BRIDGE_MOVE_INPUT.forEach((move) => {
      runException(['3', move], '[ERROR] U 또는 D를 입력하세요.');
    });
  });
});

describe('BridgeGameTest3', () => {
  test('다시 시도 입력 예외 테스트', () => {
    const BRIDGE_RETRY_INPUT = ['r', 'q', '3', 'RQ', 'QR', 'QQQ', 'RAQ', 'RA', '*'];
    BRIDGE_RETRY_INPUT.forEach((retry) => {
      runException(['3', 'D', retry], '[ERROR] R 또는 Q를 입력하세요');
    });
  });
});
