const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const { ERROR, MESSAGE } = require('../src/constants');
const Validator = require('../src/Validator');

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

  app.play().then(() => {
    expectLogContains(getOutput(logSpy), ['[ERROR]']);
  });
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
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });

  // test('기능 테스트', () => {
  //   const logSpy = getLogSpy();
  //   mockRandoms([1, 0, 1]);
  //   mockQuestions(['3', 'U', 'D', 'U']);

  //   const app = new App();
  //   app.play().then(() => {
  //     const log = getOutput(logSpy);
  //     expectLogContains(log, [
  //       '최종 게임 결과',
  //       '[ O |   | O ]',
  //       '[   | O |   ]',
  //       '게임 성공 여부: 성공',
  //       '총 시도한 횟수: 1',
  //     ]);
  //     expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  //   });
  // });

  // test('예외 테스트', () => {
  //   runException(['a']);
  // });
});

describe('플레이어 입력값의 유효성 검사', () => {
  test('다리 사이즈 유효성 검사 - 정상 범위', () => {
    const inputs = [3, 10, 20];
    inputs.forEach((value) => {
      expect(Validator.checkBridgeSize(value)).toEqual(value);
    });
  });

  test('다리 사이즈 유효성 검사 - 오류 범위 ', () => {
    const inputs = [0, 1, 21];
    inputs.forEach((value) => {
      expect(() => {
        Validator.checkBridgeSize(value);
      }).toThrow(ERROR.INPUT_BRIDGE_SIZE);
    });
  });

  test('이동 방향 유효성 검사 - 정상 범위', () => {
    const inputs = ['X', 'K', 'G'];
    inputs.forEach((value) => {
      expect(() => {
        Validator.checkMovingDirection(value);
      }).toThrow(ERROR.INPUT_MOVING_DIRECTION);
    });
  });

  test('이동 방향 유효성 검사 - 오류 범위', () => {
    const inputs = ['D', 'U'];
    inputs.forEach((value) => {
      expect(Validator.checkMovingDirection(value)).toEqual(value);
    });
  });

  test('게임 재시도 or 종료 유효성 검사 - 정상 범위', () => {
    const inputs = ['R', 'Q'];
    inputs.forEach((value) => {
      expect(Validator.checkGameCommand(value)).toEqual(value);
    });
  });

  test('게임 재시도 or 종료 유효성 검사 - 오류 범위', () => {
    const inputs = ['X', 'K', 'G'];
    inputs.forEach((value) => {
      expect(() => {
        Validator.checkGameCommand(value);
      }).toThrow(ERROR.INPUT_GAME_COMMAND);
    });
  });

  test('게임 시작 메시지를 출력한다.', () => {
    const logSpy = getLogSpy();

    const app = new App();

    const log = getOutput(logSpy);
    app.play().then(() => {
      expectLogContains(log, [MESSAGE.ENTRY]);
    });
  });

  test('다리를 만든다.', () => {
    mockQuestions(['4']);

    const app = new App();

    app.play().then(() => {
      expect(app.game.result.getAsArray().length).toEqual(4);
    });
  });

  test('사용자가 이동할 칸이 이동할 수 있는 있는 칸인지 여부를 확인', () => {
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'D', 'U']);
    const app = new App();

    app.play().then(() => {
      expect(app.game.move(0, 'U')).toEqual(true);
    });
  });

  test('사용자가 게임을 진행할 수 있는지 위치값 확인', () => {
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'D']);
    const app = new App();

    app.play().then(() => {
      expect(app.isContinue()).toEqual(true);
    });
  });

  test('사용자의 이동한 칸이 이동할 수 있는 칸인지 확인', () => {
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'D', 'U']);
    const app = new App();

    app.play().then(() => {
      app.isSuccessFulMovement().then((res) => {
        expect(res).toEqual(true);
      });
    });
  });

  test('플레이어는 자신이 선택한 방향으로 이동한다.', () => {
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'U']);

    const app = new App();

    app.play().then(() => {
      expect([...app.game.result.getAsArray()]).toEqual([
        [0, { machine: 'U', player: 'U' }],
        [1, { machine: 'D', player: 'D' }],
        [2, { machine: 'U', player: 'U' }],
      ]);
    });
  });

  test('사용자가 게임을 다시 시작?', () => {
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'R', 'Q']);
    const app = new App();

    app.play().then(() => {
      app.isRetryCommand().then((res) => {
        expect(res).toEqual(true);
      });
    });
  });

  test('사용자가 게임 종료', () => {
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'Q']);
    const app = new App();

    app.play().then(() => {
      app.isRetryCommand().then((res) => {
        expect(res).toEqual(false);
      });
    });
  });

  test('사용자가 게임 재시도한다.', () => {
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'R']);
    const app = new App();

    app.game.result.getAsArray().forEach((v) => expect(v[1].player).toEqaul(null));
  });
});
