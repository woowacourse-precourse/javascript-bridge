const BridgeGame = require('../src/BridgeGame');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce(
    (acc, input) => acc.mockImplementationOnce((question, callback) => {
      callback(input);
    }),
    MissionUtils.Console.readLine,
  );
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('다리 건너기 테스트', () => {
  test('사이즈 테스트', () => {
    mockRandoms([1, 0, 0]);
    const result = ['U', 'D', 'D'];

    expect(BridgeGame.makePattern(3)).toEqual(result);
  });
  test.each([
    [['U', 'D', 'D'], 3, true],
    [['U', 'D', 'D'], 2, false],
    [['U', 'D', 'D', 'D'], 4, true],
  ])(
    'pattern 길이와 distance가 같으면 게임 완료 테스트',
    (pattern, incrementCount, result) => {
      const bridgeGame = new BridgeGame();
      Array.from({ length: incrementCount }, () => bridgeGame.incrementDistance());
      bridgeGame.setPattern(pattern);
      expect(bridgeGame.isEndGame()).toEqual(result);
    },
  );
  test.each([
    [1, 2],
    [3, 4],
    [4, 5],
  ])('재시도 횟수 테스트', (incrementRetryCount, result) => {
    const bridgeGame = new BridgeGame();
    Array.from({ length: incrementRetryCount }, () => bridgeGame.retry());
    expect(bridgeGame.getTryCount()).toEqual(result);
  });
  test.each([
    [2, 'D', true],
    [2, 'U', false],
    [1, 'D', true],
  ])(
    'path 체크 테스트 일치하면 true, 틀리면 false 출력',
    (distance, chooseStep, result) => {
      const bridgeGame = new BridgeGame();
      Array.from({ length: distance }, () => bridgeGame.incrementDistance());
      bridgeGame.setPattern(['U', 'D', 'D']);
      expect(bridgeGame.isCorrectPath(chooseStep)).toEqual(result);
    },
  );
  test('다리 건너기 기록 체크', () => {
    mockRandoms([1, 0, 0]);
    const input = ['U', 'D', 'U'];
    const historyList = [
      new Map([
        ['U', ['O']],
        ['D', [' ']],
      ]),
      new Map([
        ['U', ['O', ' ']],
        ['D', [' ', 'O']],
      ]),
      new Map([
        ['U', ['O', ' ', 'X']],
        ['D', [' ', 'O', ' ']],
      ]),
    ];
    const bridgeGame = new BridgeGame();
    bridgeGame.setPattern(BridgeGame.makePattern(3));

    input.forEach((path, index) => {
      expect(bridgeGame.move(path).getHistory()).toEqual(historyList[index]);
      bridgeGame.incrementDistance();
    });
  });
});
