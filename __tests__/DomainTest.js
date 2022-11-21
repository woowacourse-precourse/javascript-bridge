const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/Controllers/BridgeGame');
const Model = require('../src/Models/Model');
const InputView = require('../src/Views/InputView');
const BridgeMaker = require('../src/BridgeMaker');
const GameView = require('../src/Views/GameView');
const OutputView = require('../src/Views/OutputView');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  // eslint-disable-next-line arrow-body-style
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  // eslint-disable-next-line arrow-body-style
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  console.log('getLogSpy');
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
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

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

describe('1. 다리 생성하기', () => {
  test.each([[['15c']], [['길게']], [['five']]])(
    '사용자가 3과 20사이 숫자로 다리 길이를 입력했는지 확인했다.',
    (input) => {
      const model = new Model();
      const gameView = new GameView(new InputView(), new OutputView());
      const bridgeGame = new BridgeGame(model, gameView);
      mockQuestions(input);
      expect(() => bridgeGame.getBridgeSize()).toThrow('[ERROR]');
    },
  );
  test('다리 생성 테스트', () => {
    const randomNumbers = ['1', '0', '0'];
    // eslint-disable-next-line arrow-body-style
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D']);
  });
});

describe('3. 플레이어가 이동할 칸 선택하기', () => {
  test.skip.each([[['Up']], [['down']], [['△']]])(
    '사용자가 대문자 U나 D를 입력했는지 확인했다.',
    (input) => {
      const model = new Model();
      const gameView = new GameView(new InputView(), new OutputView());
      const bridgeGame = new BridgeGame(model, gameView);
      mockQuestions(input);
      expect(() => bridgeGame.move()).toThrow(
        '[ERROR] 대문자 U나 D만 입력 가능합니다.',
      );
    },
  );
  test('다리 출력 테스트', () => {
    const logSpy = getLogSpy();
    const model = new Model();
    const gameView = new GameView(new InputView(), new OutputView());
    const bridgeGame = new BridgeGame(model, gameView);
    mockQuestions(['3', 'U', 'D', 'D']);
    mockRandoms(['1', '0', '0']);

    bridgeGame.getBridgeSize();
    bridgeGame.start();
    const log = getOutput(logSpy);
    expectLogContains(log, ['[ O |   |   ]', '[   | O | O ]']);
    expectBridgeOrder(log, '[ O |   |   ]', '[   | O | O ]');
  });
});

describe('4. 잘못된 칸을 밟았을 때', () => {
  test.each([[['r']], [['다시']], [['Restart'], ['Quit']]])(
    '사용자가 대문자 R이나 Q를 입력했는지 확인했다.',
    (input) => {
      const model = new Model();
      const gameView = new GameView(new InputView(), new OutputView());
      const bridgeGame = new BridgeGame(model, gameView);
      mockQuestions(input);
      expect(() => bridgeGame.askUserRetry()).toThrow(
        '[ERROR] 대문자 R이나 Q만 입력 가능합니다.',
      );
    },
  );
});
