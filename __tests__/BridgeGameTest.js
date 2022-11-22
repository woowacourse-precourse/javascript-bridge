const BridgeGame = require('../src/BridgeGame');
const InputView = require('../src/InputView');
const MissionUtils = require('@woowacourse/mission-utils');
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

describe('게임 로직', () => {
  test('checkEnd 메서드 테스트', () => {
    mockRandoms([0, 1, 1, 0]);
    mockQuestions(['4', 'D', 'U', 'U', 'D']);
    let bridgegame = new BridgeGame();
    InputView.readBridgeSize(bridgegame);
    expect(bridgegame.checkEnd()).toBe('END');

    mockRandoms([0, 1, 0, 0]);
    mockQuestions(['4', 'D', 'U', 'U']);
    bridgegame = new BridgeGame();
    InputView.readBridgeSize(bridgegame);
    expect(bridgegame.checkEnd()).toBe(true);
  });

  test('move메서드 테스트', () => {
    mockRandoms([0, 1, 1, 0]);
    mockQuestions(['4']);
    let bridgegame = new BridgeGame();
    InputView.readBridgeSize(bridgegame);
    expect(bridgegame.move('U')).toBe(false);
    expect(bridgegame.move('U')).toBe(true);
    expect(bridgegame.move('U')).toBe(true);
    expect(bridgegame.move('U')).toBe(false);
  });

  test('result메서드 테스트', () => {
    mockRandoms([0, 1, 1, 0]);
    mockQuestions(['4', 'D', 'U', 'U', 'D']);
    let bridgegame = new BridgeGame();
    InputView.readBridgeSize(bridgegame);
    expect(bridgegame.result()).toBe('성공');

    mockRandoms([0, 1, 1, 1]);
    mockQuestions(['4', 'D', 'U', 'U', 'D']);
    bridgegame = new BridgeGame();
    InputView.readBridgeSize(bridgegame);
    expect(bridgegame.result()).toBe('실패');
  });

  test('retry 테스트', () => {
    mockRandoms([0, 1, 1, 0]);
    mockQuestions(['4', 'D', 'U', 'D']);
    let bridgegame = new BridgeGame();
    InputView.readBridgeSize(bridgegame);
    expect(bridgegame.getTry()).toBe(1);
    expect(bridgegame.getHistory()).toEqual([
      ['D', true],
      ['U', true],
      ['D', false],
    ]);
    bridgegame.retry();
    expect(bridgegame.getTry()).toBe(2);
    expect(bridgegame.getHistory()).toEqual([]);
  });
});
