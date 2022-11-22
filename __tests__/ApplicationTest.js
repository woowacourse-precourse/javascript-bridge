const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const { MESSAGE, ERROR } = require('../src/constants');
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

// describe('다리 건너기 테스트', () => {
//   test('다리 생성 테스트', () => {
//     const randomNumbers = [1, 0, 0];
//     const mockGenerator = randomNumbers.reduce((acc, number) => {
//       return acc.mockReturnValueOnce(number);
//     }, jest.fn());

//     const bridge = BridgeMaker.makeBridge(3, mockGenerator);
//     expect(bridge).toEqual(['U', 'D', 'D']);
//   });

//   test('기능 테스트', () => {
//     const logSpy = getLogSpy();
//     mockRandoms([1, 0, 1]);
//     mockQuestions(['3', 'U', 'D', 'U']);

//     const app = new App();
//     app.play().then(() => {
//       const log = getOutput(logSpy);
//       expectLogContains(log, [
//         '최종 게임 결과',
//         '[ O |   | O ]',
//         '[   | O |   ]',
//         '게임 성공 여부: 성공',
//         '총 시도한 횟수: 1',
//       ]);
//       expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
//     });
//   });

//   test('예외 테스트', () => {
//     runException(['a']);
//   });
// });

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
});
