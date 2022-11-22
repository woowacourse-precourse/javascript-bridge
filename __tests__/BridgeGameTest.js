const BridgeGame = require('../src/BridgeGame');

describe('게임 기능 테스트', () => {
  test('validateSizeRange', () => {
    const bridgeGame = new BridgeGame(3);

    expect(() => bridgeGame.validateSizeRange(2)).toThrowError('[ERROR]');
    expect(() => bridgeGame.validateSizeRange(21)).toThrowError('[ERROR]');

    expect(() => bridgeGame.validateSizeRange(3)).not.toThrowError();
    expect(() => bridgeGame.validateSizeRange(20)).not.toThrowError();
  });
});
