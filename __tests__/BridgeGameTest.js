const BridgeGame = require('../src/BridgeGame');

describe('Bridge Game Test', () => {
  describe('사용자의 입력값이 일치할 경우', () => {
    test('사용자의 입력값이 U로 일치할 경우 Test', () => {
      const bridgeGame = new BridgeGame(['U', 'D', 'U']);
      const result = bridgeGame.move(['U']);
      expect(result).toEqual([['O', ' ']]);
    });

    test('사용자의 입력값이 D로 일치할 경우 Test', () => {
      const bridgeGame = new BridgeGame(['D', 'D', 'U']);
      const result = bridgeGame.move(['D']);
      expect(result).toEqual([[' ', 'O']]);
    });
  });

  describe('사용자의 입력값이 일치하지 않을 경우', () => {
    test('사용자의 입력값이 일치하지 않을 경우 Test', () => {
      const bridgeGame = new BridgeGame(['D', 'D', 'U']);
      const result = bridgeGame.move(['U']);
      expect(result).toEqual([['X', ' ']]);
    });

    test('사용자의 입력값이 일치하지 않을 경우 Test', () => {
      const bridgeGame = new BridgeGame(['U', 'D', 'U']);
      const result = bridgeGame.move(['D']);
      expect(result).toEqual([[' ', 'X']]);
    });
  });
});
