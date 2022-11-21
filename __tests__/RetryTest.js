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

describe('게임 재실행 테스트', () => {
  test('3칸 중 2번째 입력에 실패한 뒤 재실행 버튼을 누른 경우', () => {
    const logSpy = getLogSpy();
    const input = ['3', 'U', 'U', 'R', 'U', 'D', 'D'];
    const random = ['1', '0', '0'];
    const messages = [
      '[ O ]',
      '[   ]',
      '[ O | X ]',
      '[   |   ]',
      '[ O ]',
      '[   ]',
      '[ O |   ]',
      '[   | O ]',
      '[ O |   |   ]',
      '[   | O | O ]',
    ];

    mockRandom(random);
    mockInput(input);

    const gameController = new BridgeGameController();

    gameController.getBridgeSize();
    gameController.getMoving();
    gameController.getMoving();
    gameController.getMoving();
    gameController.getMoving();
    gameController.getMoving();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });

    expect();
  });
});
