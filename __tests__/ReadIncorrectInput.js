const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGameController = require('../src/controller/BridgeGameController');

const mockInput = (answers) => {
  MissionUtils.Console.readLine = jest.fn();

  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((_, callback) => callback(input));
  }, MissionUtils.Console.readLine);
};

const mockRandom = (numbers) => {
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

describe('잘못된 값을 입력 받은 경우 테스트', () => {
  test("Moving 입력 값 오류 - ['U', 'X', 'U']", () => {
    const logSpy = getLogSpy();
    const input = ['3', 'U', 'X', 'D', 'U'];
    const random = ['1', '0', '1'];
    const messages = [
      '[ O ]',
      '[   ]',
      '[ERROR]',
      '[ O |   ]',
      '[   | O ]',
      '[ O |   | O ]',
      '[   | O |   ]',
    ];

    mockRandom(random);
    mockInput(input);

    const gameController = new BridgeGameController();

    gameController.getBridgeSize();
    gameController.getMoving();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
    expect();
  });

  test('Retry 입력 값 오류', () => {
    const logSpy = getLogSpy();
    const input = ['3', 'U', 'U', 'X', 'R', 'U', 'D', 'U'];
    const random = ['1', '0', '1'];
    const messages = [
      '[ O ]',
      '[   ]',
      '[ O | X ]',
      '[   |   ]',
      '[ERROR]',
      '[ O ]',
      '[   ]',
      '[ O |   ]',
      '[   | O ]',
      '[ O |   | O ]',
      '[   | O |   ]',
    ];

    mockRandom(random);
    mockInput(input);

    const gameController = new BridgeGameController();

    gameController.getBridgeSize();
    gameController.getMoving();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
    expect();
  });
});
