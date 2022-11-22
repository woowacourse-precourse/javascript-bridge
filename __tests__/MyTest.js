const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const PlayerMove = require('../src/PlayerMove');
const BridgeGame = require('../src/BridgeGame');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((_, callback) => {
    callback(input);
  }), MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
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
    expect(received).toEqual(expect.stringContaining(log));
  });
};

const expectBridgeOrder = (received, upside, downside) => {
  const upsideIndex = received.indexOf(upside);
  const downsideIndex = received.indexOf(downside);

  expect(upsideIndex).toBeLessThan(downsideIndex);
};

describe('다리 건너기 테스트', () => {
  test('다리를 생성하는 기능', () => {
    const randomNumbers = ['1', '1', '0', '0', '1'];
    const mockGenerator = randomNumbers.reduce((acc, number) => acc.mockReturnValueOnce(number), jest.fn());
    const bridge = BridgeMaker.makeBridge(5, mockGenerator);

    expect(bridge).toEqual(['U', 'U', 'D', 'D', 'U']);
  });

  test('플레이어가 이동한 칸이 건널 수 있는 칸인지 확인하는 기능', () => {
    const randomNumbers = ['1', '1', '0', '0', '1'];
    const mockGenerator = randomNumbers.reduce((acc, number) => acc.mockReturnValueOnce(number), jest.fn());
    const bridge = BridgeMaker.makeBridge(5, mockGenerator);
    const result = [];

    bridge.forEach((move, index) => {
      result.push(PlayerMove.movePossible(move, index, bridge));
    });

    expect(result).toEqual([true, true, true, true, true]);
  });

  test('플레이어가 현재까지 이동한 경로를 얻는 기능', () => {
    const randomNumbers = ['1', '1', '0', '0', '1'];
    const mockGenerator = randomNumbers.reduce((acc, number) => acc.mockReturnValueOnce(number), jest.fn());
    const bridge = BridgeMaker.makeBridge(5, mockGenerator);
    const { upBridgeRoute, downBridgeRoute } = PlayerMove.getCurrentRoute(3, bridge, false);

    expect(upBridgeRoute).toEqual(['O', 'O', ' ', 'X']);
    expect(downBridgeRoute).toEqual([' ', ' ', 'O', ' ']);
  });

  test('플레이어가 이동하는 기능', () => {
    const randomNumbers = ['1', '1', '0', '0', '1'];
    const mockGenerator = randomNumbers.reduce((acc, number) => acc.mockReturnValueOnce(number), jest.fn());
    const bridge = BridgeMaker.makeBridge(5, mockGenerator);
    const bridgeGame = new BridgeGame(5, bridge);
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('D');
    bridgeGame.move('U');
    const { upBridgeRoute, downBridgeRoute } = bridgeGame.currentRoute;
    expect(upBridgeRoute).toEqual(['O', 'O', ' ', 'X']);
    expect(downBridgeRoute).toEqual([' ', ' ', 'O', ' ']);
  });

  test('게임을 재시작하는 기능', () => {
    const bridgeGame = new BridgeGame(5);
    const beforeBridge = bridgeGame.bridge;
    const beforeTryCount = bridgeGame.tryCount;

    bridgeGame.retry();

    const afterBridge = bridgeGame.bridge;
    const afterTryCount = bridgeGame.tryCount;

    expect(beforeBridge).toEqual(afterBridge);
    expect(beforeTryCount + 1).toEqual(afterTryCount);
  });

  test('다리의 길이를 입력할 때 숫자가 아닌 값을 입력', () => {
    runException(['string']);
  });

  test('다리의 길이를 입력할 때 3 ~ 20 범위를 벗어난 값을 입력', () => {
    runException(['2']);
  });
});
