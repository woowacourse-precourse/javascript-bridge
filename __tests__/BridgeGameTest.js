const BridgeGame = require('../src/service/BridgeGame');

test.each([
  ['R', true],
  ['Q', false],
])('게임을 재시작할 것인지 반환하는 기능 테스트', (command, expected) => {
  const bridgeGame = new BridgeGame();
  const result = bridgeGame.retry(command);
  expect(result).toBe(expected);
});
