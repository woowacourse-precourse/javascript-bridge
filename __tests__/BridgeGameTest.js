const BridgeGame = require('../src/BridgeGame');

describe('BridgeGameTest', () => {
  test('다리 길이 입력 예외 테스트', () => {
    const BRIDGE_SIZE_INPUT = ['1', '21', 'a'];
    expect(() => {
      const BRIDGE_GAME = new BridgeGame();
      BRIDGE_SIZE_INPUT.forEach((input) => { BRIDGE_GAME.validateBridgeSize(input); });
    }).toThrow('[ERROR] 유효하지 않은 다리 길이입니다.');
  });
});
