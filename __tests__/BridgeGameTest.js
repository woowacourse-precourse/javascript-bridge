const BridgeGame = require('../src/BridgeGame');
const bridgeGame = new BridgeGame();

describe('다리 건너기 테스트', () => {
  test('사용자 입력과 다리가 맞지 않으면 X 출력', () => {
    const userMoving = 'U';
    const bridge = ['D', 'U', 'D'];
    expect(bridgeGame.move(userMoving, bridge)).toBe('X');
  });
  test('사용자 입력과 다리가 맞지 않으면 O 출력', () => {
    const userMoving = 'D';
    const bridge = ['D', 'U', 'D'];
    expect(bridgeGame.move(userMoving, bridge)).toBe('O');
  });
});
