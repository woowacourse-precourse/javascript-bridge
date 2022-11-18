const BridgeGame = require('../src/BridgeGame');

const bridgegame = new BridgeGame();

test('사용자가 입력한 칸이 위이고, 이용가능한 다리가 위인 경우', () => {
  expect(bridgegame.move('U', 'U')).toBe(true);
  expect(bridgegame.move('U', 'D')).toBe(false);
  expect(bridgegame.move('D', 'U')).toBe(false);
  expect(bridgegame.move('D', 'D')).toBe(true);
});
