const BridgeGame = require('../src/BridgeGame');

describe('BridgeGameTest1', () => {
  test('다리 길이 입력 예외 테스트', () => {
    const BRIDGE_SIZE_INPUT = ['1', '21', 'a'];
    const BRIDGE_GAME = new BridgeGame();
    expect(() => {
      BRIDGE_SIZE_INPUT.forEach((input) => { BRIDGE_GAME.validateBridgeSize(input); });
    }).toThrow('[ERROR] 유효하지 않은 다리 길이입니다.');
  });
});

describe('BridgeGameTest2', () => {
  test('다리 길이 입력 예외 테스트', () => {
    const BRIDGE_MOVE_INPUT = ['3', 'u', 'UD'];
    const BRIDGE_GAME = new BridgeGame();
    expect(() => {
      BRIDGE_MOVE_INPUT.forEach((input) => { BRIDGE_GAME.validateBridgeMove(input); });
    }).toThrow('[ERROR] U 또는 D를 입력하세요.');
  });
});
