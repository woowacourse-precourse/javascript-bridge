const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/Model/BridgeGame');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('BridgeGame 클래스 테스트', () => {
  mockRandoms([1, 0, 1]);
  const bridgeGame = new BridgeGame(3);

  test('move 메서드 및 하위 기능 테스트', () => {
    const testInput = 'U';
    const testMoveResult = bridgeGame.move(testInput);
    const testBridgeUpper = testMoveResult[0];
    const testBridgeLower = testMoveResult[1];
    expect(testBridgeUpper[0]).toEqual(' O ');
    expect(testBridgeLower[0]).toEqual('   ');
  });

  test('retry 메서드 테스트', () => {
    const testInput = 'D';
    bridgeGame.move(testInput);
    bridgeGame.retry();
    expect(bridgeGame.getTrialCount()).toEqual(2);
    expect(bridgeGame.getBridgeUpper()).toEqual([]);
    expect(bridgeGame.getBridgeLower()).toEqual([]);
    expect(bridgeGame.getGameWin()).toEqual(undefined);
  });
});
