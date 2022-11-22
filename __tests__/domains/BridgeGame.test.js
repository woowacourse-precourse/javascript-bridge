const { Tile } = require('../../src/constants');
const Bridge = require('../../src/domains/Bridge');
const BridgeGame = require('../../src/domains/BridgeGame');
const ValidationError = require('../../src/errors/ValidationError');

describe('BridgeGame 클래스 테스트', () => {
  test('Bridge 이외의 값을 주었을 때 예외를 발생시키는지', () => {
    expect(() => {
      new BridgeGame('odd value');
    }).toThrow(ValidationError);
  });

  test('시도 횟수가 잘 올라가는지 테스트', () => {
    const bridgeGame = new BridgeGame(new Bridge([Tile.UP, Tile.DOWN]));
    expect(bridgeGame.getTrialCount()).toBe(1);

    bridgeGame.retry();
    expect(bridgeGame.getTrialCount()).toBe(2);
  });
});
