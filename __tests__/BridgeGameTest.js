const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/BridgeGame');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('이동하기와 재시작하기 테스트', () => {
  test('이동 테스트', () => {
    mockRandoms([1, 0, 1]);

    const game = new BridgeGame(3);
    let isCorrect = game.move('U');
    expect(game.passedUpperBridgePads).toEqual(['O']);
    expect(game.passedLowerBridgePads).toEqual([' ']);
    expect(isCorrect).toEqual(true);

    isCorrect = game.move('U');
    expect(game.passedUpperBridgePads).toEqual(['O', 'X']);
    expect(game.passedLowerBridgePads).toEqual([' ', ' ']);
    expect(isCorrect).toEqual(false);
  });

  test('다시 하기 테스트', () => {
    mockRandoms([1, 0, 1]);
    
    const game = new BridgeGame(3);
    let currentResult = game.move('U');
    const restart = game.retry('R');
    const quit = game.retry('Q');

    expect(restart).toEqual(true);
    expect(quit).toEqual(false);
  });
});