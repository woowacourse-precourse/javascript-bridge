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

describe('Map 출력 테스트', () => {
  test("Map 출력 - ['U', 'D', 'U']", () => {
    const logSpy = getLogSpy();
    const input = ['3', 'U', 'D', 'U'];
    const random = ['1', '0', '1'];
    const messages = [
      "['O']",
      "[' ']",
      "['O' | ' ']",
      "[' ' | 'O']",
      "['O' | ' ' | 'O']",
      "[' ' | 'O' | ' ']",
    ];

    mockRandom(random);
    mockInput(input);

    const gameController = new BridgeGameController();

    gameController.getBridgeSize();
    gameController.getMoving();
    gameController.getMoving();
    gameController.getMoving();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
    expect();
  });
});
