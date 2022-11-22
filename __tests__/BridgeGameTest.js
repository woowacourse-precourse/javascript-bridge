const BridgeGame = require('../src/BridgeGame');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

describe('게임 기능 테스트', () => {
  test('validateSizeRange', () => {
    const bridgeGame = new BridgeGame(3);

    expect(() => bridgeGame.validateSizeRange(2)).toThrowError('[ERROR]');
    expect(() => bridgeGame.validateSizeRange(21)).toThrowError('[ERROR]');

    expect(() => bridgeGame.validateSizeRange(3)).not.toThrowError();
    expect(() => bridgeGame.validateSizeRange(20)).not.toThrowError();
  });

  test('validateUnd', () => {
    const bridgeGame = new BridgeGame(3);

    expect(() => bridgeGame.validateUnd('F')).toThrowError('[ERROR]');
    expect(() => bridgeGame.validateUnd('S')).toThrowError('[ERROR]');

    expect(() => bridgeGame.validateUnd('U')).not.toThrowError();
    expect(() => bridgeGame.validateUnd('D')).not.toThrowError();
  });

  test('move', () => {
    BridgeRandomNumberGenerator.generate = jest.fn();

    BridgeRandomNumberGenerator.generate.mockReturnValue(0);
    const bridgeGame = new BridgeGame(3);
    let [condition, bridge, userState, countTry] = bridgeGame.move('U');

    expect(condition).toEqual(2);
    expect(bridge).toEqual(['D', 'D', 'D']);
    expect(userState).toEqual(['U']);
    expect(countTry).toEqual(1);

    [condition, bridge, userState, countTry] = bridgeGame.move('D');
    expect(condition).toEqual(1);
    expect(bridge).toEqual(['D', 'D', 'D']);
    expect(userState).toEqual(['U', 'D']);
    expect(countTry).toEqual(1);

    [condition, bridge, userState, countTry] = bridgeGame.move('D');
    expect(condition).toEqual(0);
    expect(bridge).toEqual(['D', 'D', 'D']);
    expect(userState).toEqual(['U', 'D', 'D']);
    expect(countTry).toEqual(1);
  });

  test('retry', () => {
    BridgeRandomNumberGenerator.generate = jest.fn();

    BridgeRandomNumberGenerator.generate.mockReturnValue(0);
    const bridgeGame = new BridgeGame(3);
    bridgeGame.move('U');
    bridgeGame.move('U');
    bridgeGame.retry();

    let [_, __, userState, countTry] = bridgeGame.move('U');

    expect(userState).toEqual(['U']);
    expect(countTry).toEqual(2);
  });
});
