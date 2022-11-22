const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeGame = require('../src/BridgeGame');
const exceptionModule = require('../src/Exception');

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

  test('사용자가 정확한 답 U 입력시(정답 : [U, D, U])', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.bridgeMake(['U', 'D', 'U']);
    bridgeGame.move('U');
    expect([bridgeGame.bridegeUp, bridgeGame.bridegeDown]).toEqual([
      ['O'],
      [' '],
    ]);
  });

  test('사용자가 오답 D 입력시(정답 : [U, D, U])', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.bridgeMake(['U', 'D', 'U']);
    bridgeGame.move('D');
    expect([bridgeGame.bridegeUp, bridgeGame.bridegeDown]).toEqual([
      [' '],
      ['X'],
    ]);
  });

  test('사용자가 순차적으로 U,D,U 입력시(정답 : [U, D, U])', () => {
    const bridgeGame = new BridgeGame();
    bridgeGame.bridgeMake(['U', 'D', 'U']);
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('U');
    console.log([bridgeGame.bridegeUp, bridgeGame.bridegeDown]);
    expect([bridgeGame.bridegeUp, bridgeGame.bridegeDown]).toEqual([
      ['O', '|', ' ', '|', 'O'],
      [' ', '|', 'O', '|', ' '],
    ]);
  });

  test('예외 테스트 : 사용자가 3~20 이내 숫자 입력시', () => {
    expect(() => exceptionModule.bridgeSize('1')).toThrow(
      '[ERROR] 다리 생성을 위해 3~20이내 숫자를 입력해주세요'
    );
  });
  test('예외 테스트 : 사용자가 다리 사이즈 입력할때 문자 입력시', () => {
    expect(() => exceptionModule.bridgeSize('d')).toThrow(
      '[ERROR] 다리 생성을 위해 3~20이내 숫자를 입력해주세요'
    );
  });
  test('예외 테스트 : 사용자가 다리이동 입력할때 숫자나 다른 문자 입력시', () => {
    expect(() => exceptionModule.onlyAlphabet('e', 'move')).toThrow(
      '[ERROR] U 또는 D를(을) 입력해주세요.'
    );
  });
  test('예외 테스트 : 사용자가 게임실패후 다시시작 입력할때 숫자나 다른 문자 입력시', () => {
    expect(() => exceptionModule.onlyAlphabet('3', 'retry')).toThrow(
      '[ERROR] Q 또는 R를(을) 입력해주세요.'
    );
  });
});
