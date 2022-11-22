const BridgeGame = require('../src/BridgeGame');
const InputView = require('../src/InputView');
const MissionUtils = require('@woowacourse/mission-utils');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
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

describe('InputView 테스트', () => {
  test('readBridgeSize 에러 테스트', () => {
    const spy = getLogSpy();
    const logs = ['[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.', '[ERROR] 다리 길이를 입력하셔야 합니다'];
    mockQuestions(['1', '']);
    let bridgegame = new BridgeGame();
    InputView.readBridgeSize(bridgegame);
    logs.forEach((log) => {
      expect(spy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('readMoving 에러 테스트', () => {
    const spy = getLogSpy();
    const logs = [
      '[ERROR] 이동하실 방향은 (위: U, 아래: D)만을 입력하셔야 합니다.',
      '[ERROR] 이동하실 방향 위: U, 아래: D)에 대해 입력하셔야 합니다.',
      '[ERROR] 한번에 한칸에 대한 명령(위: U, 아래: D)만을 입력하셔야 합니다.',
    ];
    mockRandoms([0, 1, 0, 1]);
    mockQuestions(['1', 'a', '', 'UD']);
    let bridgegame = new BridgeGame();
    InputView.readMoving(bridgegame);
    logs.forEach((log) => {
      expect(spy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('readGameCommand 에러 테스트', () => {
    const spy = getLogSpy();
    const logs = [
      '[ERROR] 게임을 다시 시도할지 여부는 (재시도: R, 종료: Q)만을 입력하셔야 합니다.',
      '[ERROR] 게임을 다시 시도할지 여부 (재시도: R, 종료: Q)를 입력하셔야 합니다.',
    ];
    mockRandoms([0, 1, 0, 1, 1]);
    mockQuestions(['5', 'D', 'D', 'm', '', 'D', 'U', 'D', 'U', 'U']);
    let bridgegame = new BridgeGame();
    InputView.readBridgeSize(bridgegame);
    logs.forEach((log) => {
      expect(spy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
