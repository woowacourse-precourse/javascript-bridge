const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/BridgeGame');
const { MESSAGE, ERROR } = require('../src/constants');

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
  const game = new BridgeGame();
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

describe('플레이어 입력값의 유효성 검사', () => {
  test('게임 시작 메시지를 출력한다.', () => {
    const logSpy = getLogSpy();

    const game = new BridgeGame();
    game.proceed();

    const log = getOutput(logSpy);
    game.proceed().then(() => {
      expectLogContains(log, [MESSAGE.ENTRY]);
    });
  });

  test('다리 길이 - 예외처리', () => {
    mockQuestions(['2', '31', '0']);
    const logSpy = getLogSpy();
    const game = new BridgeGame();

    game.getBridgeSize().then(() => {
      expectLogContains(getOutput(logSpy), [ERROR.INPUT_BRIDGE_SIZE]);
    });
  });

  test('주어진 길이의 다리를 만든다', () => {
    const input = ['4', '5'];
    const result = [4, 5];
    mockQuestions(input);

    input.forEach((_, i) => {
      const game = new BridgeGame();

      game.makeBridge().then(() => {
        expect(game.bridge.length).toEqual(result[i]);
      });
    });
  });

  test('이동할 칸 - 예외처리', () => {
    mockQuestions(['a', 'B', 'C']);

    const logSpy = getLogSpy();

    const game = new BridgeGame();

    game.getMovingDirection().then(() => {
      expectLogContains(getOutput(logSpy), [ERROR.INPUT_MOVING_DIRECTION]);
    });
  });
});
