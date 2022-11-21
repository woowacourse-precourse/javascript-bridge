const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/BridgeGame');
const BridgeMaker = require('../src/BridgeMaker');

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

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 게임 클래스 테스트', () => {
  test('다리 생성 테스트', () => {
    const randomNumbers = [0, 1, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['D', 'U', 'U']);
  });

  test('다리 이동 결과 출력 테스트', () => {
    const logSpy = getLogSpy();
    mockRandoms([0, 1, 0, 0]);
    mockQuestions(['4', 'D', 'U', 'D', 'D']);

    const bridgeGame = new BridgeGame();
    bridgeGame.inputBridgeSize();

    const log = getOutput(logSpy);
    expectBridgeOrder(log, '[   | O |   |   ]', '[ O |   | O | O ]');
  });
});
