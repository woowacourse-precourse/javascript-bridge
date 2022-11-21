const BridgeGame = require('../src/BridgeGame');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers
    .reduce((acc, input) => acc
      .mockImplementationOnce((question, callback) => {
        callback(input);
      }), MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers
    .reduce((acc, number) => acc
      .mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

describe('다리 건너기 테스트', () => {
  test('다리 건너기 기록 체크', () => {
    mockRandoms([1, 0, 0]);
    const input = ['U', 'D', 'U'];
    const historyList = [
      new Map([['U', ['O']], ['D', [' ']]]),
      new Map([['U', ['O', ' ']], ['D', [' ', 'O']]]),
      new Map([['U', ['O', ' ', 'X']], ['D', [' ', 'O', ' ']]]),
    ];
    const bridgeGame = new BridgeGame();
    bridgeGame.makePattern(3);
    input.forEach((path, index) => {
      expect(bridgeGame
        .move(path).getHistory())
        .toEqual(historyList[index]);
      bridgeGame.incrementDistance();
    });
  });
});
