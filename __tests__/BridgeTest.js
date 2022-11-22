const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker.js');
const BridgeGame = require('../src/BridgeGame.js');

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

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = [1, 1, 1, 1, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(5, mockGenerator);
    expect(bridge).toEqual(['U', 'U', 'U', 'U', 'D']);
  });

  test('bridgeMap에 비교 결과가 저장되는지 테스트', () => {
    const bridgeGame = new BridgeGame();
    const inputCommand = 'U';
    const compareResult = 'O';
    bridgeGame.addBridgeMap(inputCommand, compareResult);
    expect(bridgeGame.currentBridgeMap()).toEqual({ U: ['O'], D: [' '] });
  });

  test('재시도 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1]);
    mockQuestions(['3', 'U', 'U', 'R', 'U', 'D', 'U']);

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
    expectBridgeOrder(log, '[ O |   | O ]', '[   | O |   ]');
  });

  test('게임 실패 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 0]);
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
    expectBridgeOrder(log, '[ O |   |   ]', '[   | O | X ]');
  });
  test('재시도 후 게임 실패 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([1, 0, 1, 0]);
    mockQuestions(['4', 'U', 'D', 'D', 'R', 'U', 'D', 'U', 'U', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   | O | X ]',
      '[   | O |   |   ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[ O |   | O | X ]', '[   | O |   |   ]');
  });
});
