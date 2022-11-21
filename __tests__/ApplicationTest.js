const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeGame = require('../src/BridgeGame');
const InputView = require('../src/InputView');
const {
  mockQuestions,
  mockRandoms,
  getLogSpy,
  getOutput,
  runException,
  expectBridgeOrder,
  expectLogContains,
} = require('./lib/utils');
const { status, step } = require('../src/lib/constants');

describe('다리 생성 테스트', () => {
  const randomNumbers = [1, 0, 0]

  test(`[${randomNumbers.map(
    (number) => step[number],
  )}]를 생성해야 한다`, () => {
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const bridge = BridgeMaker.makeBridge(3, mockGenerator);

    expect(bridge).toEqual(['U', 'D', 'D']);
  });
});

describe('다리 게임 테스트', () => {
  test('false 값이 아닌 매개변수와 같이 호출되면 moves 길이가 증가해야 한다.', () => {
    const bridgeGame = new BridgeGame();

    bridgeGame.move('U');
    expect(bridgeGame.moves).toHaveLength(1);

    bridgeGame.move('U');
    expect(bridgeGame.moves).toHaveLength(2);
  });

  test('재시작하면 moves는 초기화된다.', () => {
    const bridgeGame = new BridgeGame();

    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.retry();

    expect(bridgeGame.moves).toEqual([]);
  });

  test(`실패하면 ${status.READ_COMMAND}를 반환해야 한다`, () => {
    const bridgeGame = new BridgeGame(['U', 'U', 'U']);

    bridgeGame.move('U');
    bridgeGame.move('D');

    expect(bridgeGame.getStatus()).toEqual(status.READ_COMMAND);
  });

  test(`성공하면 ${status.FINISHED}를 반환해야 한다`, () => {
    const bridgeGame = new BridgeGame(['U', 'U', 'U']);

    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.move('U');

    expect(bridgeGame.getStatus()).toEqual(status.FINISHED);
  });

  test(`결과가 정해지지 않았다면 ${status.READ_MOVE}를 반환해야 한다`, () => {
    const bridgeGame = new BridgeGame(['U', 'U', 'U']);

    bridgeGame.move('U');
    bridgeGame.move('U');

    expect(bridgeGame.getStatus()).toEqual(status.READ_MOVE);
  });
});

describe('다리 건너기 테스트', () => {
  test('다리 길이가 유효하지 않다면 반복적으로 입력 받아야 한다.', () => {
    const logSpy = getLogSpy();
    mockQuestions(['undefined', '', '2', '200', '3']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [InputView.error.BRIDGE_SIZE.repeat(4)]);
  });

  test('횟수 1번만에 성공한다.', () => {
<<<<<<< HEAD
    const logSpy = getLogSpy()
    mockRandoms([1, 0, 1])
    mockQuestions(['3', 'U', 'D', 'U'])
=======
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'U']);
>>>>>>> fc92d14 (style: Airbnb 표준 스타일 적용)

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

  test('횟수 2번만에 성공한다.', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'D', 'R', 'U', 'D', 'U']);

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

  test('2번 시도 후에 실패한다.', () => {
    const logSpy = getLogSpy();
    mockRandoms(['1', '0', '1']);
    mockQuestions(['3', 'U', 'D', 'D', 'R', 'U', 'D', 'D', 'Q']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '최종 게임 결과',
      '[ O |   |   ]',
      '[   | O | X ]',
      '게임 성공 여부: 실패',
      '총 시도한 횟수: 2',
    ]);
    expectBridgeOrder(log, '[ O |   |   ]', '[   | O | X ]');
  });
});
